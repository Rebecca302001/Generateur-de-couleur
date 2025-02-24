let r = Math.floor(Math.random() *256);
let g = Math.floor(Math.random() *256);
let b = Math.floor(Math.random() *256);


let body = document.querySelector(".body");
let rgb = document.querySelector(".rgb");

function changementdecouleur() {
    let r = Math.floor(Math.random() *256);
    let g = Math.floor(Math.random() *256);
    let b = Math.floor(Math.random() *256);
    let couleur = `rgb(${r}, ${g}, ${b})`;
    body.style.backgroundColor = couleur;
    rgb.textContent = couleur;
}

setInterval(changementdecouleur, 1000)

// Sélection des éléments
const colorBox = document.querySelector(".bouton");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let intervalId; // Variable pour stocker l'intervalle

// Fonction pour générer une couleur aléatoire
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Fonction pour démarrer le changement de couleur
function startColorChange() {
    if (!intervalId) { // Vérifie qu'aucun intervalle n'est déjà en cours
        intervalId = setInterval(() => {
            colorBox.style.backgroundColor = getRandomColor();
        }, 1000);
    }
}

// Fonction pour arrêter le changement de couleur
function stopColorChange() {
    clearInterval(intervalId);
    intervalId = null; // Réinitialise la variable
}

// Événements sur les boutons
startBtn.addEventListener("click", startColorChange);
stopBtn.addEventListener("click", stopColorChange);
