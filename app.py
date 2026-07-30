from pathlib import Path

import pandas as pd
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app)

BASE_DIR = Path(__file__).resolve().parent
DATA_PATH = BASE_DIR / "static" / "skintific.csv"

REQUIRED_COLUMNS = {
    "id",
    "name",
    "category",
    "skin type",
    "concerns",
    "ingredients",
    "description",
    "product_url",
}

KNOWN_CONCERNS = [
    "damaged skin barrier",
    "uneven skin texture",
    "uneven skin tone",
    "sensitive skin",
    "rough skin texture",
    "rough texture",
    "dark spots",
    "dry skin",
    "excess oil",
    "clogged pores",
    "enlarged pores",
    "fine lines",
    "blackheads",
    "dehydration",
    "hyperpigmentation",
    "irritation",
    "redness",
    "dull skin",
    "acne",
    "oiliness",
]

KNOWN_SKIN_TYPES = [
    "all skin types",
    "oily skin",
    "dry skin",
    "combination skin",
    "sensitive skin",
    "normal skin",
    "oily",
    "dry",
    "combination",
    "sensitive",
    "normal",
]


def normalize_text(value):
    """Convert request values or dataframe values into comparable lowercase text."""
    if value is None:
        return ""
    if isinstance(value, (list, tuple, set)):
        value = " ".join(str(item) for item in value if item is not None)
    return " ".join(str(value).replace(",", " ").lower().split())


def extract_known_phrases(text, known_phrases):
    """
    Mengambil frasa yang dikenali dari sebuah teks.
    Frasa diurutkan dari yang paling panjang agar phrase seperti
    'damaged skin barrier' atau 'dark spots' tetap utuh.
    """
    normalized = normalize_text(text)
    matches = []

    sorted_phrases = sorted(known_phrases, key=len, reverse=True)
    for phrase in sorted_phrases:
        if phrase in normalized:
            matches.append(phrase)

    return matches


def extract_skin_types(text):
    return extract_known_phrases(text, KNOWN_SKIN_TYPES)


def extract_concerns(text):
    return extract_known_phrases(text, KNOWN_CONCERNS)


def split_keywords(text):
    matched_concerns = extract_concerns(text)
    return matched_concerns if matched_concerns else [normalize_text(text)]


def read_products():
    if not DATA_PATH.exists():
        raise FileNotFoundError(f"File data tidak ditemukan: {DATA_PATH}")

    products = pd.read_csv(DATA_PATH)
    products.columns = products.columns.str.strip().str.lower()

    missing_columns = REQUIRED_COLUMNS - set(products.columns)
    if missing_columns:
        missing = ", ".join(sorted(missing_columns))
        raise ValueError(f"Kolom CSV belum lengkap: {missing}")

    products = products.fillna("")
    products["id"] = pd.to_numeric(products["id"], errors="coerce").fillna(0).astype(int)

    for column in ["name", "category", "skin type", "concerns", "ingredients", "description", "product_url"]:
        products[column] = products[column].astype(str).str.strip()

    products["skin_type_clean"] = products["skin type"].map(normalize_text)
    products["category_clean"] = products["category"].map(normalize_text)
    products["concerns_clean"] = products["concerns"].map(normalize_text)
    products["ingredients_clean"] = products["ingredients"].map(normalize_text)

    # simpan versi list agar tidak ekstraksi berulang saat scoring
    products["skin_type_list"] = products["skin_type_clean"].apply(extract_skin_types)
    products["concerns_list"] = products["concerns_clean"].apply(extract_concerns)

    # teks gabungan untuk TF-IDF
    products["search_text"] = (
        (products["skin_type_clean"] + " ") * 2
        + (products["concerns_clean"] + " ") * 3
        + products["ingredients_clean"]
        + " "
        + (products["category_clean"] + " ") * 2
    )

    return products


df = read_products()
tfidf = TfidfVectorizer(ngram_range=(1, 2), min_df=1)
tfidf_matrix = tfidf.fit_transform(df["search_text"])

print("[OK] Data loaded:", len(df), "products")
print("[OK] TF-IDF matrix:", tfidf_matrix.shape)

def format_product(row, score):
    return {
        "id": int(row["id"]),
        "name": row["name"],
        "category": row["category"],
        "skin_type": row["skin_type_list"] if row["skin_type_list"] else [row["skin_type_clean"]],
        "concerns": row["concerns_list"] if row["concerns_list"] else [row["concerns_clean"]],
        "ingredients": row["ingredients_clean"],
        "description": row["description"],
        "product_url": row["product_url"],
        "score": round(float(score), 4),
    }


def get_recommendations(skin_type, concerns=None):
    skin_text = normalize_text(skin_type)
    concern_text = normalize_text(concerns or [])

    user_skin_types = extract_skin_types(skin_text)
    user_concerns = extract_concerns(concern_text)

    skin_part = " ".join(user_skin_types) if user_skin_types else skin_text
    concern_part = " ".join(user_concerns) if user_concerns else concern_text

    query = (
        (skin_part + " ") * 2
        + (concern_part + " ") * 3
    ).strip()

    if not query:
        return []

     # Hitung tf-idf query
    query_vector = tfidf.transform([query])

     # Hitung Cosine Similarity terhadap seluruh produk
    similarity_scores = cosine_similarity(query_vector, tfidf_matrix).flatten()

     # Simpan seluruh produk beserta nilai similarity 
    scored_products = []

    for index, row in df.iterrows():

        score = similarity_scores[index]

        # ==========================
        # Filter Skin Type
        # ==========================
        skin_match = (
            not user_skin_types
            or "all skin types" in row["skin_type_list"]
            or any(
                skin in row["skin_type_list"]
                for skin in user_skin_types
            )
        )

        # ==========================
        # Filter Concern
        # ==========================
        concern_match = (
            not user_concerns
            or any(
                concern in row["concerns_list"]
                for concern in user_concerns
            )
        )

        # hanya produk yang sesuai
        if skin_match and concern_match > 0:
            scored_products.append((index, score))

    # Ranking berdasarkan Cosine Similarity
    scored_products.sort(
        key=lambda item: item[1],
        reverse=True
    )

     # Kembalikan seluruh hasil rekomendasi
    return [
        format_product(df.iloc[index], score)
        for index, score in scored_products
    ]


@app.route("/", methods=["GET"])
def index():
    return send_from_directory(BASE_DIR / "templates", "index.html")


@app.route("/api/index", methods=["GET"])
def api_index():
    return send_from_directory(BASE_DIR / "templates", "index.html")


@app.route("/style.css", methods=["GET"])
def style():
    return send_from_directory(BASE_DIR / "static", "style.css")


@app.route("/script.js", methods=["GET"])
def script():
    return send_from_directory(BASE_DIR / "static", "script.js")


@app.route("/image/<path:filename>", methods=["GET"])
def images(filename):
    image_dir = BASE_DIR / "static" / "image"

    print("[DEBUG] BASE_DIR:", BASE_DIR)
    print("[DEBUG] IMAGE_DIR:", image_dir)
    print("[DEBUG] EXISTS:", image_dir.exists())
    print("[DEBUG] FILE:", filename)
    print("[DEBUG] FILE EXISTS:", (image_dir / filename).exists())

    return send_from_directory(image_dir, filename)


@app.route("/api", methods=["GET"])
def api_status():
    return jsonify(
        {
            "message": "Skintific Recommender API is running",
            "total_products": int(len(df)),
        }
    )


@app.route("/api/recommend", methods=["POST"])
def recommend():
    data = request.get_json(silent=True) or {}

    skin_type = data.get("skin_type", "")
    concerns = data.get("concerns", [])

    if not normalize_text(skin_type):
        return jsonify({"error": "skin_type is required"}), 400

    recommendations = get_recommendations(
        skin_type=skin_type,
        concerns=concerns,
    )
    return jsonify(recommendations)


@app.route("/api/products", methods=["GET"])
def get_all_products():
    products = [format_product(row, score=0) for _, row in df.iterrows()]
    return jsonify(products)


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
