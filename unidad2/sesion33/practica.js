let string = document.getElementById('mensaje');
let msjCode = document.getElementById('cifrado');
let offset = document.getElementById('desplazar');
let resultadoCode = document.getElementById('buttonA');   
let offsetHackerEdition = 33;

resultadoCode.addEventListener('click', codifiction);
function codifiction() {
    msjCode.innerHTML = window.cipher.encode(offset.value, string.value);
  };
  

  window.cipher = {
    offset: 33,
  
    encode: (offset, string) => {
      let codificado = ''; // Se crea la variable del mensaje
      let offsetEncode = parseInt(offset); // Se cra la variable y se le da el valor de número
      for (let i = 0; i < string.length; i++) { // Se crea el bucle para determinar en código ASCII
        let codeRin = string.charCodeAt(i);
        if (codeRin >= 65 && codeRin <= 90) { // Fórmula
          codificado += String.fromCharCode((codeRin - 65 + offsetEncode) % 26 + 65);
        } else if (codeRin >= 97 && codeRin <= 122) {
          codificado += String.fromCharCode((codeRin - 97 + offsetEncode) % 26 + 97);
        } else if (codeRin === 32) {
          codificado += String.fromCharCode(codeRin);
        } else if (codeRin >= 33 && codeRin <= 64) {
          codificado += String.fromCharCode((codeRin - 33 + offsetEncode) % 26 + 33);
        }
        console.log(codificado);
      }
      return codificado;
    },
    createCipherWithOffset: (offsetHackerEdition, string) => {
  
    }
  };