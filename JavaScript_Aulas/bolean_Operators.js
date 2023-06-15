

const numero = 10;
//t

console.log(numero == 10);
console.log(numero > 20);

console.log("");
console.log("Quando se usa 2 iguais ele compara o conteudo, aqui é numero == 10",numero == 10);
console.log("Quando se usa 2 iguais ele compara o conteudo, aqui é numero =='10' ",numero == '10');
console.log("=== compara a variavel e o conteudo dela, == compara o conteudo somente.");
console.log("Quando se usa 2 iguais ele compara o conteudo, aqui é numero ==='10' ",numero === '10');

console.clear();

console.log("MESMA coisa para o diferente !==");
console.log(10 != 10);
console.log(10 != '10');
console.log(10 !== '10');


idade = 18;
let driverLicense = true;

const canIDrive = idade >= 18 && driverLicense === true;

console.log("Can I drive: ", canIDrive);
console.log();
// AND => &&
// OR => ||
// NOT ==> !

const cursoBom = false;
console.log("cursobom FALSE", cursoBom);
console.log("cursobom !FALSE", !cursoBom);