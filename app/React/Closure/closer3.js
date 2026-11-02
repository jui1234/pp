function outer() {
    let count = 5;

    return function inner() {
        count++;
        console.log(count);
    };
}

const result = outer();

result();//6
result();//7
result();//8