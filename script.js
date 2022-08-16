const textareaMesaje = document.querySelector("#mensajeEscrito");
const textareaResultado = document.querySelector("#resultado");

const inputEncriptar = document.querySelector(".encriptar");
const inputDesEncriptar = document.querySelector(".desencriptar");
const inputCopiar = document.querySelector(".Copiar");

function encriptar(){
    var mensaje = textareaMesaje.value;
    var mensajeEncriptado = mensaje
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai")
    .replaceAll("u","ufat");  
    textareaResultado.value = mensajeEncriptado;
}


function Desencriptar(){
    var mensajeEncriptado = textareaMesaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("ai","a")
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");  
    textareaResultado.value = mensaje;
}
 

function copiar(){
    var mensajeEncriptado = textareaResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    
}
inputEncriptar.onclick = encriptar;
inputDesEncriptar.onclick = Desencriptar;
inputCopiar.onclick = copiar;
