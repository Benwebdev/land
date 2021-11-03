/**
 * 
 * @param {Abstract Factory Example}  
 * @param {*} name, attackstat 
 */

function item(name, attackstat, rest){
    this.name = name; 
    this.attackstat = attackstat
    this.rest = rest

    this.say = function () {
        const obj = {
            type: "Employee",
            name: name, 
            stats: {
                attack: attackstat
            },
            ...rest
        }

        console.log(obj);
    };
}

function itemFactory(){
    this.create = (name, attackstat, rest) => {
        return new item(name, attackstat, rest)
    }
}

const makeItems = () => {
    const items = []; 
    const ItemFactory = new itemFactory(); 
    items.push(ItemFactory.create("BIG CHONGA", 19000, { number: 100, number1: 10}))
    items.push(ItemFactory.create("BIG CHONGA 2.0", 19000, { number: 100, number1: 10}))
    items.push(ItemFactory.create("BIG CHONGA 3.0", 19000, { number: 100, number1: 10}))
    items.map((item) => {
        item.say()
    })

}

makeItems()



function Employee(name) {
    this.name = name;

    this.say = function () {
        const obj = {
            type: "Employee",
            name: name
        }

        console.log(obj);
    };
}

function EmployeeFactory() {

    this.create = function (name) {
        return new Employee(name);
    };
}

function Vendor(name) {
    this.name = name;

    this.say = function () {
        const obj = {
            type: "Vendor",
            name: name
        }

        console.log(obj);
    };
}

function VendorFactory() {

    this.create = function (name) {
        return new Vendor(name);
    };
}

function run() {
    const persons = [];
    const employeeFactory = new EmployeeFactory();
    const vendorFactory = new VendorFactory();

    persons.push(employeeFactory.create("Joan DiSilva"));
    persons.push(employeeFactory.create("Tim O'Neill"));
    persons.push(vendorFactory.create("Gerald Watson"));
    persons.push(vendorFactory.create("Nicole McNight"));

    for (let i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }
}

// run()