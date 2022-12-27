let veamos = prompt("Si esta enlazando")
let seccionPaginaIntro = document.getElementById("pagina-intro")
let botonProbarPagina = document.getElementById("boton-probar-pagina")


function iniciarPagina () {
    botonProbarPagina.addEventListener("click", alert("Ahora si agarro"))
}

function probarPagina() {
    seccionPaginaIntro.style.display = "none"  
}

window.addEventListener("load" , iniciarPagina)
    