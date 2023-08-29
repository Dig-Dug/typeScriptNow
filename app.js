"use strict";
var ms = "jeyo loloo";
var ms1 = "kkoikok";
var ha = document.createElement('h1');
var h3 = document.createElement('p');
ha.textContent = ms;
h3.textContent = ms1;
document.body.appendChild(ha);
document.body.appendChild(h3);
console.log(ms);
var n; //string,boolean
n = 33; //OR
var nn = 23;
var arr;
var arr1 = ["s", "1"]; //init
var free;
free = {
    r: "j",
    age: 23
};
//Function args & return types
var greeting;
greeting = function (name) {
    return "Hi " + name;
};
var rrr;
rrr = function (age) {
    return age + 12;
};
console.log(greeting);
var items = [9, 2, null, "hi"];
console.log(items);
function setCounter(max) {
    if (max === void 0) { max = 100; }
    console.log(max, items);
}
setCounter(10);
function my() {
    document.addEventListener('click', function (event) {
        console.log(event.button, "<<--");
    });
}
document.addEventListener('click', function (event) {
    console.log(event.button, "iuuu");
});
