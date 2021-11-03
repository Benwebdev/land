export function abstractFactoryTest () {
    function Employee(name) {
        this.name = name;
    
        this.say = function () {
            console.log("I am employee " + name);
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
            console.log("I am vendor " + name);
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

    run()
}

