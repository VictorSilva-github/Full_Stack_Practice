

//criando array
let arr = ['Victor', 26, 1.77, true];

console.log(arr);

//acessing element from array
console.log('');
console.log('First element/indice: ', arr[0]);
console.log('Second element/indice: ', arr[1]);
console.log('Third element/indice: ', arr[2]);
console.log('Forth element/indice: ', arr[3]);

/// how to get the array length
console.log('');
console.log('Array Lenght: ', arr.length)

//run array with FOR
console.log('RUN ARRAY WITH FOR');
for(let i = 0; i < arr.length; i++){
    console.log("Using FOR: ", arr[i]);
}

console.log('OS ELEMENTOS');
for(let elemento of arr){
    console.log(elemento);
    //console.log(arr); aqui ele vai printar todo o conteudo da array 4x
}

console.log('Indice do ARRAY');
for(let indice in arr){
    console.log("Mostra o indice>",indice, "////// e aqui"," Mostra os elementos em cada indice> ", arr[indice]);
}

