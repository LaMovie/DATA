// DisplayLogic.js

export function initUI() {
    // Aquí puedes meter la lógica de inyectar los estilos (el CSS que tenías en el script)
    // O simplemente llamar a las funciones de orientación
    window.addEventListener("resize", handleOrientation);
    handleOrientation();
}

export function handleOrientation() {
    // Aquí pegas tu lógica de 'evento()' e 'invento()' que tenías antes
    // Se ejecutará cada vez que la pantalla cambie de tamaño
    const isLandscape = window.innerWidth > window.innerHeight;
    // ... lógica de aplicar estilos según orientación ...
}

export function requestFullscreen(element) {
    if (element.requestFullscreen) element.requestFullscreen();
    else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
}
