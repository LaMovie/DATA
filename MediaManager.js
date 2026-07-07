// MediaManager.js

// 1. Detección inteligente del tipo de enlace
export function getMediaType(url) {
    if (url.includes('drive.google.com')) {
        // Detecta si es un archivo individual (file) o una carpeta
        if (url.includes('/file/')) return 'drive_file';
        return 'drive_folder';
    }
    if (url.endsWith('.m3u8')) return 'hls';
    return 'standard';
}

// 2. Traductor (Auxiliar)
export async function traducir(texto, sl = 'en', tl = 'es') {
    if (!texto) return '';
    try {
        const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${encodeURIComponent(texto)}`);
        const data = await res.json();
        return data[0][0][0];
    } catch (error) {
        console.error("Error al traducir:", error);
        return texto;
    }
}

// 3. Búsqueda y visualización de detalles OMDb
export async function mostrarDetallesOMDb(tituloOriginal, targetElement) {
    targetElement.style.display = 'block';
    const API_KEY = "e29e6334";
    
    // Limpieza de Emojis exacta antes de buscar
    const tituloLimpio = tituloOriginal.replace(/^🍿|📺|⚙️/, '').trim();

    try {
        let queryOMDb = await traducir(tituloLimpio, 'es', 'en');
        if (!queryOMDb) queryOMDb = tituloLimpio;

        const res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(queryOMDb)}&apikey=${API_KEY}`);
        const data = await res.json();

        if (data.Response === "True") {
            const [titulo, genero, director, sinopsis] = await Promise.all([
                traducir(data.Title, 'en', 'es'),
                traducir(data.Genre, 'en', 'es'),
                traducir(data.Director, 'en', 'es'),
                traducir(data.Plot, 'en', 'es')
            ]);

            targetElement.innerHTML = `
                <div style="padding: 1em; background: #111; color: white; border-radius: 10px; max-width: 600px; margin: 1vh -8vh; scale: 50%;">
                    <img src="${data.Poster !== "N/A" ? data.Poster : ''}" alt="${titulo}" style="width: 150px; float: left; margin-right: 1em; border-radius: 10px;">
                    <h2>${titulo} (${data.Year})</h2>
                    <p><strong>Género:</strong> ${genero}</p>
                    <p><strong>Director:</strong> ${director}</p>
                    <p><strong>Sinopsis:</strong> ${sinopsis}</p>
                    <div style="clear: both;"></div>
                </div>
            `;
        } else {
            targetElement.style.display = 'none';
        }
    } catch (error) {
        console.error("Error al buscar datos:", error);
        targetElement.style.display = 'none';
    }
}

// 4. Orquestador: Procesa el click y decide qué hacer
export async function procesarMedia(match, iframeElement, detailsElement) {
    const url = match.getAttribute('data-url');
    const titulo = match.textContent;
    const type = getMediaType(url);

    // Lógica específica para Drive
    if (type === 'drive_file') {
        // Tu lógica exacta para limpiar la URL de archivos de video
        const cleanUrl = url.split('view?usp')[0]; 
        iframeElement.src = cleanUrl;
    } 
    else if (type === 'drive_folder') {
        // Para carpetas, navegación directa
        window.location.href = url;
        return; // Salimos porque se va a recargar la página
    } 
    else {
        // Comportamiento estándar
        iframeElement.src = url;
    }

    // Siempre buscamos los detalles en OMDb tras procesar el video
    await mostrarDetallesOMDb(titulo, detailsElement);
}
