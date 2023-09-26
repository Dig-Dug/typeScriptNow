interface BusinessP {
    name: string;
    credit: number;
}
interface Identity {
    email: string;
    id: number;
}
//define intersection
type soIntersect = BusinessP & Identity;
let seeIt: soIntersect = {
    name: "Yess",
    credit: 2333,
    email: "aaaa@@@",
    id: 122,
}
console.log(seeIt);

//TypeGuards--typeof,instanceof,in

type letsSee = string | number;

function add(a: letsSee, b: letsSee) {
    if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(a + b);
        return a.concat(b);
    }
    throw new Error("WTF you doing :/ both args nums or strs!!")

}
add(660, 6);
add("TypeGuard", " in string mode");

//Type Casting
/*let input = document.querySelector('input[type="text"]') as HTMLInputElement;
console.log(input.value, "<<<<<<<<<");*/

/* let input = document.querySelector('input[type="text"]') as HTMLInputElement;
let enteredText = (input as HTMLInputElement).value; */

let input = <HTMLInputElement>document.querySelector('input[type="text"]');

console.log(input.value);


//Type Assertions--treat value as specified type

function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let n = price * discount;
    console.log(format ? `$${n}` : n)
    return format ? `$${n}` : n;
}

let test = getNetPrice(100, 0.04, true) as string;


let test1 = <number>getNetPrice(233, 233, true);
console.log(test1)

