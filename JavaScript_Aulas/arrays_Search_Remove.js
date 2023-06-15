

const arr1 = [30, 12, 45, 34, 29];
let arr2 = [];
//Fatiamento: slice

console.log(arr1.slice(0,4));
console.log(arr1.slice(3));


///PUSH
console.log("");
console.log("Valor 0 - Antes de adicionar no arr2: ", arr2);
arr2.push(10, 20, 51, 78, 63, 11, 2, 23);
arr2.push(150);
console.log("Depois de adicionar no arr2: ", arr2);


//Unshift
console.log("");
console.log("Antes de adicionar unshift no arr2: ", arr2);
arr2.unshift(1);
console.log("Depois de adicionar unshift no arr2: ", arr2);

console.clear();


//POP remove o ultimo | shift remove o primeiro 
console.log("");
console.log("Antes de adicionar POP no arr2: ", arr2);
const RemovedItem1 = arr2.pop()
const RemovedItem2 = arr2.pop()
console.log("REMOVE 2 - Depois de adicionar POP no arr2: ", arr2);
console.log("Os elementos removidos foram: ", RemovedItem1, RemovedItem2);

//concatenando 2 arrays ou mais: CONCAT
console.log("");
console.log("Arrays juntos, array 2 + array 1");
console.log(arr2.concat(arr1));