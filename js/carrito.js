export function agregarAlCarrito(p){
    let carrito = JSON.parse(localStorage.getItem("carrito")) || []

    const objeto_producto = {
        id: producto.id,
        nombre: producto.nombre, 
        descripcion: producto.descripcion,
        precio: producto.precio,
        cantidad: 1
    }

    const index = carrito.findIndex(item => item.id === p.id)
    if(index !== -1){
        carrito[index].cantidad ++
    }else{
        carrito.push(objeto_producto)
    }

        localStorage.setItem("carrito", JSON.stringify(carrito))
        alert()
}