import { UniversalSearch } from 'https://cdn.jsdelivr.net/gh/LaMovie/DATA/UnivFun.js';
import { procesarMedia } from './MediaManager.js';
import { initUI } from './DisplayLogic.js'; // Ahora sí está importado

// 1. Inicializar la interfaz (pantalla completa, estilos, etc.)
initUI();

// 2. Inicializar buscador
new UniversalSearch({
    input: '#buscador',
    list: '#Lista',
    itemsSelector: '.DATA',
    onSelect: (match) => {
        const iframe = document.getElementById('F');
        const detalles = document.getElementById('Aux2');
        
        // Ejecuta la lógica inteligente que detecta si es video o carpeta
        procesarMedia(match, iframe, detalles);
    }
});
