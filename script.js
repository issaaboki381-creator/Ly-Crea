// Liste de tes formations - Prix mis à jour selon ta demande
const formations = [
    {
        titre: "Initiation à l'informatique",
        description: "Découvrez l'ordinateur (PC vs Laptop), les périphériques (souris, clavier, écran) et les logiciels de base pour bien débuter.",
        prix: "500 FCFA",
        type: "Formation PDF"
    },
    {
        titre: "Maîtrisez Excel comme un Expert",
        description: "Apprenez à créer des tableaux de bord automatiques, maîtrisez les formules complexes (RECHERCHEV, SI) et gagnez du temps au bureau.",
        prix: "1 000 FCFA",
        type: "Formation PDF"
    },
    {
        titre: "Microsoft Word : Rédaction Pro",
        description: "Rédigez des rapports, des courriers officiels et des mémoires impeccables avec une mise en page parfaite.",
        prix: "500 FCFA",
        type: "Guide PDF complet"
    }
];

const grid = document.getElementById('grid-cours');

// Nettoyage de la grille pour éviter les doublons
grid.innerHTML = "";

// Affichage dynamique des cours
formations.forEach(cours => {
    // Création du lien WhatsApp avec le titre du cours automatique
    const lienWA = `https://wa.me/22799529967?text=Bonjour Issa, je souhaite acheter la formation : ${encodeURIComponent(cours.titre)}`;
    
    const html = `
        <div class="card">
            <div class="card-content">
                <span class="type-badge">📄 ${cours.type}</span>
                <h3 style="margin: 15px 0; color: #2c3e50;">${cours.titre}</h3>
                <p style="font-size: 0.9em; color: #666;">${cours.description}</p>
                <p class="price" style="font-size: 1.5em; font-weight: bold; color: #27ae60; margin: 15px 0;">${cours.prix}</p>
                <a href="${lienWA}" class="btn-buy" target="_blank" style="display: block; background: #25D366; color: white; padding: 12px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                    💰 Acheter via WhatsApp
                </a>
            </div>
        </div>
    `;
    grid.innerHTML += html;
});
