// On dit au navigateur d'attendre que TOUTE la page soit chargée
window.addEventListener('DOMContentLoaded', (event) => {
    
    // Ton code de déblocage reste bien au chaud ici
    window.debloquerFormation = function() {
        const codeSaisi = document.getElementById('code-eleve').value;
        const codeCorrect = "ZINDER2026";

        if (codeSaisi === codeCorrect) {
            document.getElementById('zone-verrou').style.display = 'none';
            document.getElementById('zone-playlist').style.display = 'block';
            
            // Le lien embed parfait
            document.getElementById('playlist-frame').src = "https://www.youtube.com/embed/videoseries?list=PLNCkzogV4Zh5hwrJ3EGcfbpuWGRHpe1Uo";
            
            alert("Félicitations ! Votre formation est débloquée.");
        } else {
            alert("Code incorrect. Veuillez réessayer.");
        }
    }

});

