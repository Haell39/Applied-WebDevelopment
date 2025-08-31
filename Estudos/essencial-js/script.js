// =====================
// VARIÁVEIS E TIPOS
// =====================
let nome = "Rafael";     // string
const idade = 22;        // número (imutável se const)
let estudando = true;    // boolean

console.log("Nome:", nome, "Idade:", idade, "Estudando?", estudando);

// =====================
// CONDIÇÕES
// =====================
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// =====================
// FUNÇÕES
// =====================
function saudacao(pessoa) {
    return `Olá, ${pessoa}!`;
}

console.log(saudacao(nome));

// Arrow Function
const dobrar = (n) => n * 2;
console.log("Dobro de 5:", dobrar(5));

// =====================
// OBJETOS
// =====================
let aluno = {
    nome: "Maria",
    idade: 20,
    curso: "Engenharia",
};

console.log("Aluno:", aluno.nome, "-", aluno.curso);

// =====================
// ARRAYS
// =====================
let numeros = [1, 2, 3, 4, 5];
console.log("Array original:", numeros);

// Métodos importantes
let dobrados = numeros.map((n) => n * 2);
console.log("map (dobrados):", dobrados);

let pares = numeros.filter((n) => n % 2 === 0);
console.log("filter (pares):", pares);

let soma = numeros.reduce((acc, n) => acc + n, 0);
console.log("reduce (soma):", soma);

// =====================
// LOOPS
// =====================
for (let i = 0; i < numeros.length; i++) {
    console.log("For:", numeros[i]);
}

for (let num of numeros) {
    console.log("For...of:", num);
}

// =====================
// DOM (HTML + JS)
// =====================
const div = document.getElementById("saida");
div.innerHTML = "<p>Esse texto veio do JavaScript 🎉</p>";

// Criando elementos dinamicamente
let lista = document.createElement("ul");

numeros.forEach((n) => {
    let item = document.createElement("li");
    item.textContent = `Número: ${n}`;
    lista.appendChild(item);
});

div.appendChild(lista);
