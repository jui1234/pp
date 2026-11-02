function outer(){
    let a=2;
     function inner(){
         console.log("a",a)
     }

     inner();
     a=10;
     return inner();

}

outer();