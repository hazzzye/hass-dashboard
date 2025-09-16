// ====== Detección de tema automático ======
const setInitialTheme = () => {
    const hora = new Date().getHours();
    if (hora >= 20 || hora < 7) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
};

setInitialTheme();

// ====== Lógica para los blobs ======
// Función para generar un número aleatorio en un rango dado.
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Función para inicializar y animar los blobs con valores aleatorios.
function setupBlobs() {
    const blobs = document.querySelectorAll('.blob');

    blobs.forEach((blob) => {
        // Genera posiciones iniciales y de destino aleatorias, y una escala aleatoria
        const initialX = getRandomNumber(-500, 500);
        const initialY = getRandomNumber(-500, 500);

        const randomX = getRandomNumber(-200, 200);
        const randomY = getRandomNumber(-200, 200);
        const randomScale = getRandomNumber(1.2, 1.8);

        // Asigna los valores a las variables de CSS de cada blob
        blob.style.setProperty('--initial-x', `${initialX}px`);
        blob.style.setProperty('--initial-y', `${initialY}px`);
        blob.style.setProperty('--random-x', `${randomX}px`);
        blob.style.setProperty('--random-y', `${randomY}px`);
        blob.style.setProperty('--random-scale', randomScale);
    });
}

// Inicializa los blobs la primera vez.
setupBlobs();

// Opcional: Actualiza los valores aleatorios en cada ciclo de animación
document.querySelectorAll('.blob').forEach(blob => {
    blob.addEventListener('animationiteration', () => {
        const newRandomX = getRandomNumber(-200, 200);
        const newRandomY = getRandomNumber(-200, 200);
        const newRandomScale = getRandomNumber(1.2, 1.8);

        blob.style.setProperty('--random-x', `${newRandomX}px`);
        blob.style.setProperty('--random-y', `${newRandomY}px`);
        blob.style.setProperty('--random-scale', newRandomScale);
    });
});
