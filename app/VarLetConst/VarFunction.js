let VarFunction=()=>{
    console.log(num)
    var num=10;
    if(num===10){
        var num=20;

    }

    num=50;

    return num;
}

console.log(VarFunction())