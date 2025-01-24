const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

console.log(
    // primeiro indicamos array , depois posição do array , caso digite apenas posição do nome dentro do primeiro array ira exibir somente todo o array medias
    `O(a) aluno(a) da posição 1° da lista é : ${lista[0][1]}.
    a nota desse(a) aluno(a) é : ${lista[1][1]}`
);
