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

