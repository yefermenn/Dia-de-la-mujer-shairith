var numero=0;
function aparecer(){
    var seccion = document.getElementById('felicidad');
    var boton=document.getElementById('boton');
    seccion.classList.add('mostrar');
    boton.classList.add('ocultar');
    setInterval(cambiarColor,500);
}
function cambiarColor(){
    var cuerpo= document.getElementById('cuerpo');
    var colores = ["red","blue","purple","green"];
    cuerpo.style.backgroundColor=colores[numero];
    numero=numero+1;
    console.log(numero);
    if(numero==3){
        numero=0;
    }
}
