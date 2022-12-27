let seccionPaginaIntro = document.getElementById("pagina-intro")
let botonProbarPagina = document.getElementById("boton-probar-pagina")
let seccionMaestra = document.getElementById('seccion-maestra')
let divTituloDelMenu = document.getElementById("titulo-del-menu")

let divCuentaNueva = document.getElementById("nuevo-ingreso")
let botonCrearCuenta = document.getElementById("crear-cuenta")

let botonLogout = document.getElementById("boton-log-out").addEventListener("click", logOut)

let botonIntro = document.getElementById("boton-intro").addEventListener("click", irAMenuIntro)
let bontonComidas = document.getElementById("boton-comidas").addEventListener("click", seleccionarMenuComidas)
let divBotonesDeNavegacion = document.getElementById("area-de-navegacion")
let botonVolverAlMenu = document.getElementById("boton-volver-al-menu").addEventListener("click", menuPrincipal)

let botonFrutas = document.getElementById("boton-frutas").addEventListener("click", seleccionarTarjetaFruta)
let botonVegetales = document.getElementById("boton-vegetales").addEventListener("click", seleccionarTarjetaVegetal)
let botonCarnes = document.getElementById("boton-carnes").addEventListener("click", seleccionarTarjetaCarne)
let botonBebidas = document.getElementById("boton-bebidas").addEventListener("click", seleccionarTarjetaBebidas)

let divMenuIntroduccion = document.getElementById("menu-introduccion")
let divSeleccionDeFrutas = document.getElementById("seleccion-de-fruta")
let divSeleccionDeVegetales = document.getElementById("seleccion-de-vegetales")
let divSeleccionDeCarnes = document.getElementById("seleccion-de-carnes")
let divSeleccionDeBebidas = document.getElementById("seleccion-de-bebidas")
let divSeleccionDeTema = document.getElementById("seleccion-del-tema")


const profesores = ["profesor"]
const alumnos = ["pipo"] 
const contraseñas = ["000000"]

let frutas = []
let vegetales = []
let carnes = []
let bebidas = []



class Tarjeta {
    constructor(imagen,nombreE,nombreI,descripcionE,descripcionI) {
        this.imagen = imagen,
        this.nombreE = nombreE,
        this.nombreI = nombreI,
        this.descripcionE = descripcionE,
        this.descripcionI = descripcionI
    }
}

let Manzana = new Tarjeta("./assets/manzana.png", "Nombre en Español : Manzana", "Name in English: Apple", "Descripcion en Español: Es una fruta dulce de color rojo o verde que crece en los arboles", "Description in English: It is a sweet red or green fruit that grows on trees." )
let Pera = new Tarjeta("./assets/pera.png", "Nombre en Español : Pera", "Name in English : Pear", "Descripcion en Español : Es una fruta dulce de color verde que crece en los arboles", "Description in English : It is a sweet green fruit that grows on trees." )
let Cambur = new Tarjeta("./assets/cambur.png", "Nombre en Español : Cambur", "Name in English : Banana", "Descripcion en Español : Es una fruta tropical, generalmente de color verde o amarillo que crece en arboles", "Description in English : It is a tropical fruit, usually green or yellow in color that grows on trees")
let Mango = new Tarjeta("./assets/mango.png")
let Uva = new Tarjeta("./assets/uva.png")
let Naranja = new Tarjeta("./assets/naranja.png")

let Pepino = new Tarjeta("./assets/pepino.png")
let Coliflor = new Tarjeta("./assets/coliflor.png")
let Berenjena = new Tarjeta("./assets/berenjena.png")
let Calabacin = new Tarjeta("./assets/calabacin.png")
let Tomate = new Tarjeta("./assets/tomate.png")
let Cebolla = new Tarjeta("./assets/cebolla.png")

let CarneDePollo = new Tarjeta("./assets/carnedepollo.png")
let CarneDeRes = new Tarjeta("./assets/carnederes.png")
let CarneDePescado = new Tarjeta("./assets/carnedepescado.png")
let CarneDePavo = new Tarjeta("./assets/carnedepollo.png")
let CarneDeCerdo= new Tarjeta("./assets/carnedecerdo.png")
let Embutido= new Tarjeta("./assets/embutido.png")

let Agua = new Tarjeta("./assets/agua.png")
let JugoDeFruta = new Tarjeta("./assets/jugodefruta.png")
let Leche = new Tarjeta("./assets/leche.png")
let Te = new Tarjeta("./assets/te.png")
let Cafe = new Tarjeta("./assets/cafe.png")
let Refresco = new Tarjeta("./assets/refresco.png")






function iniciarPagina() {
    seccionMaestra.style.display = "none"
    divCuentaNueva.style.display = "none"
    botonProbarPagina.addEventListener("click", logIn)
    
    frutas.forEach((tarjeta) => {
        tarjetaDeFruta = `
        <div onmouseenter = "crecer()" onmouseleave = "decrecer()" class="tarjetas">
            <img src= ${tarjeta.imagen}>
            <p style="margin:0px">${tarjeta.nombreE}</p>
            <p style="margin:0px">${tarjeta.nombreI}</p>
            <p style="margin:0px">${tarjeta.descripcionE}</p>
            <p style="margin:0px">${tarjeta.descripcionI}</p>  
        </div>
        `
        
            divSeleccionDeFrutas.innerHTML += tarjetaDeFruta
            
    })

    vegetales.forEach((tarjeta) => {
        tarjetaDeVegetal = `
        <label class="tarjetas">
            <img src= ${tarjeta.imagen}>
            <p style="margin:0px">${tarjeta.nombreE}</p>
            <p style="margin:0px">${tarjeta.nombreI}</p>
            <p style="margin:0px">${tarjeta.descripcionE}</p>
            <p style="margin:0px">${tarjeta.descripcionI}</p>  
        </label>
        `
        
        divSeleccionDeVegetales.innerHTML += tarjetaDeVegetal
    
    })

    carnes.forEach((tarjeta) => {
        tarjetaDeCarne = `
        <label class="tarjetas">
            <img src= ${tarjeta.imagen}>
            <p style="margin:0px">${tarjeta.nombreE}</p>
            <p style="margin:0px">${tarjeta.nombreI}</p>
            <p style="margin:0px">${tarjeta.descripcionE}</p>
            <p style="margin:0px">${tarjeta.descripcionI}</p>  
        </label>
        `
        
            divSeleccionDeCarnes.innerHTML +=  tarjetaDeCarne
    })

    bebidas.forEach((tarjeta, ) => {
        tarjetaDeBebida = `
        <label class="tarjetas">
            <img src= ${tarjeta.imagen}>
            <p style="margin:0px">${tarjeta.nombreE}</p>
            <p style="margin:0px">${tarjeta.nombreI}</p>
            <p style="margin:0px">${tarjeta.descripcionE}</p>
            <p style="margin:0px">${tarjeta.descripcionI}</p>  
        </label>
        `
        
            divSeleccionDeBebidas.innerHTML +=  tarjetaDeBebida
    })
}

frutas.push(Manzana,Pera,Cambur,Mango,Uva,Naranja)
vegetales.push(Pepino,Coliflor,Berenjena,Calabacin,Tomate,Cebolla)
carnes.push(CarneDePollo,CarneDeRes,CarneDePescado,CarneDePavo,CarneDeCerdo,Embutido)
bebidas.push(Agua,JugoDeFruta,Leche,Te,Cafe,Refresco)

function logOut () {
        seccionPaginaIntro.style.display = "flex"
        seccionMaestra.style.display = "none"
        document.getElementById("usuario").value = ""
        document.getElementById("contraseña").value = ""
}

function logIn () {
    
    let usuario = document.getElementById("usuario").value
    let contraseña = document.getElementById("contraseña").value
    if (alumnos.includes(usuario) && contraseñas.includes(contraseña)) {

        seccionPaginaIntro.style.display = "none"
        seccionMaestra.style.display = "flex"
        divSeleccionDeFrutas.style.display = "none"
        divSeleccionDeVegetales.style.display = "none"
        divSeleccionDeCarnes.style.display = "none"
        divSeleccionDeBebidas.style.display = "none"
        divBotonesDeNavegacion.style.display = "none"
        divSeleccionDeTema.style.display = "none"
        divTituloDelMenu.style.display = "none"
        divCuentaNueva.style.display = "none"

    } else if (alumnos.includes(usuario) && (contraseñas.includes(contraseña) == false)) {
        alert("Contraseña incorrecta") 
    } else if (profesores.includes(usuario)) { 
        seccionPaginaIntro.style.display = "none"
        seccionMaestra.style.display = "flex"
        divSeleccionDeFrutas.style.display = "none"
        divSeleccionDeVegetales.style.display = "none"
        divSeleccionDeCarnes.style.display = "none"
        divSeleccionDeBebidas.style.display = "none"
        divBotonesDeNavegacion.style.display = "none"
        divSeleccionDeTema.style.display = "none"
        divTituloDelMenu.style.display = "none"
        divCuentaNueva.style.display = "flex"
    } else {
        alert("Usuario no registrado")
    }
}

function irAMenuIntro () {
    
    divSeleccionDeFrutas.style.display = "none"
    divSeleccionDeVegetales.style.display = "none"
    divSeleccionDeCarnes.style.display = "none"
    divSeleccionDeBebidas.style.display = "none"
    divMenuIntroduccion.style.display = "none"
    divTituloDelMenu.style.display = "none"
    divSeleccionDeTema.style.display = "none"
    divBotonesDeNavegacion.style.display = "none"
    divMenuIntroduccion.style.display = "flex"
    
    
}

function seleccionarMenuComidas () {
    divSeleccionDeFrutas.style.display = "none"
    divSeleccionDeVegetales.style.display = "none"
    divSeleccionDeCarnes.style.display = "none"
    divSeleccionDeBebidas.style.display = "none"
    divMenuIntroduccion.style.display = "none"
    divTituloDelMenu.style.display = "flex"
    divSeleccionDeTema.style.display = "grid"
    divBotonesDeNavegacion.style.display = "none"
    divTituloDelMenu.innerHTML ="Elige una Tarjeta"
}

function seleccionarTarjetaFruta () {
    divSeleccionDeTema.style.display = "none"
    divSeleccionDeFrutas.style.display = "grid"
    divTituloDelMenu.innerHTML ="Elige una fruta"
    divBotonesDeNavegacion.style.display = "flex"
}

function seleccionarTarjetaVegetal () {
    divSeleccionDeTema.style.display = "none"
    divSeleccionDeVegetales.style.display = "grid"
    divTituloDelMenu.innerHTML ="Elige una Vegetal"
    divBotonesDeNavegacion.style.display = "flex"
}

function seleccionarTarjetaCarne () {
    divSeleccionDeTema.style.display = "none"
    divSeleccionDeCarnes.style.display = "grid"
    divTituloDelMenu.innerHTML ="Elige una Carne"
    divBotonesDeNavegacion.style.display = "flex"
}

function seleccionarTarjetaBebidas () {
    divSeleccionDeTema.style.display = "none"
    divSeleccionDeBebidas.style.display = "grid"
    divTituloDelMenu.innerHTML ="Elige una Bebida"
    divBotonesDeNavegacion.style.display = "flex"
}

function menuPrincipal () {
    divSeleccionDeFrutas.style.display = "none"
    divSeleccionDeVegetales.style.display = "none"
    divSeleccionDeCarnes.style.display = "none"
    divSeleccionDeBebidas.style.display = "none"


    divSeleccionDeTema.style.display = "grid"
    divBotonesDeNavegacion.style.display = "none"
    divTituloDelMenu.innerHTML ="Elige una Tarjeta"
    
}

function crearCuenta () {

let nuevoUsuario = document.getElementById("nuevo-usuario").value
let nuevaContraseña = document.getElementById("nueva-contraseña").value

if (nuevoUsuario == "" || nuevaContraseña == "")
    {alert("Rellena ambos campos")
} else if (alumnos.includes(nuevoUsuario))
    {alert("Usuario ya registrado")}

    else {
    alumnos.push(document.getElementById("nuevo-usuario").value)
    contraseñas.push(document.getElementById("nueva-contraseña").value)

    console.log(alumnos)
    console.log(contraseñas)
    
}

        
}




function crecer () {}

function decrecer () {}

window.addEventListener("load" , iniciarPagina)






