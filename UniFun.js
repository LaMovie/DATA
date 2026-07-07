// UniversalSearch.js
export class UniversalSearch {
    constructor({ input, list, itemsSelector, onSelect }) {
        this.input = input;
        this.list = list;
        this.items = document.querySelectorAll(itemsSelector);
        this.onSelect = onSelect; // Esta es la "acción" que ocurrirá al elegir algo

        this.init();
    }

    // Función interna para limpiar texto (la tuya de siempre)
    Filter(text) {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
    }

  
  init() {
 // Evento de escritura (Filtrado)
    this.input.onkeyup = (e) => {
         const query = this.Filter(this.input.value);
         
   this.list.style.display = query === "" ? "none" : "block";

    this.items.forEach(item => {
          const text = this.Filter(item.textContent);
                item.classList.toggle('Filtro', !text.includes(query));
      });


       // Manejo del Enter
    if (e.key === "Enter") {
          const match = [...this.items].find(item => 
                    this.Filter(item.textContent) === query);
         
          if (match) this.triggerSelect(match);
            }
        };

        // Evento de clic
   this.list.onclick = (e) => {
            if (e.target.matches(this.itemsSelector || '*')) { // Ajuste genérico
   // Buscamos el elemento .DATA padre si el clic fue en un hijo
        const target = e.target.closest(this.itemsSelector || '.DATA');
            if(target) this.triggerSelect(target);
            }
        };
    }

    triggerSelect(match) {
     // Ejecutamos la función que el usuario nos pasó
        this.onSelect(match);
        
        // Limpiamos la UI
     this.input.value = "";
 this.list.style.display = "none";
 this.input.placeholder = match.textContent;
        this.input.classList.add('activo');
    }
}
