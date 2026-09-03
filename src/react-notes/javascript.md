var ,let and const 
wht is hoisting ?
>javascript know about the variable declartion is called hosting. that is why even before we call its declare  var it give us undefined and before we call let and const it give us reference error 

Wht is var?
>ist is hosted 
>it can be redeclared
>it is functioanl scope
>can be reassigne

example:var name='jui'
var name='shubham'

Function scope means:

A variable declared inside a function can be accessed anywhere inside that function, but not outside the function.
function test() {
    var age = 25;

    console.log(age); // ✅
}

console.log(age); // ❌