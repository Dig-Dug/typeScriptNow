let ms: string = "jeyo loloo";
let ms1: string = "kkoikok";
let ha = document.createElement('h1')
let h3 = document.createElement('p')
ha.textContent = ms
h3.textContent = ms1
document.body.appendChild(ha)
document.body.appendChild(h3)
console.log(ms)

let n: number; //string,boolean
n = 33; //OR
let nn: number = 23;
let arr: number[]
let arr1: string[] = ["s", "1"]  //init


let free: {
    r: string;
    age: number
};
free = {
    r: "j",
    age: 23
}
//Function args & return types
let greeting: (name: string) => string;
greeting = function (name: string) {
    return `Hi ${name}`;
};
let rrr: (age: number) => number;
rrr = function (age: number) {
    return age + 12
}

console.log(greeting)

let items = [9, 2, null, "hi"];
console.log(items)

function setCounter(max = 100) {
    console.log(max, items)
}
setCounter(10)


function my() {
    document.addEventListener('click', function (event) {
        console.log(event.button, "<<--")
    });
}
document.addEventListener('click', function (event) {
    console.log(event.button, "iuuu")
});