import { agregarAlCarrito } from "./carrito.js"

import (agregarAlCarrito)

export function cargarCatalogo(productos){
    const contenedor = document.getElementById("catalogo")
    if(!contenedor) return

    productos.array.forEach(p => {
        const div = document.createElement("div")

        div.className = "card"
        const img = document.createElement("img")
        img.src = p.imagen
        img.alt = p.nombre

        const h2 = document.createElement("h2")
        h2.textContent = p.nombre

        const descripcion = document.createElement("p")
        descripcion.textContent = p.descripcion

        const precio = document.createElement("strong")
        precio.textContent = `$${precio}`

        const boton = document.createElement("button")
        boton.textContent = "agregar al carrito"
        boton.addEventListener("click", ()=> agregarAlCarrito(p))
    })
}