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
// Fonction pour débloquer l'accès à la playlist YouTube de l'IT Academy
function debloquerFormation() {
    // 1. On récupère la valeur entrée par l'étudiant
    const codeSaisi = document.getElementById('code-eleve').value;
    
    // 2. Ton code secret que tu donneras après paiement
    const codeCorrect = "ZINDER2026"; 

    // 3. Ton identifiant de playlist YouTube que tu m'as envoyé
    const idPlaylist = "PLNCkzogV4Zh5hwrJ3EGcfbpuWGRHpe1Uo";

    if (codeSaisi === codeCorrect) {
        // Le code est juste ! On masque le panneau de verrouillage
        document.getElementById('zone-verrou').style.display = 'none';
        
        // On affiche le conteneur du lecteur vidéo
        document.getElementById('zone-playlist').style.display = 'block';
        
        // On injecte le lien de ta playlist dans l'iframe
        document.getElementById('playlist-frame').src = "https://www.youtube.com/embed/videoseries?list=" + idPlaylist + "&rel=0&modestbranding=1";
        
        // Alerte de succès professionnelle
        alert("Accès accordé ! Bienvenue dans votre formation sur l'IT Academy.");
    } else {
        // Si le code entré est faux
        alert("Code d'accès incorrect. Veuillez contacter Issa Saley pour valider votre inscription.");
    }
}

