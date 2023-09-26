var seeIt = {
    name: "Yess",
    credit: 2333,
    email: "aaaa@@@",
    id: 122
};
console.log(seeIt);
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(a + b);
        return a.concat(b);
    }
    throw new Error("WTF you doing :/ both args nums or strs!!");
}
add(660, 6);
add("TypeGuard", " in string mode");
//Type Casting
/*let input = document.querySelector('input[type="text"]') as HTMLInputElement;
console.log(input.value, "<<<<<<<<<");*/
/* let input = document.querySelector('input[type="text"]') as HTMLInputElement;
let enteredText = (input as HTMLInputElement).value; */
var input = document.querySelector('input[type="text"]');
console.log(input.value);
//Type Assertions--treat value as specified type
function getNetPrice(price, discount, format) {
    var n = price * discount;
    console.log(format ? "$" + n : n);
    return format ? "$" + n : n;
}
var test = getNetPrice(100, 0.04, true);
var test1 = getNetPrice(233, 233, true);
console.log(test1);
