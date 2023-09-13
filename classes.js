//syntactic sugar check constructor function and prototype inheritance
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//Getters and Setters not clear enough
//https://www.typescripttutorial.net/typescript-tutorial/typescript-getters-setters/
//Inheritance
var Pe = /** @class */ (function () {
    function Pe(f, l) {
        this.f = f;
        this.l = l;
        this.f = f;
        this.l = l;
    }
    Pe.prototype.getFname = function () {
        return this.f + " " + this.l;
    };
    Pe.prototype.decribe = function () {
        console.log("This is :" + this.f + " " + this.l);
        return "This is :" + this.f + " " + this.l;
    };
    return Pe;
}());
//Child class
var Po = /** @class */ (function (_super) {
    __extends(Po, _super);
    function Po(f, l, j) {
        var _this = 
        //Call constructor from parent class
        _super.call(this, f, l) || this;
        _this.j = j;
        return _this;
    }
    Po.prototype.getT = function () {
        console.log("the new Po class: " + this.j);
        return "----the new Po class :" + this.j;
    };
    //method override
    Po.prototype.decribe = function () {
        return _super.prototype.decribe.call(this) + ("Yeah am " + this.j);
    };
    return Po;
}(Pe));
var tryIt = new Po("Frederik", "Lohnn", "Jess 🐧🐧🐧");
tryIt.decribe();
tryIt.getT();
console.log(tryIt.decribe());
//Static X
var Extatis = /** @class */ (function () {
    function Extatis(f) {
        Extatis.head++; //103460
    }
    //static method shared across instances of class
    Extatis.getEx = function () {
        return Extatis.head;
    };
    //Static Properties shared across instances of class
    Extatis.head = 103459;
    return Extatis;
}());
var ex = new Extatis("this means static 🐧🐧🐧");
console.log(Extatis.head); //103460
console.log(Extatis.getEx()); //103460
//Abstract Classes: only signature not implementation 
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.compensationStatement = function () {
        return this.fullName + " makes " + this.getSalary() + " a month.";
    };
    return Employee;
}());
//Inheriting class
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(firstName, lastName, salary) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.salary = salary;
        return _this;
    }
    FullTimeEmployee.prototype.getSalary = function () {
        return this.salary;
    };
    return FullTimeEmployee;
}(Employee));
var Contractor = /** @class */ (function (_super) {
    __extends(Contractor, _super);
    function Contractor(firstName, lastName, rate, hours) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.rate = rate;
        _this.hours = hours;
        return _this;
    }
    Contractor.prototype.getSalary = function () {
        return this.rate * this.hours;
    };
    return Contractor;
}(Employee));
var john = new FullTimeEmployee('John', 'Doe', 12000);
var jane = new Contractor('Jane', 'Doe', 100, 160);
console.log(john.compensationStatement());
console.log(jane.compensationStatement());
