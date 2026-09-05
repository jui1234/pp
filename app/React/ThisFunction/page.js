const person={
    name:'jui',

    sayName: function(){
       console.log("this-",this.name)
       return this.name;
    }
}

console.log("ans using normal function",person.sayName())

// const personArrow={
//     name:'arrow jui',

//     sayName:()=>{
//         console.log("this--arrow",this.name)/// bcz its taking this from its lexical scope and and right now there is no lexical scope here so we are getting it as undefined 
//         return this.name;
//     }
// }

// console.log("ans uisng arrow function",personArrow.sayName())

const personArrowWork={
    name:' lexixal arrow jui',
      outerlexicalScope:function(){
          const  sayName =  () =>{
            console.log("this-arrow where lexical scope work",this.name)/// here this arrow function work bcz the there is one more function and its takig lexical scope from it thats why 
           }
         sayName();
         return this.name;
     }

     
}

export default function ThisFunction() {
    return (
        <div>
            Check the browser console.
        </div>
    );
}


console.log("ans where tgis with the help of lexical scoop work",personArrowWork.outerlexicalScope())