const a1 = function (name) {
    this.name = name;
}

a1.prototype = {
    testthis: () => {
        return this.name;
    }
}

const Mortgage = function (name) {
    this.name = name;
}

Mortgage.prototype = {

    applyFor: function (amount) {
        // access multiple subsystems...
        const result = "approved";
        return this.name + " has been " + result +
            " for a " + amount + " mortgage";
    }
}


function run() {
    const mortgage = new Mortgage("Joan Templeton");
    const result = mortgage.applyFor("$100,000");

    console.log(result);
}

run()