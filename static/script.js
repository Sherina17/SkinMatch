// ===== DATA =====
    const productImageMap = {
        "skintific toner 5% aha bha pha exfoliating 80ml": "/image/Skintific Toner 5 Percent AHA BHA PHA Exfoliating 80ml.jpeg",
        "skintific toner pure centella acne calming 80ml": "/image/Skintific Toner Pure Centella Acne Calming 80ml.jpeg",
        "skintific toner 5x ceramide soothing 80ml": "/image/Skintific Toner 5X Ceramide Soothing 80ml.jpeg",
        "skintific toner pink niacinamide brightening essence 80ml": "/image/Skintific Toner Pink Niacinamide Brightening Essence 80ml.jpeg",
        "skintific toner 4d hyaluronic acid barrier essence 100ml": "/image/Skintific Toner 4D Hyaluronic Acid Barrier Essence 100ml.jpeg",
        "skintific toner glycolic daily clarifying 80ml": "/image/Skintific Toner Glycolic Daily Clarifying 80ml.jpg",
        "skintific 5x ceramide low ph cleanser face wash": "/image/Skintific 5X Ceramide Low pH Cleanser Face Wash.jpeg",
        "skintific cleansing amino acid gentle mousse face wash": "/image/Skintific Cleansing Amino Acid Gentle Mousse Face Wash.jpeg",
        "skintific white truffle cleansing essence face wash": "/image/Skintific White Truffle Cleansing Essence Face Wash.jpeg",
        "skintific cleansing balm makeup remover 40g": "/image/Skintific Cleansing Balm Makeup Remover 40g.jpeg",
        "skintific symwhite 377 dark spot serum": "/image/Skintific Symwhite 377 Dark Spot Serum.jpg",
        "skintific 12% aha bha pha lha peeling solution": "/image/Skintific 12 Percent AHA BHA PHA LHA Peeling Solution.webp",
        "skintific 5x ceramide skin barrier serum": "/image/Skintific 5X Ceramide Skin Barrier Serum.jpg",
        "skintific 4d hyaluronic acid hydrating serum": "/image/Skintific 4D Hyaluronic Acid Hydrating Serum.jpeg",
        "skintific acne serum 2% salicylic acid": "/image/Skintific Acne Serum 2 Percent Salicylic Acid.jpeg",
        "skintific 10% niacinamide brightening serum": "/image/Skintific 10 Percent Niacinamide Brightening Serum.jpeg",
        "skintific serum 3% tranexamic acid advanced bright 20ml": "/image/Skintific Serum 3 Percent Tranexamic Acid Advanced Bright 20ml.jpeg",
        "skintific vitamin c serum brightening facial 20ml": "/image/Skintific Vitamin C Serum Brightening Facial 20ml.jpeg",
        "skintific 5x ceramide barrier moisture gel 80g": "/image/Skintific 5x Ceramide Barrier Moisture Gel 80g.jpeg",
        "skintific symwhite 377 dark spot moisturizer gel": "/image/Skintific Symwhite 377 Dark Spot Moisturizer Gel.jpeg",
        "skintific msh niacinamide brightening moisturizer gel": "/image/Skintific MSH Niacinamide Brightening Moisturizer Gel.webp",
        "skintific 5% panthenol acne calming water gel": "/image/Skintific 5 Percent Panthenol Acne Calming Water Gel.png",
        "skintific 3x acid acne-care gel moisturizer": "/image/Skintific 3X Acid Acne-Care Gel Moisturizer.jpg",
        "skintific sensitive moisture gel 40ml": "/image/Skintific Sensitive Moisture Gel 40ml.jpg",
        "skintific truffle biome skin reborn cream gel moisturizer": "/image/Skintific Truffle Biome Skin Reborn Cream Gel Moisturizer.png",
        "skintific mugwort acne clay stick 40g": "/image/Skintific Mugwort Acne Clay Stick 40g.jpeg",
        "skintific alaska volcano pore clay stick 40g": "/image/Skintific Alaska Volcano Pore Clay Stick 40g.jpeg",
        "skintific 5x ceramide soothing & repairing mask": "/image/Skintific 5X Ceramide Soothing & Repairing Mask.jpeg",
        "skintific sunscreen 5x ceramide serum spf 50 pa++++": "/image/Skintific Sunscreen 5X Ceramide Serum SPF 50 PA++++.jpeg",
        "skintific sunscreen ultra light serum spf 50 pa++++": "/image/Skintific Sunscreen Ultra Light Serum SPF 50 PA++++.webp",
        "skintific sunscreen spray all day light mist spf 50 pa++++ 120 ml": "/image/Skintific Sunscreen Spray All Day Light Mist Spf 50 PA++++ 120 ml.jpeg",
        "skintific sunblock outdoor sunscreen spray spf 50+ pa++++": "/image/Skintific Sunblock Outdoor Sunscreen Spray SPF 50+ PA++++.jpeg"
    };

    const ingredientGlossary = [
        { name:"Ceramide",           benefit:"Membantu memperkuat skin barrier dan menjaga kelembapan kulit.", bestFor:"Kulit kering, sensitif, atau skin barrier yang terganggu" },
        { name:"Niacinamide",        benefit:"Membantu mencerahkan warna kulit tidak merata, mengontrol minyak berlebih, dan mendukung skin barrier.", bestFor:"Kulit kusam, berminyak, atau warna kulit tidak merata" },
        { name:"Hyaluronic Acid",    benefit:"Membantu menarik dan mempertahankan kelembapan agar kulit tetap terhidrasi.", bestFor:"Kulit kering atau dehidrasi" },
        { name:"Centella Asiatica",  benefit:"Membantu menenangkan kemerahan dan mendukung pemulihan kulit yang mudah iritasi.", bestFor:"Kulit sensitif, kemerahan, atau mudah iritasi" },
        { name:"Panthenol",          benefit:"Membantu menenangkan kulit dan menjaga kelembapan.", bestFor:"Kulit sensitif, kering, atau acne-prone" },
        { name:"Tranexamic Acid",    benefit:"Membantu menyamarkan tampilan dark spots dan warna kulit yang tidak merata.", bestFor:"Dark spots, hyperpigmentation, atau kulit kusam" },
        { name:"Alpha Arbutin",      benefit:"Membantu mencerahkan tampilan kulit dan menyamarkan noda hitam.", bestFor:"Warna kulit tidak merata atau hyperpigmentation" },
        { name:"Salicylic Acid",     benefit:"Membantu mengeksfoliasi pori-pori dan mengurangi penumpukan minyak berlebih.", bestFor:"Kulit berminyak, acne-prone, atau pori-pori tersumbat" },
        { name:"Glycolic Acid",      benefit:"Membantu mengangkat sel kulit mati dan memperbaiki tampilan tekstur kulit kasar.", bestFor:"Kulit kusam, tekstur kasar, atau pori-pori besar" },
        { name:"Lactobionic Acid",   benefit:"Memberikan eksfoliasi lembut sekaligus membantu menjaga hidrasi kulit.", bestFor:"Kulit kusam atau bertekstur" },
        { name:"Ectoin",             benefit:"Membantu melindungi dan menenangkan skin barrier.", bestFor:"Kulit sensitif, mudah iritasi, atau acne-prone" },
        { name:"Mugwort",            benefit:"Membantu menenangkan kulit acne-prone dan mengurangi minyak berlebih.", bestFor:"Kulit acne-prone atau berminyak" }
    ];

    const RECOMMENDATION_API_URL = '/api/recommend';

    const concernKeywordMap = {
        'Acne':                   ['acne'],
        'Acne-Prone Skin':        ['acne','acne-prone','breakouts'],
        'Acne Breakouts':         ['acne','breakouts'],
        'Acne Scars':             ['acne scars','hyperpigmentation'],
        'Blackheads':             ['blackheads','clogged pores'],
        'Clogged Pores':          ['clogged pores','enlarged pores'],
        'Damaged Skin Barrier':   ['damaged skin barrier','sensitive skin'],
        'Dark Spots':             ['dark spots','hyperpigmentation','uneven skin tone'],
        'Dehydration':            ['dehydration','dry skin'],
        'Dry Skin':               ['dry skin','dehydration'],
        'Dull Skin':              ['dull skin','uneven skin tone'],
        'Early Signs of Aging':   ['early signs of aging','fine lines','aging'],
        'Fine Lines':             ['fine lines','early signs of aging','aging'],
        'Inflammation':           ['inflammation','redness','irritation'],
        'Enlarged Pores':         ['enlarged pores','clogged pores'],
        'Excess Oil':             ['excess oil','acne'],
        'Hyperpigmentation':      ['hyperpigmentation','dark spots','uneven skin tone'],
        'Irritation':             ['irritation','redness','sensitive skin'],
        'Redness':                ['redness','sensitive skin','irritation'],
        'Rough Skin Texture':     ['rough skin texture','uneven skin texture'],
        'Sensitive Skin':         ['sensitive skin','redness','damaged skin barrier'],
        'Sun Exposure':           ['sun exposure','dark spots','dull skin'],
        'Tight Skin Feeling':     ['tight skin feeling','dry skin','dehydration'],
        'Uneven Skin Texture':    ['uneven skin texture','rough skin texture'],
        'Uneven Skin Tone':       ['uneven skin tone','dark spots','dull skin']
    };
    const goalKeywordMap = {
        'glass skin':    ['hydration','glow','skin barrier'],
        'calming':       ['calming','redness','irritation'],
        'anti-aging':    ['aging','wrinkles','fine lines'],
        'brightening':   ['brightening','dullness','dark spots'],
        'deep cleansing':['pores','acne','excess oil']
    };
    const categoryKeywordMap = {
        'glass skin': 'serum', 'calming': 'moisturizer',
        'anti-aging': 'serum', 'brightening': 'serum', 'deep cleansing': 'cleanser'
    };

    const skinTypeApiMap = {
        normal: 'normal skin',
        dry: 'dry skin',
        oily: 'oily skin',
        combination: 'combination skin',
        sensitive: 'sensitive skin'
    };

    // ===== STATE =====
    const quizState = {
        currentStep: 1,
        selectedSkinType: '',
        selectedConcerns:  [],
        selectedGoals:     []
    };

    // ===== QUIZ CONFIG =====
    const skinTypeOptions = [
        { id:'normal',     icon:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M8.5 10h.01"></path><path d="M15.5 10h.01"></path><path d="M8 15h8"></path></svg>', label:'Normal',     sub:'Kulit terasa seimbang, tidak terlalu berminyak atau kering' },
        { id:'dry',        icon:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11z"></path></svg>', label:'Dry',        sub:'Kulit sering terasa tertarik, kering, atau mudah mengelupas' },
        { id:'oily',       icon:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5s5 5.6 5 9.6a5 5 0 0 1-10 0c0-4 5-9.6 5-9.6z"></path><path d="M18.5 5.5l.7 1.5 1.5.7-1.5.7-.7 1.5-.7-1.5-1.5-.7 1.5-.7.7-1.5z"></path></svg>', label:'Oily',       sub:'Kulit mudah berminyak dan rentan mengalami pori-pori tersumbat' },
        { id:'combination',icon:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 3v18"></path><path d="M8.5 10h.01"></path><path d="M15.5 10h.01"></path><path d="M8.5 15c1 .8 2.1 1.2 3.5 1.2s2.5-.4 3.5-1.2"></path></svg>', label:'Combination',sub:'Area T-zone cenderung berminyak, sedangkan area pipi lebih kering' },
        { id:'sensitive',  icon:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5s6 4.2 6 9.2a6 6 0 0 1-12 0c0-5 6-9.2 6-9.2z"></path><path d="M9 13.5c.8.8 1.8 1.2 3 1.2s2.2-.4 3-1.2"></path><path d="M9.2 10.2h.01"></path><path d="M14.8 10.2h.01"></path></svg>', label:'Sensitive',  sub:'Kulit mudah kemerahan, perih, gatal, atau bereaksi terhadap produk tertentu' }
    ];

    const concernOptions = [
        { label:'Acne' },
        { label:'Acne Breakouts' },
        { label:'Acne Scars' },
        { label:'Blackheads' },
        { label:'Clogged Pores' },
        { label:'Damaged Skin Barrier' },
        { label:'Dark Spots' },
        { label:'Dehydration' },
        { label:'Dry Skin' },
        { label:'Dull Skin' },
        { label:'Early Aging' },
        { label:'Enlarged Pores' },
        { label:'Excess Oil' },
        { label:'Fine Lines' },
        { label:'Hyperpigmentation' },
        { label:'Inflammation' },
        { label:'Irritation' },
        { label:'Redness' },
        { label:'Rough Skin Texture' },
        { label:'Sensitive Skin' },
        { label:'Sun Exposure' },
        { label:'Uneven Skin Texture' },
        { label:'Uneven Skin Tone' }
    ];

    const goalOptions = [
        { id:'brightening',   label:'brightening',     sub:'Membantu kulit tampak lebih cerah dan merata' },
        { id:'calming',       label:'calming',         sub:'Membantu mengurangi kemerahan dan iritasi' },
        { id:'glass skin',    label:'glass skin',      sub:'Mendukung tampilan kulit lembap, halus, dan bercahaya' },
        { id:'anti-aging',    label:'anti-aging',      sub:'Membantu merawat kekencangan kulit dan tampilan fine lines' },
        { id:'deep cleansing',label:'deep cleansing',  sub:'Membantu membersihkan pori-pori dan mengontrol minyak' }
    ];

    // ===== INIT =====
    function initializeQuiz() {
        renderSkinTypeOptions();
        renderConcernOptions();
        renderGoalOptions();
        updateProgressBar();
    }

    function renderSkinTypeOptions() {
        const container = document.getElementById('skinTypeOptions');
        container.innerHTML = '';
        skinTypeOptions.forEach(opt => {
            const card = document.createElement('div');
            const isSelected = quizState.selectedSkinType === opt.id;
            card.className = `option-card ${isSelected ? 'selected' : ''}`;
            card.innerHTML = `<span class="option-icon">${opt.icon}</span><div class="option-label">${opt.label}</div><div class="option-sub">${opt.sub}</div>`;
            card.addEventListener('click', () => toggleSkinType(opt.id));
            container.appendChild(card);
        });
        updateCounter('skinType', quizState.selectedSkinType ? 1 : 0, 1);
    }

    function renderConcernOptions() {
        const container = document.getElementById('concernOptions');
        container.innerHTML = '';
        concernOptions.forEach(opt => {
            const pill = document.createElement('button');
            const isSelected = quizState.selectedConcerns.includes(opt.label);
            pill.className = `pill ${isSelected ? 'selected' : ''}`;
            pill.textContent = opt.label;
            pill.addEventListener('click', () => toggleConcern(opt.label));
            container.appendChild(pill);
        });
        updateCounter('concern', quizState.selectedConcerns.length, concernOptions.length);
    }

    function renderGoalOptions() {
        const container = document.getElementById('goalOptions');
        container.innerHTML = '';
        goalOptions.forEach(opt => {
            const card = document.createElement('div');
            const isSelected = quizState.selectedGoals.includes(opt.id);
            card.className = `option-card ${isSelected ? 'selected' : ''}`;
            card.innerHTML = `<div class="option-label">${opt.label}</div><div class="option-sub">${opt.sub}</div>`;
            card.addEventListener('click', () => toggleGoal(opt.id));
            container.appendChild(card);
        });
        updateCounter('goal', quizState.selectedGoals.length, goalOptions.length);
    }

    function updateCounter(type, count, max) {
        const counterEl = document.getElementById(`${type}Counter`);
        const fillEl    = document.getElementById(`${type}Fill`);
        const textEl    = document.getElementById(`${type}CountText`);
        if (!counterEl) return;
        counterEl.style.display = count > 0 ? 'flex' : 'none';
        if (fillEl) fillEl.style.width = `${(count / max) * 100}%`;
        if (textEl) textEl.textContent = type === 'skinType' ? 'Jenis kulit dipilih' : `${count} dipilih`;
    }

    function toggleSkinType(id) {
        quizState.selectedSkinType = id;
        renderSkinTypeOptions();
    }

    function toggleConcern(label) {
        const idx = quizState.selectedConcerns.indexOf(label);
        if (idx > -1) quizState.selectedConcerns.splice(idx, 1);
        else          quizState.selectedConcerns.push(label);
        renderConcernOptions();
    }

    function toggleGoal(id) {
        const idx = quizState.selectedGoals.indexOf(id);
        if (idx > -1) quizState.selectedGoals.splice(idx, 1);
        else          quizState.selectedGoals.push(id);
        renderGoalOptions();
    }

    function showNotification(message, options = {}) {
        const title = options.title || 'Perhatian';
        const type = options.type || 'info';
        const duration = options.duration || 4200;
        const iconMap = { info: 'i', warning: '!', error: 'x' };

        let stack = document.getElementById('notificationStack');
        if (!stack) {
            stack = document.createElement('div');
            stack.id = 'notificationStack';
            stack.className = 'notification-stack';
            stack.setAttribute('aria-live', 'polite');
            stack.setAttribute('aria-atomic', 'true');
            document.body.appendChild(stack);
        }

        const note = document.createElement('div');
        note.className = `notification ${type}`;
        note.setAttribute('role', type === 'error' ? 'alert' : 'status');
        note.innerHTML = `
            <div class="notification-icon">${iconMap[type] || 'i'}</div>
            <div>
                <div class="notification-title"></div>
                <div class="notification-message"></div>
            </div>
            <button class="notification-close" type="button" aria-label="Tutup notifikasi">&times;</button>
        `;
        note.querySelector('.notification-title').textContent = title;
        note.querySelector('.notification-message').textContent = message;

        const close = () => {
            note.classList.add('hide');
            note.addEventListener('animationend', () => note.remove(), { once: true });
        };

        note.querySelector('.notification-close').addEventListener('click', close);
        stack.appendChild(note);

        if (duration > 0) window.setTimeout(close, duration);
    }
    // ===== NAVIGATION =====
    function updateProgressBar() {
        for (let i = 1; i <= 3; i++) {
            const fill = document.getElementById(`step${i}Fill`);
            if (fill) fill.className = `progress-step-fill ${i <= quizState.currentStep ? 'done' : ''}`;
        }
        document.getElementById('progressLabel').textContent = `Langkah ${quizState.currentStep} dari 3`;
    }

    function validateStep() {
        if (quizState.currentStep === 1) return Boolean(quizState.selectedSkinType);
        if (quizState.currentStep === 2) return quizState.selectedConcerns.length > 0;
        if (quizState.currentStep === 3) return quizState.selectedGoals.length > 0;
        return false;
    }

    function nextStep() {
        if (!validateStep()) {
            showNotification(quizState.currentStep === 1 ? 'Silakan pilih satu jenis kulit untuk melanjutkan.' : 'Silakan pilih minimal satu opsi untuk melanjutkan.', { title: 'Pilihan belum lengkap', type: 'warning' });
            return;
        }
        if (quizState.currentStep < 3) { quizState.currentStep++; updateQuizDisplay(); }
        else submitQuiz();
    }

    function previousStep() {
        if (quizState.currentStep > 1) { quizState.currentStep--; updateQuizDisplay(); }
    }

    function updateQuizDisplay() {
        document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
        document.querySelector(`[data-step="${quizState.currentStep}"]`).classList.add('active');

        const backBtn   = document.getElementById('backBtn');
        const nextBtn   = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        backBtn.classList.toggle('visible', quizState.currentStep > 1);

        if (quizState.currentStep === 3) {
            nextBtn.style.display   = 'none';
            submitBtn.style.display = 'flex';
        } else {
            nextBtn.style.display   = 'flex';
            submitBtn.style.display = 'none';
        }

        updateProgressBar();
    }

    function resetQuiz() {
        quizState.currentStep      = 1;
        quizState.selectedSkinType  = '';
        quizState.selectedConcerns  = [];
        quizState.selectedGoals     = [];
        updateQuizDisplay();
        renderSkinTypeOptions();
        renderConcernOptions();
        renderGoalOptions();
        document.getElementById('products').classList.remove('show');
        document.querySelector('#quiz').scrollIntoView({ behavior:'smooth' });
    }

    function buildApiPayload() {
        const concernKws = quizState.selectedConcerns.flatMap(c => concernKeywordMap[c] || []);
        const goalKws    = quizState.selectedGoals.flatMap(g => goalKeywordMap[g] || []);
        const merged     = [...new Set([...concernKws, ...goalKws])];
        const category   = quizState.selectedGoals.length > 0 ? (categoryKeywordMap[quizState.selectedGoals[0]] || '') : '';
        const skinType   = skinTypeApiMap[quizState.selectedSkinType] || quizState.selectedSkinType;
        return { skin_type: skinType, concerns: merged};
    }

    async function getRecommendationsFromApi() {
        const response = await fetch(RECOMMENDATION_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(buildApiPayload())
        });
        if (!response.ok) throw new Error(`API ${response.status}`);
        const products = await response.json();
        if (!Array.isArray(products)) throw new Error('Bad format');
        return products.map((p, i) => ({
            id: p.id || i + 1,
            name: p.name || 'Skintific Product',
            category: p.category || 'Skincare',
            skinTypes: Array.isArray(p.skin_type) ? p.skin_type : [p.skin_type || 'all'],
            concerns: Array.isArray(p.concerns) ? p.concerns : String(p.concerns || '').split(',').map(s => s.trim()).filter(Boolean),
            goals: [],
            ingredients: String(p.ingredients || '').split(',').map(s => s.trim()).filter(Boolean),
            description: p.description || '',
            productUrl: p.product_url || '',
            gradient: 'linear-gradient(135deg,#F9CBD2,#E47990)',
            emoji: '\uD83E\uDDF4',
            score: p.score || 0
        }));
    }

    async function submitQuiz() {
        const btn = document.getElementById('submitBtn');
        const orig = btn.textContent;
        btn.disabled = true;
        btn.textContent = 'Mencari rekomendasi...';

    try {
        const recs = await getRecommendationsFromApi();

        displayResults(recs);
        document.getElementById('products').classList.add('show');
        document.getElementById('products').scrollIntoView({
            behavior: 'smooth'
        });

    } catch (e) {
        console.error(e);
        showNotification('Sistem rekomendasi tidak dapat diakses. Pastikan server Flask sedang berjalan.', { title: 'Gagal memuat rekomendasi', type: 'error', duration: 6000 });
    } finally {
        btn.disabled = false;
        btn.textContent = orig;
    }
    }

    // ===== DISPLAY RESULTS =====
    function displayResults(products) {
        const skinLabel    = quizState.selectedSkinType ? toTitleCase(quizState.selectedSkinType.replace(/-/g,' ')) : 'Kulit Anda';
        const concernLabel = quizState.selectedConcerns.slice(0,2).join(', ') || 'masalah kulit Anda';

        document.getElementById('resultsSubtitle').textContent =
        `Berdasarkan profil kulit yang Anda pilih, dengan fokus pada ${concernLabel}`;

        // Summary banner
        const banner = document.getElementById('recommendationSummaryBanner');
        const skinTagsHtml  = quizState.selectedSkinType ? `<strong>${skinLabel}</strong>` : '';
        const goalTagsHtml  = quizState.selectedGoals.map(g => `<strong>${toTitleCase(g)}</strong>`).join(', ');
        const concernCount  = quizState.selectedConcerns.length;
        banner.innerHTML = `
            <div class="recommendation-tag"><span>Jenis Kulit : </span>${skinTagsHtml || '<strong>-</strong>'}</div>
            <div class="recommendation-tag"><span>Tujuan : </span>${goalTagsHtml || '<strong>-</strong>'}</div>
            <div class="recommendation-tag"><span>Masalah Kulit : </span><strong>${concernCount} dipilih</strong></div>
        `;

        const grid = document.getElementById('productsGrid');
        grid.innerHTML = '';

        if (!products.length) {
            grid.innerHTML = '<div style="text-align:center;color:var(--text-mid);padding:2rem;">Tidak ada produk yang sesuai. Coba pilih opsi yang berbeda.</div>';
            return;
        }

        products.forEach((product, idx) => {
            const card = document.createElement('div');
            card.className = `product-card ${idx === 0 ? 'recommended' : ''}`;
            card.style.animationDelay = `${idx * 0.08}s`;

            // Image
            const imgWrap = document.createElement('div');
            imgWrap.className = 'product-image';
            const imageSrc = product.image || getProductImage(product.name);
            if (imageSrc) {
                const img = document.createElement('img');
                img.src = toAssetUrl(imageSrc); img.alt = product.name;
                img.style.cssText = 'width:100%;height:100%;object-fit:cover;';
                img.addEventListener('error', () => {
                    img.remove();
                    renderProductPlaceholder(imgWrap, product);
                }, { once: true });
                imgWrap.appendChild(img);
            } else {
                renderProductPlaceholder(imgWrap, product);
            }
            if (idx === 0) {
                const badge = document.createElement('div');
                badge.className = 'top-match-badge';
                badge.textContent = 'Rekomendasi Utama';
                imgWrap.appendChild(badge);
            }

            // Content
            const content = document.createElement('div');
            content.className = 'product-content';

            const badges = document.createElement('div');
            badges.className = 'product-badges';
            badges.innerHTML = `<span class="badge-category">${product.category}</span><span class="badge-skin">${formatSkinTypes(product.skinTypes)}</span>`;

            const title = document.createElement('h3');
            title.className = 'product-name';
            title.textContent = product.name;

            const summary = document.createElement('div');
            summary.className = 'product-summary';

            summary.innerHTML = `
                <div class="summary-group">
                    <div class="summary-label">Fokus Concern</div>
                    <div class="summary-value">
                        ${
                            product.concerns.length
                            ? product.concerns
                                .slice(0,2)
                                .map(c => toTitleCase(String(c).replace(/-/g,' ')))
                                .join(', ')
                            : '-'
                        }
                    </div>
                </div>

                <div class="summary-group">
                    <div class="summary-label">Kandungan Utama</div>
                    <div class="summary-value">
                        ${
                            product.ingredients.length
                            ? product.ingredients
                                .slice(0,2)
                                .map(i => toTitleCase(i))
                                .join(', ')
                            : '-'
                        }
                    </div>
                </div>
            `;


            const actions = document.createElement('div');
            actions.className = 'product-actions';

            const learnBtn = document.createElement('button');
            learnBtn.className = 'btn btn-outline';
            learnBtn.type = 'button';
            learnBtn.textContent = 'Detail Rekomendasi';
            learnBtn.addEventListener('click', () => openRecommendationDetail(product, idx));

            actions.appendChild(learnBtn);

            content.appendChild(badges);
            content.appendChild(title);
            content.appendChild(summary);
            content.appendChild(actions);

            card.appendChild(imgWrap);
            card.appendChild(content);
            grid.appendChild(card);
        });
    }

    function openRecommendationDetail(product, index) {
        closeRecommendationDetail();

        const overlay = document.createElement('div');
        overlay.className = 'detail-modal-overlay';
        overlay.id = 'recommendationDetailModal';

        const modal = document.createElement('div');
        modal.className = 'detail-modal';

        const imageSrc = product.image || getProductImage(product.name);

        const userSkin =
            quizState.selectedSkinType
                ? toTitleCase(quizState.selectedSkinType.replace(/-/g, ' '))
                : 'Profil Kulit Anda';

        const concernText =
            quizState.selectedConcerns.length
                ? quizState.selectedConcerns
                    .slice(0, 3)
                    .map(c => toTitleCase(c))
                    .join(', ')
                : 'Concern yang dipilih';

        modal.innerHTML = `
            <button class="detail-modal-close" type="button">&times;</button>

            <div class="detail-modal-media"></div>

            <div class="detail-modal-body">

                <div class="detail-modal-eyebrow">
                    Detail Rekomendasi
                </div>

                <h3 class="detail-modal-title"></h3>

                <div class="detail-modal-badges">
                    <span class="badge-category"></span>
                    <span class="badge-skin"></span>
                </div>

                <div class="detail-reason">
                    <div class="detail-section-title">
                        Kenapa Produk Direkomendasikan?
                    </div>
                    <p class="detail-reason-text"></p>
                </div>

                <div class="detail-section-title">
                    Kecocokan Dengan Profil
                </div>

                <div class="detail-grid">

                    <div class="detail-info-box">
                        <span>Jenis Kulit</span>
                        <strong class="detail-skin"></strong>
                    </div>

                    <div class="detail-info-box">
                        <span>Concern</span>
                        <strong class="detail-concerns"></strong>
                    </div>

                    <div class="detail-info-box">
                        <span>Kategori</span>
                        <strong class="detail-category"></strong>
                    </div>

                </div>

                <div class="detail-section-title">
                    Kandungan Yang Mendukung Rekomendasi
                </div>

                <div class="detail-chip-list detail-ingredients"></div>

                <div class="detail-section-title">
                    Cara Pakai
                </div>

                <p class="detail-usage"></p>

                <div class="detail-section-title">
                    Catatan Penggunaan
                </div>

                <p class="detail-warning"></p>

                <div class="detail-actions">
                    <a
                        class="btn btn-primary detail-product-link"
                        target="_blank"
                        rel="noopener noreferrer">
                        Lihat Produk di Website Skintific
                    </a>

                    <button
                        class="btn btn-outline detail-done"
                        type="button">
                        Tutup
                    </button>
                </div>

            </div>
        `;

        const media = modal.querySelector('.detail-modal-media');

        if (imageSrc) {
            const img = document.createElement('img');
            img.src = toAssetUrl(imageSrc);
            img.alt = product.name;
            media.appendChild(img);
        }

        modal.querySelector('.detail-modal-title').textContent =
            product.name;

        modal.querySelector('.badge-category').textContent =
            product.category || 'Skincare';

        modal.querySelector('.badge-skin').textContent =
            formatSkinTypes(product.skinTypes);

        modal.querySelector('.detail-reason-text').textContent =
            `Produk ini direkomendasikan karena memiliki kemiripan tinggi dengan profil yang Anda pilih. Jenis kulit Anda adalah ${userSkin} dengan fokus pada ${concernText}. Berdasarkan metode Content-Based Filtering menggunakan TF-IDF dan Cosine Similarity, produk ini memiliki karakteristik yang paling sesuai dibandingkan produk lainnya.`;

        modal.querySelector('.detail-skin').innerHTML =
            '✔ Cocok';

        modal.querySelector('.detail-concerns').innerHTML =
            product.concerns
                .map(c => `✔ ${toTitleCase(String(c).replace(/-/g, ' '))}`)
                .join('<br>');

        modal.querySelector('.detail-category').innerHTML =
            `✔ ${product.category}`;

        modal.querySelector('.detail-usage').textContent =
            getUsageGuide(product.category);

        modal.querySelector('.detail-warning').textContent =
            getSafetyNote(product);

        const ingredientsWrap =
            modal.querySelector('.detail-ingredients');

        product.ingredients
            .slice(0, 6)
            .forEach(item => {
                const chip = document.createElement('span');
                chip.className = 'detail-chip';
                chip.textContent = toTitleCase(item);
                ingredientsWrap.appendChild(chip);
            });

        const productLink =
            modal.querySelector('.detail-product-link');

        if (product.productUrl) {
            productLink.href = product.productUrl;
        }

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        modal
            .querySelector('.detail-modal-close')
            .addEventListener('click', closeRecommendationDetail);

        modal
            .querySelector('.detail-done')
            .addEventListener('click', closeRecommendationDetail);

        overlay.addEventListener('click', e => {
            if (e.target === overlay) {
                closeRecommendationDetail();
            }
        });
    }

    function closeRecommendationDetail() {
        const modal = document.getElementById('recommendationDetailModal');
        if (!modal) return;
        modal.classList.add('closing');
        document.body.classList.remove('modal-open');
        modal.addEventListener('animationend', () => modal.remove(), { once: true });
    }
    function getUsageGuide(category) {
        const value = normalizeUiText(category);
        if (value.includes('cleanser')) return 'Gunakan pada tahap pembersihan wajah. Jika produknya cleansing balm, pakai sebagai first cleanser, lalu lanjutkan face wash. Jika face wash, gunakan pagi atau malam sesuai kebutuhan kulit.';
        if (value.includes('toner')) return 'Gunakan setelah cleanser, sebelum serum atau moisturizer. Tuangkan secukupnya ke tangan atau kapas, lalu aplikasikan perlahan tanpa menggosok kulit terlalu keras.';
        if (value.includes('serum')) return 'Gunakan setelah toner dan sebelum moisturizer. Mulai dari jumlah kecil, lalu kunci dengan moisturizer agar manfaatnya lebih optimal.';
        if (value.includes('moisturizer')) return 'Gunakan setelah toner atau serum untuk mengunci hidrasi. Bisa dipakai pagi dan malam, lalu lanjutkan sunscreen pada rutinitas pagi.';
        if (value.includes('mask')) return 'Gunakan sebagai perawatan tambahan sesuai kebutuhan, biasanya 1 sampai 2 kali seminggu. Jangan gunakan terlalu sering jika kulit sedang iritasi.';
        if (value.includes('sunscreen')) return 'Gunakan pada pagi atau siang hari sebagai langkah terakhir skincare. Aplikasikan cukup banyak dan ulangi pemakaian saat banyak berkeringat atau beraktivitas di luar ruangan.';
        return 'Masukkan produk ini ke rutinitas secara bertahap agar kulit punya waktu beradaptasi.';
    }

    function getSafetyNote(product) {
        const profile = normalizeUiText([quizState.selectedSkinType, ...quizState.selectedConcerns].join(' '));
        const productText = normalizeUiText([product.name, product.category, product.concerns.join(' '), product.ingredients.join(' ')].join(' '));

        if (productText.includes('aha') || productText.includes('bha') || productText.includes('pha') || productText.includes('peeling') || productText.includes('glycolic') || productText.includes('salicylic')) {
            return 'Karena mengandung bahan eksfoliasi atau anti-acne aktif, mulai perlahan dan hindari dipakai bersamaan dengan terlalu banyak produk aktif. Gunakan sunscreen pada pagi hari.';
        }
        if (profile.includes('sensitive') || profile.includes('redness') || profile.includes('irritation') || profile.includes('damaged skin barrier')) {
            return 'Untuk kulit sensitif atau mudah kemerahan, lakukan patch test terlebih dahulu dan perkenalkan produk secara bertahap. Hentikan pemakaian jika muncul rasa perih berkepanjangan.';
        }
        if (normalizeUiText(product.category).includes('sunscreen')) {
            return 'Pastikan jumlah pemakaian cukup dan aplikasikan ulang untuk menjaga perlindungan, terutama saat beraktivitas di luar ruangan.';
        }
        return 'Gunakan satu produk baru dalam satu waktu agar lebih mudah melihat apakah produk cocok dengan kulit Anda.';
    }

    function getMatchReason(product, userSkin, concernText, goalText) {
        const productFocus = formatConcerns(product.concerns);
        const ingredients = product.ingredients.slice(0, 3).join(', ') || 'kandungan utama produk';
        return `Produk ini diprioritaskan karena profil kulit Anda ${userSkin}, concern Anda mengarah ke ${concernText}, dan tujuan rutinitasnya ${goalText}. Fokus produk ini berada pada ${productFocus}, dengan kandungan seperti ${ingredients}, sehingga detail ini menjelaskan kecocokan pemakaian, bukan hanya ringkasan produk.`;
    }

    function normalizeUiText(value) {
        return String(value || '').toLowerCase().replace(/-/g, ' ');
    }
    function formatSkinTypes(st) {
        const values = Array.isArray(st) ? st.flat() : [];
        if (!values.length) return 'Semua jenis kulit';
        return values.slice(0, 4).map(s => toTitleCase(String(s).replace(/-/g, ' '))).join(' / ');
    }
    function getProductImage(name) {
        return productImageMap[String(name || '').trim().toLowerCase()] || '';
    }
    function toAssetUrl(path) {
        return path || '';
    }
    function renderProductPlaceholder(container, product) {
        container.style.background = product.gradient || 'linear-gradient(135deg,#F9CBD2,#E47990)';
        if (container.querySelector('.product-placeholder')) return;
        const em = document.createElement('span');
        em.className = 'product-placeholder';
        em.textContent = product.emoji || '\uD83E\uDDF4';
        container.appendChild(em);
    }
    function formatConcerns(c) {
        if (!Array.isArray(c) || !c.length) return 'Perawatan umum';
        return c.slice(0,2).map(s => toTitleCase(String(s).replace(/-/g,' '))).join(', ');
    }
    function toTitleCase(v) {
        return String(v || '').split(' ').filter(Boolean)
            .map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }

    // ===== GLOSSARY =====
    function renderIngredients() {
        const grid = document.getElementById('ingredientsGrid');
        grid.innerHTML = '';
        ingredientGlossary.forEach(ing => {
            const pill = document.createElement('button');
            pill.className = 'ingredient-pill';
            pill.textContent = ing.name;
            pill.addEventListener('click', e => showIngredientTooltip(ing, e));
            grid.appendChild(pill);
        });
    }

    function showIngredientTooltip(ingredient, event) {
        let tt = document.getElementById('ingredientTooltip');
        if (!tt) {
            tt = document.createElement('div');
            tt.id = 'ingredientTooltip';
            tt.className = 'ingredient-tooltip';
            document.body.appendChild(tt);
        }
        tt.innerHTML = `
            <div class="tooltip-title">${ingredient.name}</div>
            <div class="tooltip-label">Manfaat</div>
            <div class="tooltip-value">${ingredient.benefit}</div>
            <div class="tooltip-label">Cocok Untuk</div>
            <div class="tooltip-value">${ingredient.bestFor}</div>
        `;
        const rect = event.target.getBoundingClientRect();
        const top = Math.max(10, rect.top - 160);
        const left = Math.min(window.innerWidth - 300, Math.max(10, rect.left - 80));
        tt.style.top  = top + 'px';
        tt.style.left = left + 'px';
        tt.classList.add('show');
    }

    // ===== EVENTS =====
    document.getElementById('ctaBtn').addEventListener('click', () => {
        document.getElementById('quiz').scrollIntoView({ behavior:'smooth' });
    });
    document.getElementById('nextBtn').addEventListener('click', nextStep);
    document.getElementById('backBtn').addEventListener('click', previousStep);
    document.getElementById('submitBtn').addEventListener('click', submitQuiz);
    document.getElementById('resetBtn').addEventListener('click', resetQuiz);

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeRecommendationDetail();
    });

    document.addEventListener('click', e => {
        if (!e.target.closest('.ingredient-pill')) {
            const tt = document.getElementById('ingredientTooltip');
            if (tt) tt.classList.remove('show');
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        initializeQuiz();
        renderIngredients();

        const searchInput = document.getElementById('glossarySearch');
        if (searchInput) {
            searchInput.addEventListener('input', e => {
                const q = e.target.value.toLowerCase();
                document.querySelectorAll('.ingredient-pill').forEach(pill => {
                    pill.style.display = pill.textContent.toLowerCase().includes(q) ? 'inline-block' : 'none';
                });
            });
        }
    });
