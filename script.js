const formations = [
    {
        titre: "Initiation Informatique",
        type: "Débutant",
        prix: "500",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400",
        pdf: "Fichiers/initiation.pdf"
    },
    {
        titre: "Maîtriser Microsoft Word",
        type: "Bureautique",
        prix: "500",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400",
        pdf: "Fichiers/word.pdf"
    },
    {
        titre: "Expertise Microsoft Excel",
        type: "Bureautique",
        prix: "1000",
        image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=400",
        pdf: "Fichiers/excel.pdf"
    }
];

// Fonction pour gérer le téléchargement sécurisé
function telechargerCours(nomFichier) {
    const codeSecret = "Zinder2024"; // C'est le code que tu donneras après paiement
    const codeSaisi = prompt("Veuillez entrer votre code de téléchargement reçu après paiement :");

    if (codeSaisi === codeSecret) {
        window.open(nomFichier, '_blank');
    } else {
        alert("Code incorrect. Veuillez contacter Issa sur WhatsApp pour obtenir votre code.");
    }
}

const grid = document.getElementById('grid-cours');
grid.innerHTML = "";

formations.forEach(cours => {
    const lienWA = `https://wa.me/22799529967?text=Bonjour Issa, je viens de payer pour le cours de ${cours.titre}, quel est mon code ?`;

    const html = `
        <div class="card">
            <img src="${cours.image}" alt="${cours.titre}" class="card-img">
            <div class="card-content">
                <span class="type-badge">${cours.type}</span>
                <h3 class="card-title">${cours.titre}</h3>
                <div class="card-info">
                    <button onclick="telechargerCours('${cours.pdf}')" class="btn-pdf">
                        <i class="fas fa-download"></i> Télécharger PDF
                    </button>
                    <span class="price">${cours.prix} FCFA</span>
                </div>
                <a href="${lienWA}" target="_blank" class="btn-inscription">
                    S'inscrire / Payer
                </a>
            </div>
        </div>
    `;
    grid.innerHTML += html;
});

