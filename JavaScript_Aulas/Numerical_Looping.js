

const input = require('readline-sync');


for(let i = 0; i < 4; i++){
    console.log("looping", i)
}
console.log("")

for(let i = 10; i <= 12; i++){
    console.log("looping", i)
}
console.log("")

for(let i = 12; i > 8; i--){
    console.log("looping", i)
}
console.log("")
console.clear();

let nota;
let soma = 0;
n1 = 0;

for(let i = 1; i <= 3; i++){ 
    nota = Number(input.question(`Qual a nota ${i} do aluno: `));
    soma = soma + nota;
    
    // POSSO USAR assim
    //console.log(`testando: `, n1++) 
    console.log(`testando: `, n1 = n1 + 1)
   
}

console.log(`A soma total e: `, soma)
console.log(`A media do aluno e ${soma / 3}.`);