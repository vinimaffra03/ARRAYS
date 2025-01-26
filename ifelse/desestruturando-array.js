const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeEmLista(aluno) {
    if (lista[0].includes(aluno)) {
        const [alunos, medias] = lista;
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        console.log(`${aluno} está com a nota média de : ${mediaAluno}`);
    } else {
        console.log('O estudante não está matriculado !');
    }
}

exibeNomeEmLista('Juliana');
exibeNomeEmLista('Vinicius');