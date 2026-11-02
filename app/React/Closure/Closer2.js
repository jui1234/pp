function outer() {
    let a = 2;

    function inner() {
        console.log("First:", a);//10
    }

    a = 10;

    function second() {
        let a = 50;
        inner();//
    }

    second();//2
}

outer();//1