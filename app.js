function welcome(option) {
    do {
      var answerToOptions = prompt('Indique el número de lo que desea hacer: \n 1) Cifrar. \n 2) Descifrar.');
      if (answerToOptions === '1') {
        var stringToCipher = prompt('¡Ingresa tu texto a cifrar! (Sin números por favor :) )');
        var matches = stringToCipher.match(/\d+/g);
        if (matches !== null) {
          alert('Ingrese un texto válido, por favor.');
          continue;
        } else {
          return cipher(stringToCipher);
        }
      } else if (answerToOptions === '2') {
        var stringToDecipher = prompt('¡Ingresa tu texto a descifrar! (Sin números por favor :) )');
        var matches = stringToDecipher.match(/\d+/g);
        if (matches !== null) {
          alert('Ingrese un texto válido, por favor');
          continue;
        } else {
          return decipher(stringToDecipher);
        }
      } else {
        alert('Ingresa un número válido, por favor.');
      }
    } while (answerToOptions !== 1 || answerToOptions !== 2);
  }
  welcome();
  /**
   * Función que cifra un string basado en el Cifrado César
   */
  function cipher(string) {
    var newString = '';
    for (var i = 0 ; i < string.length ; i++) {
      if (string[i] === ' ') {
        newString = newString + ' ';
      } else if (string[i] === string[i].toLowerCase()) {
        var character = string.charCodeAt(i);
        /**
         * El 97 representa el inicio del alfabeto en minúsculas en ASCII
         */
        character = (((character - 97) + 33) % 26) + 97;
        character = String.fromCharCode(character);
        newString = newString + character;
      } else {
        var character = string.charCodeAt(i);
        /**
         * El 65 representa el inicio del alfabeto en mayúsculas en ASCII
         */
        character = (((character - 65) + 33) % 26) + 65;
        character = String.fromCharCode(character);
        newString = newString + character;
      }
    }
    /**
     * document.write primero para que el return no corte el proceso
     */
    document.write('<center>En caso de que quieras copiar tu texto, aquí lo tienes:<br><br>' + '\'' + newString + '\'</center>');
    return alert('Tu texto cifrado se ve así: \n' + newString);
  }
  /**
   * Función para descifrar un texto cifrado en base al Cifrado César
   */
  function decipher(string) {
    var newString = '';
    for (var i = 0 ; i < string.length ; i++) {
      if (string[i] === ' ') {
        newString = newString + ' ';
      } else if (string[i] === string[i].toLowerCase()) {
        var character = string.charCodeAt(i);
        character = ((((character - 97) - 7) + 26) % 26) + 97;
        /**
         * Reemplazamos el 33 por 7 porque es equivalente
         * al desplazamiento de 33 y así evitamos que se salga del rango del alfabeto en ASCII. La fórmula está
         * modificada para invertir el cifrado, le agregamos un +26 para evitar números negativos y al mismo tiempo
         * no influir en el residuo.
         */
        character = String.fromCharCode(character);
        newString = newString + character;
      } else {
        var character = string.charCodeAt(i);
        character = ((((character - 65) - 7) + 26) % 26) + 65;
        character = String.fromCharCode(character);
        newString = newString + character;
      }
    }
    document.write('<center>En caso de que quieras copiar tu texto, aquí lo tienes:<br><br>' + '\"' + newString + '\"</center>');
    return alert('Tu texto descifrado se ve así:\n' + newString);
  }