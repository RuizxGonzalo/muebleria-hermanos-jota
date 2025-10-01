document.getElementById("formulario")?.addEventListener("submit", function(e){
    e.preventDefault()
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const errores = [];

    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/;
    if(!nombreRegex.test(nombre)){
        errores.push("el nombre debe tener al menos 3 letras y no contener simbolos.")
    }

    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if(!emailRegex.test(email)){
        errores.push("el email no es valido")
    }

    if(mensaje.lenght < 2){
        errores.push("el mensaje debe contener por lo menos 2 caracteres.")
    }

    mostrarErrores(errores)
})

function mostrarErrores(errores){
    const div = document.getElementById("errores")
    div.innerHTML = errores.lenght ? `<ul>${errores.map(e =>`<li>${e}</li>`).join('')}</ul>`:"formulario enviado correctamente "
}