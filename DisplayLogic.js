// DisplayLogic.js
export function initUI() {
    window.addEventListener("resize", Handle);
    Handle(); // Ejecuta al cargar
}

function Handle() {
    // Si el ancho es mayor al alto, horizontal, si no, vertical
    (window.innerWidth > window.innerHeight) ? aplicarEstiloHorizontal() : aplicarEstiloVertical();
}

function aplicarEstiloHorizontal() {
    // Aquí pegas tu código CSS del estilo 'evento()' (pero como String o inyección limpia)
    const style = document.createElement('style');
    style.id = "dynamic-style";
    style.innerHTML = `
<style>
#Aux {
      margin: 10vh;
}   
#Pantalla {
    scale: 190%;
    transform: translate(15vh, 10vh);
    margin: 3vh;
    border-radius: 20px; 
    background: url(https://is.gd/L4PVt2);
    /*https://bit.ly/49X0ijf*/
    background-size: cover;
    background-position: center;
}
section {
    top: 20vh;
    right: -10vh;
    width: 55%;
    height: 7vh;
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
input {    
    scale: 120%;
    color: #fff;
    width: 100%;
    padding: 10px;
    outline: none;
    font-weight: 600;
    border-radius: 20px;
    background: transparent;
    border: 2px solid gray;   
}
.PlaceHolder::placeholder {
    color: blue;
    opacity: .7;
}
#Lista {
    scale: 90%;
    left: 10vh;
    position: fixed;
    display: none;
    font-size: 30px;
    margin-top: 20px;
    list-style: none;
    font-weight: 600;
    color: #fff;
    text-align: center;
    background: #000;
    height: 50vh;
    overflow: scroll;
    scrollbar: none;
    border-radius: 20px;
    transform: translate(130vh, 10vh);
}
#Lista::-webkit-scrollbar {
    display: none;
}
#No {
    top: 0vh;
    right: 25vh;
    scale: 80%;
    display: none;
    position: fixed;
    transform: translate(-5vh, -30vh);
}
</style>         
`;
    document.head.appendChild(style);
}

function aplicarEstiloVertical() {
    // Aquí pegas tu código CSS del estilo 'invento()'
    const style = document.createElement('style');
    style.id = "dynamic-style";
    style.innerHTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body {
      background: #000;
      position: fixed;      
}
#Aux, #Aux2 {
      margin: 10vh;
}   
#Pantalla {
    margin: 3vh;
    border-radius: 20px; 
    background: url(https://is.gd/L4PVt2);
    background-size: cover;
    background-position: center;
}
.Pantalla {
    display: none;
    margin: 3vh;
    border-radius: 20px; 
    background: #000;
    background-size: cover;
    background-position: center;
}
}
section {
    width: 55%;
    height: 7vh;
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
input {    
    color: #fff;
    width: 100%;
    padding: 10px;
    outline: none;
    font-weight: 600;
    border-radius: 20px;
    background: transparent;
    border: 2px solid gray;   
}
.PlaceHolder::placeholder {
    color: blue;
    opacity: .7;
}
#Lista {
    scale: 90%;
    left: -3vh;
    position: fixed;
    display: none;
    font-size: 30px;
    margin-top: 20px;
    list-style: none;
    font-weight: 600;
    color: #fff;
    text-align: center;
    background: #000;
    height: 40vh;
    overflow: scroll;
    border-radius: 20px;
}
li {
    margin: 5px 0;
}
.filtro {
    display: none;
}
a {
    color: #fff;
    text-decoration: none;
  &:hover {
     color: #4f9;
     text-shadow: 0 0 10px red;
 }
}
#No {
    top: 56vh;
    right: 10vh;
    scale: 70%;
    display: none;
    position: fixed;
    border-radius: 50px;
  &:hover {
      filter: hue-rotate(90deg);
  }
}
</style>

<style>
:root {
  --bg: #110921;
  --purple: #3720b4;
  --green: #5ff8c2;
  --font: 'Roboto Mono', sans-serif;
}
h1 {
  font-size: 3vw;
}
#FULL {
    top: 27vh;
    left: 40vh;
    width: 50%;
    height: 10%;
    display: none;
    z-index: 9999;
    position: fixed;
    background: transparent;
}
</style>
</head>
<body>
<section id="contenedor-main">
    <div>
        <input type="text" name="buscador" id="buscador" placeholder="Buscar...">
           <br/><br/>
    <ul id="Lista"></ul>
           </div>
</section>
<img id="No" src="https://is.gd/NjNew4"/>   
`;
    document.head.appendChild(style);
}
