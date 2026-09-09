const ThisFunctionVSArrowFunction = () => {

    // =========================
    // REGULAR FUNCTION
    // =========================

    function add(a, b) {
        return a + b;
    }

    console.log("Regular function:", add(2, 3));


    // =========================
    // THIS WITH REGULAR FUNCTION
    // =========================

    const ownThis = {
        nameStr: "jui",

        printit: function() {
            console.log("name:", this.nameStr);
        }
    };

    ownThis.printit();


    // =========================
    // ARROW FUNCTION
    // =========================

    const arrowadd = (a, b) => {
        return a + b;
    };

    console.log("Arrow function:", arrowadd(2, 3));
};

export default ThisFunctionVSArrowFunction;