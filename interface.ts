interface Person {
    firstName: string;
    lastName: string;
    optional?: number
}

function getFullName(person: Person) {
    if (person.optional) {
        console.log("optional too  " + `${person.optional}`)
    }
    return `${person.firstName} ${person.lastName}`;
}

let john = {
    firstName: 'JUUUU',
    lastName: 'Doe',
    optional: 223
};

console.log(getFullName(john)); //optional too 223 JUUUU Doe


//Function types
interface StringFormat {
    (str: string, isUpper: boolean): string
}
let format: StringFormat;

format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format('hi', true)); //HI

//Class Types
interface Jeison {
    toJSON(): string
}

class Moo implements Jeison {
    constructor(private f: string, private ggg: string) {

    }
    toJSON(): string {
        return JSON.stringify(this);
    }
}
let go = new Moo("cow", "aslopü");
console.log(go.toJSON(), "<<<<<<<<<<<<<<<<<<<<<<");



