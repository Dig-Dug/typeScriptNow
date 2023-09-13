function getFullName(person) {
    if (person.optional) {
        console.log("optional too  " + ("" + person.optional));
    }
    return person.firstName + " " + person.lastName;
}
var john = {
    firstName: 'JUUUU',
    lastName: 'Doe',
    optional: 223
};
console.log(getFullName(john)); //optional too 223 JUUUU Doe
var format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format('hi', true)); //HI
var Moo = /** @class */ (function () {
    function Moo(f, ggg) {
        this.f = f;
        this.ggg = ggg;
    }
    Moo.prototype.toJSON = function () {
        return JSON.stringify(this);
    };
    return Moo;
}());
var go = new Moo("cow", "aslopü");
console.log(go.toJSON(), "<<<<<<<<<<<<<<<<<<<<<<");
