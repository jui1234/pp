const myvar = function(){
    console.log(name);//its is hoisted the declartion 
var name='jui';
console.log(name);

var name='ram';
console.log(name)
name='sita';
console.log(name)
}

const mylet=function(){
    // console.log(name);//its is not hoisted the declartion (this line will give refrence error)
let name='jui';
console.log(name)
name='ram';
console.log(name)
}

const myconst=function(){
    // console.log(name);//its is not hoisted the declartion (this line will give refrence error)
const name='jui';
// name='ram';//this line will give type error because const variable can not be reassigned
console.log(name)
}

export {
myvar,mylet,myconst
};


const Mainvarfunction=function(){
    console.log("Mainvarfunction");
    myvar();
    console.log("Mainletfunction");
    mylet();
}

export default Mainvarfunction;