function outer(){
    let a=2;
     function inner(){
         console.log("a",a)
     }

     a=10;
     inner();

}

outer();