const datastore = {
    process: function () {
        this.connect();
        this.select();
        this.disconnect();
        return true;
    }
};

function inherit(proto) {
    const F = function () { };
    F.prototype = proto;
    return new F();
}

function run() {
    const mySql = inherit(datastore);

    // implement template steps

    mySql.connect = function () {
        console.log("MySQL: connect step");
    };

    mySql.select = function () {
        console.log("MySQL: select step");
    };

    mySql.disconnect = function () {
        console.log("MySQL: disconnect step");
    };

    mySql.process();
}