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
  
    decode: (offset, string) => {
      let descifrado = '';
      let offsetDecode = parseInt(offset);
      for (let i = 0; i < string.length; i++) {
        let decodeRin = string.charCodeAt(i); // Determina el mensaje del usuario
  
        if (decodeRin >= 65 && decodeRin <= 90) {
          descifrado += String.fromCharCode((decodeRin - 90 - offsetDecode) % 26 + 90);
        } else if (decodeRin >= 97 && decodeRin <= 122) {
          descifrado += String.fromCharCode((decodeRin - 122 - offsetDecode) % 26 + 122);
        } else if (decodeRin === 32) {
          descifrado += String.fromCharCode(decodeRin);
        } else if (decodeRin >= 33 && decodeRin <= 64) {
          descifrado += String.fromCharCode((decodeRin - 64 - offsetDecode) % 26 + 64);
        }
        console.log(descifrado);
      }
      return descifrado;
    },
    createCipherWithOffset: (offsetHackerEdition, string) => {
  
    }
  };