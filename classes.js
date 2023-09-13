//syntactic sugar check constructor function and prototype inheritance
var P = /** @class */ (function () {
    function P(fname, lname, ohno, only) {
        this.only = only;
        this.fname = fname;
        this.lname = lname;
        this.ohno = ohno;
        this.only = "only";
    }
    P.prototype.getName = function () {
        console.log(this.fname + this.lname, this.ohno, this.only, "🧑");
        return this.fname + this.lname, this.ohno, this.only, "🧑";
    };
    return P;
}());
var row = new P("Yessid Manuelle ", 200, 1212324, "readonly?");
row.getName();
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 200) {
                throw new Error('The age is invalid');
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getFullName = function () {
        console.log(this._firstName, this._lastName);
        return this._firstName + " " + this._lastName;
    };
    return Person;
}());
var person = new Person();
person.age = 10;
console.log(person.age, ".......................");
