console.log('Aqui funciona o HTML + JavaScript');

console.log('Aqui funciona o HTML + JavaScript');

console.log('Aqui funciona o HTML + JavaScript');

function funcao(array) {
    let acc = 0;
  
    for (let elemento of array) {
      acc += elemento;
    }
  
    return (acc / array.length);
  }
  
  console.log(funcao([4, 6, 4, 2]));