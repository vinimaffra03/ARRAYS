const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeEmLista(aluno) {
    if (lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} está com a nota média de : ${mediaAluno}`);
    } else {
        console.log('O estudante não está matriculado !');
    }
}

exibeNomeEmLista('Juliana');
exibeNomeEmLista('Vinicius');