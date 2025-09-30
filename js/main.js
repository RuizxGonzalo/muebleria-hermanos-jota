import { cargarCatalogo } from "./catalogo.js"
document.addEventListener("DOMContentLoaded", ()=>{
    const pagina = window.location.pathname
    if(pagina.includes("productos.html")){
        fetch("./data/productos.json")
        .then(res => res.json())
        .then(data => cargarCatalogo(data))
        .catch(err => console.error("Error al cargar productos:"))
    }
})