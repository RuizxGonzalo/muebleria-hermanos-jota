import { agregarAlCarrito, limpiarCarrito } from "./carrito.js"

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

        div.appendChild(img)
        div.appendChild(h2)
        div.appendChild(descripcion)
        div.appendChild(precio)
        div.appendChild(boton)


        contenedor.appendChild(div)
    })

    const div_eliminar = document.getElementById("boton_eliminar")
    const boton_eliminar = document.createElement("button")
    boton_eliminar.textContent = "Eliminar"
    boton_eliminar.style.backgroundColor = "red"
    boton_eliminar.addEventListener("click", (e) => limpiarCarrito())
    div_eliminar.appendChild(boton_eliminar)

}