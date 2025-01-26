const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    // soma das notas (começa em 0) ira somas notas[indice atual do loop] 
    // ex: 0 + 10
    // ex: 10 + 6.5
    // ex: 16.5 + 8
    // ex: 24.5 + 7.5 = 32

    somaDasNotas += notas[i];
    console.log(somaDasNotas);
    // retorno console:
    // 10
    // 16.5
    // 24.5
    // 32
}

// após fazer o loop para percorrer todas as notas e incrementar notas a variavel de soma , irá dividar pelo index total do array

const media = somaDasNotas / notas.length;
console.log(`A média das notas é: ${media}`);
