export function agregarAlCarrito(p){
    let carrito = JSON.parse(localStorage.getItem("carrito")) || []

    const objeto_producto = {
        id: p.id,
        nombre: p.nombre, 
        descripcion: p.descripcion,
        precio: p.precio,
        cantidad: 1
    }

    const index = carrito.findIndex(item => item.id === p.id)
    if(index !== -1){
        carrito[index].cantidad ++
    }else{
        carrito.push(objeto_producto)
    }

        localStorage.setItem("carrito", JSON.stringify(carrito))
        alert(`${producto.nombre} agregado al carrito`)
        actulizarContador()
}

export function actulizarContador(){
    const carrito = JSON.parse(localStorage.getItem("carrito")) || []
    const total = carrito?.reduce((acc, p)=> acc + p.cantidad, 0)
    const nodoCont = document.getElementById("contador-carrito")
    if(nodoCont){
        nodoCont.textContent = total
    }
    
}

export function limpiarCarrito(){
    localStorage.removeItem("carrito")
    setTimeout(()=>{
        // const div_eliminar = document.getElementById("boton_eliminar")
        // div_eliminar.textContent = " "
    })
    actulizarContador()
}