const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];


// iniciando em index 0 do array e final em length/2 do array completo lista de estudantes para atribuir metade a variavel
const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2);

// pegando o restante
const sala2 = listaEstudantes.slice(listaEstudantes.length/2);

console.log(sala1);
console.log(sala2);

