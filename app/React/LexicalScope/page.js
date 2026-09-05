let lexicalScope=function(){
    let x=10;

    function outer(){
        console.log(x);
    }

    function inner(){
        let x=20;
        outer();
    }

    inner();
}

export default lexicalScope;

console.log("lexicalScope",lexicalScope())