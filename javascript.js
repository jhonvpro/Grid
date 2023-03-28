var btnEncriptar = document.querySelector('.btn-encriptar');
var btnDesencriptar = document.querySelector('.btn-desencriptar');
var copiar = document.querySelector('.copy');
var textArea = document.querySelector('.text-area');
var mensaje = document.querySelector('.mensaje');


function encriptar() {
    document.querySelector('.mensaje').style.backgroundImage = 'none';
    document.querySelector(".texto-h6").innerHTML = "";
    document.querySelector(".texto-h3").innerHTML = "";
    let texto = textArea.value;
    let textoEncriptado = texto.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    mensaje.value = textoEncriptado;
}

function desencriptar() {
    document.querySelector('.mensaje').style.backgroundImage = 'none';
    let texto = textArea.value;
    let textoDesencriptado = texto.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    mensaje.value = textoDesencriptado;
}

function copyToClipboard() {
    const text = mensaje.value;
    navigator.clipboard.writeText(text).then(() => {
        alert('El texto se ha copiado al portapapeles');
    }).catch((error) => {
        console.error('Error al copiar el texto: ', error);
    });
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
copiar.onclick = copyToClipboard;
