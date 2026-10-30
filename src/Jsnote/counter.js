function Counter() {
    let count = 0;

    return function () {
        count = count + 2;
        return count;
    };
}

const counter1 = Counter();
const counter2 = Counter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter1());


// counter1() → 2



// counter1() → 4



// counter2() → 2 (new independent closure!)



// counter1() → 6