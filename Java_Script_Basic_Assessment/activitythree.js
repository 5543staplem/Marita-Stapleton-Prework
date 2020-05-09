const nameList = ['Renu', 'Lisa', 'Cierra'];
let counter = 0;

while (counter < 3){
const greeting = prompt('enter a name');
nameList.push(greeting);

  console.log(counter);  
  counter++;
}
console.log(nameList );
