let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let numerosPares = [];

numeros.forEach(function(numero) {
    if (numero % 2 === 0)//numeo dividido por ele mesmo
         {
        numerosPares.push(numero);
    }
});

console.log(numerosPares); // Saída: 2, 4, 6, 8




let nomes = ["João", "Maria", "Carlos", "Ana"];
let nomesComPrefixo = [];

nomes.forEach(function(nome) {
    nomesComPrefixo.push("Sr(a). " + nome);
});

console.log(nomesComPrefixo);
// Saída: Sr



let numeros1 = [4, 11, 8, 15, 23, 7, 2];
let multiplos = []

numeros.forEach(function(numero1){
    multiplos.push(numero1 > 10)

    console.log(multiplos)
})
//numeros maior do que 10




let frase = "Raphael Veiga é FODA";
let palavras = frase.split(" "); // Divide a frase em palavras
let contador = 0;

palavras.forEach(function() {
    contador++;
});

console.log("Número de palavras:", contador); // Saída: Número de palavras: 4




let crauculo = ["ana", "carlos", "maria"];
let nomesMaiusculos = [];

nomes.forEach(function(nome) {
    nomesMaiusculos.push(nome.toUpperCase());
});

console.log(nomesMaiusculos); // Saída: ["ANA", "CARLOS", "MARIA"]
