var x = 1;
//var x;
if (x === 1) {
  var x = 2;
  console.log(x);
}

console.log(x);

// with function
function do_something() {
    console.log(bar); // undefined
    var bar = 111;
    console.log(bar); // 111
}

// final example
var x = 0;  // x is declared within file scope, then assigned a value of 0

console.log(typeof z); // undefined, since z doesn't exist yet

function a() { // when a is called,
  var y = 2;   // y is declared within scope of function a, then assigned a value of 2

  console.log(x, y);   // 0 2 

  function b() {       // when b is called
    x = 3;  // assigns 3 to existing file scoped x, doesn't create a new global var
    y = 4;  // assigns 4 to existing outer y, doesn't create a new global var
    z = 5;  // creates a new global variable z and assigns a value of 5. 
  }         // (Throws a ReferenceError in strict mode.)

  b();     // calling b creates z as a global variable
  console.log(x, y, z);  // 3 4 5
}

a();                   // calling a also calls b
console.log(x, z);     // 3 5
console.log(typeof y); // undefined as y is local to function a