// Answer keys for verification
const ANSWER_KEYS = {
    // Week 1
    "w1-ex1-D": { value: "-26/9", tolerance: ["-26/9", "-2.89", "-2,89", "-2.88", "-2,88"] },
    "w1-ex1-E": { value: "8/3", tolerance: ["8/3", "2.67", "2,67"] },
    "w1-ex1-F": { value: "2/3", tolerance: ["2/3", "0.67", "0,67"] },
    "w1-ex1-G1": { value: "0.00033", tolerance: ["0.00033", "0,00033", "3.3*10^-4", "3,3*10^-4", "3.3x10^-4", "3,3x10^-4"] },
    "w1-ex1-G2": { value: "3.3*10^-4", tolerance: ["3.3*10^-4", "3,3*10^-4", "3.3x10^-4", "3,3x10^-4", "3.3*10^(-4)", "3,3*10^(-4)"] },
    "w1-ex2-A": { value: "-6x^2 - 31x + 51", tolerance: ["-6x^2-31x+51", "-6*x^2-31*x+51", "-6x2-31x+51"] },
    "w1-ex2-B": { value: "-5x^2 - 11x + 12", tolerance: ["-5x^2-11x+12", "-5*x^2-11*x+12", "-5x2-11x+12"] },
    "w1-ex5": { value: "3300", tolerance: ["3300", "3300 cm3", "3300cm3"] },
    "w1-ex6-1": { value: "304", tolerance: ["304", "304 €", "304€"] },
    "w1-ex6-2": { value: "30", tolerance: ["30", "30%", "30 %"] },
    "w1-ex7-2a": { value: "16", tolerance: ["16"] },
    "w1-ex7-2b": { value: "7", tolerance: ["7"] },
    "w1-ex7-3": { value: "3 et -3", tolerance: ["3 et -3", "-3 et 3", "3, -3", "3;-3", "3, -3", "3 et -3"] },
    "w1-ex8-2": { value: "30.24", tolerance: ["30.24", "30,24", "30.24 L", "30,24 L", "30.24L", "30,24L"] },
    "w1-ex8-4": { value: "Oui", tolerance: ["oui", "Oui", "yes", "d'accord"] },

    // Week 2
    "w2-ex1-A": { value: "-2", tolerance: ["-2"] },
    "w2-ex1-B": { value: "-2", tolerance: ["-2"] },
    "w2-ex1-C": { value: "-3/5", tolerance: ["-3/5", "-0.6", "-0,6"] },
    "w2-ex1-D": { value: "7/6", tolerance: ["7/6", "1.17", "1,17"] },
    "w2-ex1-E": { value: "-1", tolerance: ["-1"] },
    "w2-ex1-F": { value: "67/45", tolerance: ["67/45", "1.49", "1,49"] },
    "w2-ex1-G": { value: "3/16", tolerance: ["3/16", "0.1875", "0,1875", "0.19", "0,19"] },
    "w2-ex1-H": { value: "-1/3", tolerance: ["-1/3", "-0.33", "-0,33"] },
    "w2-ex2-1": { value: "C", tolerance: ["C", "c"] },
    "w2-ex2-2": { value: "A", tolerance: ["A", "a"] },
    "w2-ex2-3": { value: "B", tolerance: ["B", "b"] },
    "w2-ex2-4": { value: "B", tolerance: ["B", "b"] },
    "w2-ex4-a": { value: "-1/2", tolerance: ["-1/2", "-0.5", "-0,5"] },
    "w2-ex4-b": { value: "6 et -6", tolerance: ["6 et -6", "-6 et 6", "6;-6", "6,-6", "6 et -6"] },
    "w2-ex4-c": { value: "4/7 et -4/7", tolerance: ["4/7 et -4/7", "-4/7 et 4/7", "4/7;-4/7", "4/7,-4/7"] },
    "w2-ex5": { value: "45", tolerance: ["45", "45 ans", "45ans"] },
    "w2-ex6-4": { value: "8.49", tolerance: ["8.49", "8,49", "8.5", "8,5", "8.49 cm", "8,49 cm"] },
    "w2-ex6-5": { value: "14.49", tolerance: ["14.49", "14,49", "14.5", "14,5", "14.49 cm", "14,49 cm"] },
    "w2-ex6-6": { value: "0.71", tolerance: ["0.71", "0,71", "1/sqrt(2)", "sqrt(2)/2", "0.707", "0,707"] },
    "w2-ex7-2": { value: "64.8", tolerance: ["64.8", "64,8", "64.8 m2", "64,8 m2", "64.8m2", "64,8m2"] },
    "w2-ex8-1": { value: "-200, -100", tolerance: ["-200,-100", "-200, -100", "-200;-100", "-200 ; -100", "(-200, -100)", "(-200,-100)"] },
    "w2-ex8-2": { value: "5", tolerance: ["5"] },
    "w2-ex8-3": { value: "80", tolerance: ["80", "80 pixels", "80pixels"] },
    "w2-ex8-4": { value: "8", tolerance: ["8", "instruction 8", "8e", "8ème", "8eme"] },

    // Week 3
    "w3-ex1-Aa": { value: "-12.8", tolerance: ["-12.8", "-12,8"] },
    "w3-ex1-Ab": { value: "26/21", tolerance: ["26/21", "1.24", "1,24"] },
    "w3-ex1-Cb": { value: "3", tolerance: ["3", "x != 3", "x diffèrent de 3", "x!=3"] },
    "w3-ex2-a": { value: "1.68*10^-4", tolerance: ["1.68*10^-4", "1,68*10^-4", "1.68x10^-4", "1.68*10^(-4)", "1.68e-4"] },
    "w3-ex2-b": { value: "5.69*10^4", tolerance: ["5.69*10^4", "5,69*10^4", "5.69x10^4", "5.69*10^4"] },
    "w3-ex2-c": { value: "6.8*10^-4", tolerance: ["6.8*10^-4", "6,8*10^-4", "6.8x10^-4", "6.8*10^(-4)", "6.8e-4"] },
    "w3-ex2-d": { value: "5.247*10^8", tolerance: ["5.247*10^8", "5,247*10^8", "5.247x10^8", "5.247*10^8"] },
    "w3-ex3-1": { value: "24x^2 - 40x + 6", tolerance: ["24x^2-40x+6", "24*x^2-40*x+6", "24x2-40x+6"] },
    "w3-ex3-2": { value: "32", tolerance: ["32"] },
    "w3-ex3-4a": { value: "-1 et -3/5", tolerance: ["-1 et -3/5", "-3/5 et -1", "-1 et -0.6", "-0.6 et -1", "-1;-3/5", "-3/5;-1"] },
    "w3-ex3-4b": { value: "aucune solution", tolerance: ["aucune", "pas de solution", "aucune solution", "vide", "Ø", "rien"] },
    "w3-ex5-2": { value: "4", tolerance: ["4", "4 cm", "4cm"] },
    "w3-ex5-3": { value: "12", tolerance: ["12", "12 cm2", "12cm2"] },
    "w3-ex6": { value: "18 et 6", tolerance: ["18 et 6", "6 et 18", "18;6", "18,6", "18 et 6 ans", "Lama 18, soeur 6"] },
    "w3-ex7-2": { value: "3", tolerance: ["3"] },
    "w3-ex7-3": { value: "3", tolerance: ["3", "3 cm", "3cm"] },
    "w3-ex8-2": { value: "40", tolerance: ["40", "40 pas", "40pas"] },
    "w3-ex8-3": { value: "1/2", tolerance: ["1/2", "0.5", "0,5", "50%"] },
    "w3-ex8-5": { value: "1/4", tolerance: ["1/4", "0.25", "0,25", "25%"] },
    "w3-ex8-6": { value: "1 et 3 = 1", tolerance: ["1 et 3 = 1", "1, 3, 1", "1 et 3", "1,3,1", "1 a 3 = 1"] },

    // Week 4
    "w4-ex1-1": { value: "B et D", tolerance: ["B et D", "B, D", "B,D", "B et D"] },
    "w4-ex1-2": { value: "B et C", tolerance: ["B et C", "B, C", "B,C", "B et C"] },
    "w4-ex1-3": { value: "A et B", tolerance: ["A et B", "A, B", "A,B", "A et B"] },
    "w4-ex1-4": { value: "B", tolerance: ["B", "b"] },
    "w4-ex2-A": { value: "-11", tolerance: ["-11"] },
    "w4-ex2-B": { value: "-1", tolerance: ["-1"] },
    "w4-ex2-C": { value: "2/7", tolerance: ["2/7", "0.29", "0,29", "0.286", "0,286"] },
    "w4-ex3-a": { value: "8", tolerance: ["8"] },
    "w4-ex3-b": { value: "4", tolerance: ["4"] },
    "w4-ex4": { value: "1/7", tolerance: ["1/7", "0.14", "0,14"] },
    "w4-ex5-2": { value: "9", tolerance: ["9", "9 cm2", "9cm2"] },
    "w4-ex5-3": { value: "centre de gravité", tolerance: ["centre de gravite", "centre de gravité", "gravite", "gravité"] },
    "w4-ex6": { value: "34 et 21", tolerance: ["34 et 21", "34,21", "34;21", "34 chameaux et 21 dromadaires"] },
    "w4-ex7-2b": { value: "60", tolerance: ["60", "60°", "60 degres", "60 degrés"] },
    "w4-ex7-3a": { value: "3.46", tolerance: ["3.46", "3,46", "2*sqrt(3)", "2*v3", "3.5", "3,5"] },
    "w4-ex7-3b": { value: "13.86", tolerance: ["13.86", "13,86", "8*sqrt(3)", "8*v3", "13.9", "13,9"] },
    "w4-ex8-1a": { value: "5.95", tolerance: ["5.95", "5,95", "5.95 €", "5,95 €"] },
    "w4-ex8-1c": { value: "58", tolerance: ["58", "58 photos"] },
    "w4-ex8-2": { value: "101, 0.17, 17", tolerance: ["101, 0.17, 17", "101; 0.17; 17", "101/0.17/17"] },
    "w4-ex8-3a": { value: "16.45", tolerance: ["16.45", "16,45", "16.45 €", "16,45 €"] },
    "w4-ex8-3b": { value: "Proposition 2 et Proposition 4", tolerance: ["2 et 4", "Proposition 2 et Proposition 4", "prop 2 et prop 4", "2, 4", "2;4"] },

    // Fiche Supplémentaire
    "extra-ex1": { value: "17/24", tolerance: ["17/24", "0.71", "0,71"] },
    "extra-ex2": { value: "5^3", tolerance: ["5^3", "125"] },
    "extra-ex3": { value: "2.4*10^-2", tolerance: ["2.4*10^-2", "2,4*10^-2", "2.4*10^(-2)", "2,4*10^(-2)", "2.4x10^-2", "2,4x10^-2"] },
    "extra-ex4": { value: "7x^2 - 7x + 7", tolerance: ["7x^2-7x+7", "7*x^2-7*x+7", "7x2-7x+7"] },
    "extra-ex5": { value: "(2x - 3)(-3x - 7)", tolerance: ["(2x-3)(-3x-7)", "(2x-3)*(-3x-7)", "-(2x-3)(3x+7)", "-(2x-3)*(3x+7)", "(3-2x)(3x+7)"] },
    "extra-ex6": { value: "4/3 et -5/2", tolerance: ["4/3 et -5/2", "-5/2 et 4/3", "4/3;-5/2", "-5/2;4/3", "1.33 et -2.5"] },
    "extra-ex7": { value: "8", tolerance: ["8", "8 cm", "8cm"] },
    "extra-ex8": { value: "3.8", tolerance: ["3.8", "3,8", "3.8 cm", "3,8 cm"] },
    "extra-ex9": { value: "66", tolerance: ["66", "66 cm3", "66cm3", "66.0", "66,0"] },
    "extra-ex10": { value: "1/2", tolerance: ["1/2", "0.5", "0,5", "50%"] }
};

// Global state
let state = {
    currentWeek: "w1",
    theme: "light",
    completedExercises: {}, // key: wX-exY, value: true
    answers: {}, // key: input-id, value: text
    unlockedCorrections: {}, // key: wX-exY, value: true
    drafts: {} // key: wX-exY, value: text
};

// Load state from localStorage if available
function loadState() {
    try {
        const saved = localStorage.getItem("maths_vacances_state");
        if (saved) {
            const parsed = JSON.parse(saved);
            state = { ...state, ...parsed };
        }
    } catch (e) {
        console.warn("Could not load state from localStorage", e);
    }
}

// Save state to localStorage
function saveState() {
    try {
        localStorage.setItem("maths_vacances_state", JSON.stringify(state));
    } catch (e) {
        console.warn("Could not save state to localStorage", e);
    }
}

// Update dashboard progress
function updateProgress() {
    // Total count of exercises cards
    const totalExercises = document.querySelectorAll(".exercise-card").length;
    let completedCount = 0;
    
    document.querySelectorAll(".exercise-card").forEach(card => {
        const key = card.dataset.exerciseKey;
        if (state.completedExercises[key]) {
            card.classList.add("completed");
            card.querySelector(".exercise-status-badge").innerHTML = `<span style="color:var(--success)">✓ Résolu</span>`;
            completedCount++;
        } else {
            card.classList.remove("completed");
            card.querySelector(".exercise-status-badge").innerHTML = `<span>Non résolu</span>`;
        }
    });

    // Update progress bar
    const percent = totalExercises > 0 ? Math.round((completedCount / totalExercises) * 100) : 0;
    const bar = document.getElementById("progress-bar");
    if (bar) {
        bar.style.width = percent + "%";
    }
    
    // Update labels
    const pctText = document.getElementById("progress-percent");
    if (pctText) pctText.innerText = percent + "%";
    
    const countText = document.getElementById("completed-count");
    if (countText) countText.innerText = completedCount;
    
    const totalText = document.getElementById("total-count");
    if (totalText) totalText.innerText = totalExercises;
    
    // Update badge card
    const scoreBadge = document.getElementById("badge-score");
    if (scoreBadge) scoreBadge.innerText = `${completedCount}/${totalExercises}`;

    // Update navigation sidebar indicators
    Object.keys(EXERCISES_DATA).forEach(weekKey => {
        const weekCardExercises = document.querySelectorAll(`.exercises-view[data-week="${weekKey}"] .exercise-card`);
        let weekCompleted = 0;
        weekCardExercises.forEach(card => {
            if (state.completedExercises[card.dataset.exerciseKey]) {
                weekCompleted++;
            }
        });
        const indicator = document.getElementById(`nav-progress-${weekKey}`);
        if (indicator) {
            indicator.innerText = `${weekCompleted}/${weekCardExercises.length}`;
        }
    });
}

// Navigation between weeks
function selectWeek(weekKey) {
    state.currentWeek = weekKey;
    
    // Toggle active sidebar items
    document.querySelectorAll(".nav-item").forEach(item => {
        if (item.dataset.week === weekKey) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    // Toggle active exercises view
    document.querySelectorAll(".exercises-view").forEach(view => {
        if (view.dataset.week === weekKey) {
            view.classList.add("active");
        } else {
            view.classList.remove("active");
        }
    });

    // Scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    saveState();
}

// Tab switcher inside exercise cards
function switchTab(btn) {
    const card = btn.closest(".exercise-card");
    const tabName = btn.dataset.tab;
    
    // Toggle buttons
    card.querySelectorAll(".tab-btn").forEach(b => {
        if (b.dataset.tab === tabName) {
            b.classList.add("active");
        } else {
            b.classList.remove("active");
        }
    });

    // Toggle panels
    card.querySelectorAll(".tab-panel").forEach(panel => {
        if (panel.id === `${tabName}-panel`) {
            panel.classList.add("active");
        } else {
            panel.classList.remove("active");
        }
    });
    
    // If Correction tab is opened, check if it's unlocked
    if (tabName === "correction") {
        checkCorrectionLock(card);
    }
}

// Toggle display of original images
function toggleOriginalImage(btn) {
    const container = btn.closest(".tab-panel").querySelector(".exercise-image-container");
    if (container.classList.contains("visible")) {
        container.classList.remove("visible");
        btn.innerText = "Afficher l'image d'origine";
    } else {
        container.classList.add("visible");
        btn.innerText = "Masquer l'image d'origine";
    }
}

// Check if correction needs to show unlock button or content
function checkCorrectionLock(card) {
    const key = card.dataset.exerciseKey;
    const correctionPanel = card.querySelector("#correction-panel");
    
    if (state.unlockedCorrections[key] || state.completedExercises[key]) {
        // Show actual correction
        correctionPanel.querySelector(".correction-locked").style.display = "none";
        correctionPanel.querySelector(".correction-content").style.display = "block";
    } else {
        // Show locked message
        correctionPanel.querySelector(".correction-locked").style.display = "block";
        correctionPanel.querySelector(".correction-content").style.display = "none";
    }
}

// Unlock correction explicitly
function unlockCorrection(btn) {
    const card = btn.closest(".exercise-card");
    const key = card.dataset.exerciseKey;
    
    if (confirm("Voulez-vous vraiment voir la correction ? Il est recommande de chercher l'exercice au moins 15 minutes.")) {
        state.unlockedCorrections[key] = true;
        checkCorrectionLock(card);
        saveState();
    }
}

// Clean and normalize answers for tolerance checks
function cleanString(str) {
    if (!str) return "";
    return str.toString()
        .toLowerCase()
        .replace(/\s+/g, '') // remove spaces
        .replace(/,/g, '.')  // replace comma with dot
        .replace(/[\(\)]/g, '') // remove parentheses
        .trim();
}

// Verify answer input
function checkAnswer(btn) {
    const form = btn.closest(".answer-check-form");
    const inputs = form.querySelectorAll(".answer-input");
    let allCorrect = true;
    
    inputs.forEach(input => {
        const id = input.id;
        const value = input.value.trim();
        state.answers[id] = value; // save user answer
        
        const config = ANSWER_KEYS[id];
        if (config) {
            const cleanVal = cleanString(value);
            const isCorrect = config.tolerance.some(tol => cleanString(tol) === cleanVal);
            
            if (isCorrect) {
                input.style.borderColor = "var(--success)";
                input.style.backgroundColor = "hsla(145, 80%, 42%, 0.05)";
            } else {
                input.style.borderColor = "var(--danger)";
                input.style.backgroundColor = "hsla(0, 85%, 60%, 0.05)";
                allCorrect = false;
            }
        }
    });

    const feedback = form.querySelector(".validation-feedback");
    if (allCorrect) {
        feedback.className = "validation-feedback correct";
        feedback.innerHTML = "<span>✓ Félicitations ! Vos réponses sont correctes. Exercice marqué comme complété !</span>";
        
        // Mark exercise as completed
        const card = btn.closest(".exercise-card");
        state.completedExercises[card.dataset.exerciseKey] = true;
        updateProgress();
    } else {
        feedback.className = "validation-feedback incorrect";
        feedback.innerHTML = "<span>✗ Certaines réponses sont incorrectes. Révisez vos calculs et réessayez !</span>";
    }
    
    saveState();
}

// Render all exercises dynamically from EXERCISES_DATA
function renderExercises() {
    const container = document.getElementById("exercises-container");
    if (!container) return;

    container.innerHTML = "";

    Object.keys(EXERCISES_DATA).forEach(weekKey => {
        const weekData = EXERCISES_DATA[weekKey];
        if (!weekData) return;

        const weekView = document.createElement("div");
        weekView.className = "exercises-view";
        weekView.dataset.week = weekKey;

        // Week Banner
        const banner = document.createElement("div");
        banner.className = "week-title-banner";
        banner.innerHTML = `<h3>${weekData.title}</h3>`;
        weekView.appendChild(banner);

        weekData.exercises.forEach(exercise => {
            const card = document.createElement("div");
            card.className = "exercise-card";
            card.dataset.exerciseKey = exercise.id;

            let imageToggleBtnHtml = "";
            let imageContainerHtml = "";
            if (exercise.image) {
                imageToggleBtnHtml = `
                    <button class="btn original-image-toggle" onclick="toggleOriginalImage(this)">
                        Afficher l'image d'origine
                    </button>
                `;
                imageContainerHtml = `
                    <div class="exercise-image-container">
                        <img src="extracted_images/${exercise.image}" alt="Énoncé d'origine" loading="lazy">
                    </div>
                `;
            }

            let inputsHtml = "";
            if (exercise.inputs && exercise.inputs.length > 0) {
                inputsHtml = `
                    <div class="answer-check-form">
                        ${exercise.inputs.map(input => `
                            <div class="inputs-row" style="margin-bottom: 12px;">
                                <span class="input-label" style="min-width: 160px; display: inline-block;">${input.label} :</span>
                                <input type="text" class="answer-input" id="${input.id}" placeholder="${input.placeholder}">
                            </div>
                        `).join('')}
                        <button class="btn btn-primary" style="margin-top: 12px; align-self: flex-start;" onclick="checkAnswer(this)">Vérifier mes réponses</button>
                        <div class="validation-feedback" style="margin-top: 12px;"></div>
                    </div>
                `;
            } else {
                inputsHtml = `
                    <div class="answer-check-form" style="border-style: dashed; background: transparent; text-align: center; color: var(--text-muted);">
                        <p>📝 Saisie de réponse non requise pour cet exercice de géométrie ou de démonstration.</p>
                        <p style="font-size: 0.85rem; margin-top: 4px;">Rédigez votre raisonnement sur votre cahier ou dans le brouillon ci-dessous, puis comparez avec la correction détaillée !</p>
                    </div>
                `;
            }

            const hasCourse = !!exercise.course;
            const hasHelp = !!exercise.help;
            const hasCorrection = !!exercise.correction;

            card.innerHTML = `
                <div class="exercise-header">
                    <div class="exercise-title">
                        <span class="exercise-number">${exercise.num}</span>
                        <span class="exercise-title-text">${exercise.title}</span>
                    </div>
                    <div class="exercise-status-badge">
                        <span>Non résolu</span>
                    </div>
                </div>

                <div class="tabs-nav">
                    <button class="tab-btn active" data-tab="statement" onclick="switchTab(this)">
                        📝 Énoncé
                    </button>
                    ${hasCourse ? `
                    <button class="tab-btn" data-tab="course" onclick="switchTab(this)">
                        📚 Cours
                    </button>` : ''}
                    ${hasHelp ? `
                    <button class="tab-btn" data-tab="help" onclick="switchTab(this)">
                        💡 Aide
                    </button>` : ''}
                    <button class="tab-btn" data-tab="practice" onclick="switchTab(this)">
                        ✏️ S'entraîner
                    </button>
                    ${hasCorrection ? `
                    <button class="tab-btn" data-tab="correction" onclick="switchTab(this)">
                        ✔️ Correction
                    </button>` : ''}
                </div>

                <!-- Statement Panel -->
                <div class="tab-panel active" id="statement-panel">
                    <div class="exercise-statement">
                        ${exercise.statement}
                    </div>
                    ${imageToggleBtnHtml}
                    ${imageContainerHtml}
                </div>

                <!-- Course Panel -->
                ${hasCourse ? `
                <div class="tab-panel" id="course-panel">
                    <div class="course-reminder-content">
                        ${exercise.course}
                    </div>
                </div>` : ''}

                <!-- Help Panel -->
                ${hasHelp ? `
                <div class="tab-panel" id="help-panel">
                    <div class="help-content">
                        ${exercise.help}
                    </div>
                </div>` : ''}

                <!-- Practice Panel -->
                <div class="tab-panel" id="practice-panel">
                    <div class="workspace-content">
                        ${inputsHtml}
                        <div class="draft-notepad" style="margin-top: 16px;">
                            <span class="input-label">📝 Votre brouillon (sauvegardé automatiquement) :</span>
                            <textarea class="draft-textarea" placeholder="Rédigez vos calculs ou vos notes ici..."></textarea>
                        </div>
                    </div>
                </div>

                <!-- Correction Panel -->
                ${hasCorrection ? `
                <div class="tab-panel" id="correction-panel">
                    <div class="correction-locked">
                        <p>La correction détaillée est verrouillée. Prenez le temps de chercher l'exercice avant de regarder la solution !</p>
                        <button class="btn btn-primary" onclick="unlockCorrection(this)">🔑 Déverrouiller la correction</button>
                    </div>
                    <div class="correction-content" style="display: none;">
                        ${exercise.correction}
                    </div>
                </div>` : ''}
            `;

            weekView.appendChild(card);
        });

        container.appendChild(weekView);
    });
}

// Reset all progress saved in localStorage
function resetAllProgress() {
    if (confirm("Voulez-vous vraiment réinitialiser toute votre progression ? Cette action est irréversible.")) {
        localStorage.removeItem("maths_vacances_state");
        location.reload();
    }
}

// Set up event listeners
document.addEventListener("DOMContentLoaded", () => {
    // 1. Render exercises dynamically
    renderExercises();

    // 2. Load local storage state
    loadState();
    
    // 3. Apply saved inputs
    Object.keys(state.answers).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = state.answers[id];
    });

    // 4. Apply saved drafts & setup real-time save listeners
    document.querySelectorAll(".draft-textarea").forEach(textarea => {
        const card = textarea.closest(".exercise-card");
        const key = card.dataset.exerciseKey;
        if (state.drafts[key]) {
            textarea.value = state.drafts[key];
        }
        
        textarea.addEventListener("input", (e) => {
            state.drafts[key] = e.target.value;
            saveState();
        });
    });

    // 5. Theme selector setup
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
        document.documentElement.setAttribute("data-theme", state.theme);
        themeBtn.innerText = state.theme === "light" ? "🌙 Mode Sombre" : "☀️ Mode Clair";
        
        themeBtn.addEventListener("click", () => {
            const nextTheme = state.theme === "light" ? "dark" : "light";
            state.theme = nextTheme;
            document.documentElement.setAttribute("data-theme", nextTheme);
            themeBtn.innerText = nextTheme === "light" ? "🌙 Mode Sombre" : "☀️ Mode Clair";
            saveState();
        });
    }

    // 6. Print button setup
    const printBtn = document.getElementById("print-btn");
    if (printBtn) {
        printBtn.addEventListener("click", () => {
            window.print();
        });
    }

    // 7. Set active week
    selectWeek(state.currentWeek);
    
    // 8. Initial progress update
    updateProgress();

    // 9. Trigger MathJax typeset if available
    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise().catch(err => console.error(err));
    }
});
