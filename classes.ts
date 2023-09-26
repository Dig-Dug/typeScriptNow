//syntactic sugar check constructor function and prototype inheritance

class P {
    fname; //same as public
    protected lname; //protected only here or in inherited classes
    private ohno; //cool right? :\

    constructor(fname: string, lname: number, ohno: number, readonly only: string
    ) {
        this.fname = fname;
        this.lname = lname;
        this.ohno = ohno;
        this.only = "only";

    }

    getName() {
        console.log(this.fname + this.lname, this.ohno, this.only, "🧑")
        return this.fname + this.lname, this.ohno, this.only, "🧑";
    }
}

let row = new P("Yessid Manuelle ", 200, 1212324, "readonly?");
row.getName()

//Getters and Setters not clear enough
//https://www.typescripttutorial.net/typescript-tutorial/typescript-getters-setters/

//Inheritance

class Pe {

    constructor(private f: string, private l: string) {
        this.f = f;
        this.l = l;

    }
    getFname(): string {
        return `${this.f} ${this.l}`;
    }
    decribe(): string {
        console.log(`This is :${this.f} ${this.l}`)
        return `This is :${this.f} ${this.l}`
    }
}
//Child class
class Po extends Pe {
    constructor(f: string, l: string, private j: string) {
        //Call constructor from parent class
        super(f, l);
    }
    getT(): string {
        console.log(`the new Po class: ${this.j}`)
        return `----the new Po class :${this.j}`;
    }
    //method override
    decribe(): string {
        return super.decribe() + `Yeah am ${this.j}`
    }
}


let tryIt = new Po("Frederik", "Lohnn", "Jess 🐧🐧🐧");
tryIt.decribe()
tryIt.getT()
console.log(tryIt.decribe())


//Static X
class Extatis {
    //Static Properties shared across instances of class
    static head: number = 103459;
    constructor(f: string) {
        Extatis.head++ //103460
    }
    //static method shared across instances of class
    public static getEx() {
        return Extatis.head;
    }

}
let ex = new Extatis("this means static 🐧🐧🐧")
console.log(Extatis.head) //103460
console.log(Extatis.getEx()) //103460

//Abstract Classes: only signature not implementation
//https://www.typescripttutorial.net/typescript-tutorial/typescript-abstract-classes/

