function a1 () {
    this.name = "A1"
    this.age = 30;

    this.say = function () {
        console.log("User: " + this.name);
    };
}

function b1 (user) {
    this.name = user.name; 
    this.age = user.age || 20;

    this.say = function () {
        console.log("User: " + this.name + this.age);
    };
}

const c1 = new a1();
const c2 = new b1(c1);

// c1.say()
c2.say()