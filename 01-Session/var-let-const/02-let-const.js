// let 
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
}

console.log(x);

//let 2 

//let ye = 4;
function something() {
	let ye = 5;
  	console.log(ye);
}

something();

console.log(typeof ye);

// const 
const number = 42;

try {
  number = 99;
} catch(err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // Note - error messages will vary depending on browser
}

console.log(number);
// expected output: 42