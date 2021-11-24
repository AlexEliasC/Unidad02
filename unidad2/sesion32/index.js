/* Se crean las variables let para conectar el DOM con nuestra página HTML */
let string = document.getElementById('mensaje');
let offset = document.getElementById('desplazar');
let msjCode = document.getElementById('cifrado');
let msjDecode = document.getElementById('descifrador');
let resultadoCode = document.getElementById('buttonA');
let resultadoDecode = document.getElementById('buttonB');
let resultadoClear = document.getElementById('limpiar');
let offsetHackerEdition = 33;

/* Se crea el evento para el botón de clickeo de cifrado */
resultadoCode.addEventListener('click', codifiction);

function codifiction() {
  msjCode.innerHTML = window.cipher.encode(offset.value, string.value);
};

/* Se crea el evento para el botón de clickeo de descifrado */
resultadoDecode.addEventListener('click', decofiction);

function decofiction() {
  msjDecode.innerHTML = window.cipher.decode(offset.value, string.value);
};

/* Se crea el botón para borrar el contenido que llenan los usuarios */
resultadoClear.addEventListener('click', clearfiction);

function clearfiction() {
  let emptyCode = document.getElementById('cifrado').innerHTML = '';
  let emptyMsj = document.getElementById('mensaje').value = '';
  let emptyDecode = document.getElementById('descifrador').innerHTML = '';
  let emptyJump = document.getElementById('desplazar').value = '';
};