// Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

let umdoistres = [0, 1, 2, 3, 4];

for (let numero of umdoistres) {
    console.log(numero);
}   

console.log('---------------------------------------------');

// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

let nums = [0, 5, 10, 20, 40];

function exibirIndexAndElements () {
    for (let i = 0; i < nums.length; i++) {
        console.log(i, nums[i]);
    }
}

exibirIndexAndElements();
console.log('---------------------------------------------');

//Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

let numbers = [0, 5, 10, 20, 40];
let soma = 0;

function exibirSoma () {
    for (let i = 0; i < numbers.length; i++) {
        soma += numbers[i];
        console.log(soma);
    }
}

exibirSoma ();
console.log(`A soma final é ${soma} !!!`);
console.log('---------------------------------------------');

//Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

const arrMenoresMaiores = [5, 37, 18, 59, 12, -5];

function imprimeMaiorEMenor(arr) {

  let maior = 0;
  let menor = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > maior) {
      maior = arr[i]
    }
    if (arr[i] < menor) {
      menor = arr[i]
    }
  }
  return `o maior número é ${maior} e o menor número é ${menor} !!!`;
}

console.log(imprimeMaiorEMenor(arrMenoresMaiores));
console.log('---------------------------------------------');

//Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

const numéros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
console.log('Números pares do array:');

for (let i = 0; i < numéros.length; i++) {
  if (numéros[i] % 2 === 0) {
    console.log(numéros[i]);
  }
}

console.log('---------------------------------------------');

//Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

const numbros = [10, 8, 6, 9, 7, 5];
let sum = 0;

for (let i = 0; i < numbros.length; i++) {
  sum += numbros[i];
}

const media = sum / numbros.length;
console.log('Array:', numbros);
console.log('Média dos números:', media);
console.log('---------------------------------------------');
