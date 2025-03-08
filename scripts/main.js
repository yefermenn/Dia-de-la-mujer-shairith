var numero=0;
let cancion = new Audio('./multimedia/tema.mp3');
function aparecer(){
    var seccion = document.getElementById('felicidad');
    cancion.play();
    var boton=document.getElementById('boton');
    seccion.classList.add('mostrar');
    boton.classList.add('ocultar');
    setInterval(cambiarColor,500);
}
function cambiarColor(){
    var cuerpo= document.getElementById('cuerpo');
    cuerpo.style.backgroundColor=`#F5D9FF`;
}
