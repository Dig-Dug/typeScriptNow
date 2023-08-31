let r: number = 2309;
let hexa: number = 0XA


let mos: string = "Numbaz in Console :D";

let hae = document.createElement('h1')

hae.textContent = mos

document.body.appendChild(hae)
//The Object too
let employee: {
    name: string;
    age: number;
} = {
    name: "Yessid",
    age: 34
}
//ARRAYS :/
let num = [3, "w", false];
num.push(2)
//Tuples- like array but fixed values
let skill: [string, number, boolean];
skill = ["§", 33, false];
//Enum --named constant values
/*When to use an enum
You should use an enum when you:

Have a small set of fixed values that are closely related
And these values are known at compile time.
For example, you can use an enum for the approval status:
*/
enum approvalS {
    a, b, coconut
};
const request = {
    id: 1,
    status: approvalS.coconut,
    descript: "approve it"
};
if (request.status === approvalS.coconut) {
    console.log("YOU ROCK!!!!")
}
//Any Type--------
let rs: any;
rs = 23093;
//rs.thisCompilesEvenWithoutImplementation(); //Any powers,skips type checking
//Void Type--------abscence of any type at all  

//Never type----unassignable values to "never"

//Union type--- several values in one type
let union: number | string | boolean;
union = 10, "wow!", true; //<-------- This is cool
union = "kpertpiweutipwe0";
//Type Aliases
type alias = string;
let mes: alias;
mes = "uhYeah!!!"
//string Literals --> for mouse events
let mouseEvent: 'click' | 'dbclick';
//mouseEvent = "mouseover" //<--error
mouseEvent = 'click'; //valid


console.log(r, hexa, employee, num, skill, union, mes)