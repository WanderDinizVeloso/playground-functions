// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
};

// Desafio 3
function splitSentence(string) {
  return resultado = string.split(" ");
};

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ", " + array[0];
};

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
};

// Desafio 6
function highestCount(maiorNumero) {
  let maiorValor = maiorNumero[0];
  let maiorNumeroRepetido = [];
  for (let index = 0; index < maiorNumero.length; index += 1) {
    if (maiorNumero[index] > maiorValor) {
      maiorValor = maiorNumero[index];
    };
  };
  for (let index = 0; index < maiorNumero.length; index += 1) {
    if (maiorNumero[index] === maiorValor) {
      maiorNumeroRepetido.push(maiorNumero[index]);
    };
  }; 
  return maiorNumeroRepetido.length;
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Mouse0 = cat1 - mouse;
  let cat2Mouse0 = cat2 - mouse;
  mouse = 0;
  if (cat1Mouse0 < 0) {
  cat1Mouse0 = (cat1Mouse0 - cat1Mouse0 - cat1Mouse0);
  };
  if (cat2Mouse0 < 0) {
  cat2Mouse0 = (cat2Mouse0 - cat2Mouse0 - cat2Mouse0);
  }; 
  if (cat1Mouse0 === cat2Mouse0) {
    return "os gatos trombam e o rato foge";
  } else if (cat1Mouse0 < cat2Mouse0) {
    return "cat1";
  } else {
    return "cat2";
  };
};

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
      resultado.push("fizzBuzz");
    } else if ((array[index] % 3 === 0)) {
      resultado.push("fizz");
    } else if ((array[index] % 5 === 0)) {
      resultado.push("buzz");
    } else {  
      resultado.push("bug!");
    };
  };
  return resultado;
};

// Desafio 9
function encode(string) {
  let caracteresString = [];
  for (let caracteres of string) {
    caracteresString.push(caracteres);
  };
  for (let index = 0; index < caracteresString.length; index+= 1) {
    if (caracteresString[index] === "a") {
      caracteresString[index] = "1";
    } else if (caracteresString[index] === "e") {
      caracteresString[index] = "2";
    } else if (caracteresString[index] === "i") {
      caracteresString[index] = "3";
    } else if (caracteresString[index] === "o") {
      caracteresString[index] = "4";
    } else if (caracteresString[index] === "u") {
      caracteresString[index] = "5";
    };
  };
  let novaString = caracteresString.join('');
  return novaString;
};

function decode(string) {
  let caracteresString = [];
  for (let caracteres of string) {
    caracteresString.push(caracteres);
  };
  for (let index = 0; index < caracteresString.length; index += 1) {
    if (caracteresString[index] === "1") {
      caracteresString[index] = "a";
    } else if (caracteresString[index] === "2") {
      caracteresString[index] = "e";
    } else if (caracteresString[index] === "3") {
      caracteresString[index] = "i";
    } else if (caracteresString[index] === "4") {
      caracteresString[index] = "o";
    } else if (caracteresString[index] === "5") {
      caracteresString[index] = "u";
    };
  };
  let novaString = caracteresString.join('');
  return novaString;
};

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
