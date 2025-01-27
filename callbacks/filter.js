const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, i) => {
    return medias[i] < 7;
});

console.log(reprovados);

const notas = [10, 5, 7, 4, 8, 3];
const carlos = [0, 1, 2, 3, 4, 5];

const aprovados = notas.filter((nota, carlos) => nota >= 7);
console.log(aprovados);
console.log(carlos);
