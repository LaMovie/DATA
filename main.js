// main.js
import { UniversalSearch } from './UnivFun.js';
import { procesarMedia } from './MediaManager.js';
import { initUI } from './DisplayLogic.js';

document.addEventListener('DOMContentLoaded', () => {
    
    initUI(); // Inicia los estilos dinámicos

    new UniversalSearch({
        input: '#buscador', // Ahora sí lo encontrará porque ya fue inyectado
        list: '#Lista',
        itemsSelector: '.DATA',
        onSelect: (match) => {
            const iframe = document.getElementById('F');
            const detalles = document.getElementById('Aux2');
            
            // Aquí dentro el .play() funciona porque el usuario acaba de hacer click
            procesarMedia(match, iframe, detalles);
        }
    });
});