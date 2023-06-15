

const input = require('readline-sync');
const number_random = 10;


let pergunta = Number(input.question('Qual numero voce escholhe: '));

console.log(pergunta, typeof pergunta);

console.log("");


while(pergunta !== number_random){
    console.log("Voce ERROU! tente novamente....");
    
    pergunta = Number(input.question('Qual numero voce escholhe: '));
}
    //SE VOCE ACERTAR ELE SAI DO WHILE E PRINT O TXT ABAIXO
    console.log("Voce Acertou!");


//Poderia ser usado um IF ELSE
/* NAO SERIA UM LOOP
if(pergunta === number_random){
    console.log("Voce Acertou!");

} else{
    console.log("Voce ERROU!");
}
*/


//npm install readline-sync
//npm install -g readline-sync