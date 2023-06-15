

//Criando objeto.

let pessoa = {
    name: 'Victor Silva',
    idade: 33,
}

console.log(pessoa);
console.log(pessoa.idade);
console.log(pessoa['name']);

pessoa.birthday = '18/5/1949';

console.log(pessoa);

console.log('');

console.log('FOR, percorre o objeto todo! ');
for(let chave in pessoa){
    console.log(chave);
}
