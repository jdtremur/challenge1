const textareaMesaje = document.querySelector("#mensajeEscrito");
const textareaResultado = document.querySelector("#resultado");

const inputEncriptar = document.querySelector(".encriptar");
const inputDesEncriptar = document.querySelector(".desencriptar");
const inputCopiar = document.querySelector(".Copiar");

function encriptar(){
    var mensaje = textareaMesaje.value;
    var arreglo = new String(mensaje);
    var mensajeEncriptado = mensaje
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai")
    .replaceAll("u","ufat");
    textareaResultado.value = mensajeEncriptado;
    for(var i=0;i<arreglo.length;i++){
    
        if(arreglo.length>0){
            document.getElementById('img').style.display = 'none';
            document.getElementById('aviso1').style.display = 'none';
            document.getElementById('aviso2').style.display = 'none';
            document.getElementById('boton3').style.display = 'block';
            document.getElementById('mensajeEncontrado').style.display = 'block';
        }  
        else{
          
         }
    }     
}

function Desencriptar(){
    var mensajeEncriptado = textareaMesaje.value;
    var arreglo = new String(mensajeEncriptado);
    var mensaje = mensajeEncriptado
    .replaceAll("ai","a")
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");  
    textareaResultado.value = mensaje;
    for(var i=0;i<arreglo.length;i++){
    
        if(arreglo.length>0){
            document.getElementById('img').style.display = 'none';
            document.getElementById('aviso1').style.display = 'none';
            document.getElementById('aviso2').style.display = 'none';
            document.getElementById('boton3').style.display = 'block';
            document.getElementById('mensajeEncontrado').style.display = 'block';
        }  
        else{
          
         }
    }   
}
 function borrar(){
    textareaResultado.value="";
    textareaMesaje.focus();
    textareaMesaje.value="";
    document.getElementById('img').style.display = 'block';
    document.getElementById('aviso1').style.display = 'block';
    document.getElementById('aviso2').style.display = 'block';
    document.getElementById('boton3').style.display = 'none';
    document.getElementById('mensajeEncontrado').style.display = 'none';
 }

function copiar(){
    var mensajeEncriptado = textareaResultado.value
    navigator.clipboard.writeText(mensajeEncriptado);
    document.getElementById('img').style.display = 'block';
    document.getElementById('aviso1').style.display = 'block';
    document.getElementById('aviso2').style.display = 'block';
    document.getElementById('boton3').style.display = 'none';
    document.getElementById('mensajeEncontrado').style.display = 'none';
}
inputEncriptar.onclick = encriptar;
inputDesEncriptar.onclick = Desencriptar;
inputCopiar.onclick = copiar;
textareaMesaje.onclick = borrar;