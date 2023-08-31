var r = 2309;
var hexa = 0XA;
var mos = "Numbaz in Console :D";
var hae = document.createElement('h1');
hae.textContent = mos;
document.body.appendChild(hae);
//The Object too
var employee = {
    name: "Yessid",
    age: 34
};
//ARRAYS :/
var num = [3, "w", false];
num.push(2);
//Tuples- like array but fixed values
var skill;
skill = ["§", 33, false];
//Enum --named constant values
/*When to use an enum
You should use an enum when you:

Have a small set of fixed values that are closely related
And these values are known at compile time.
For example, you can use an enum for the approval status:
*/
var approvalS;
(function (approvalS) {
    approvalS[approvalS["a"] = 0] = "a";
    approvalS[approvalS["b"] = 1] = "b";
    approvalS[approvalS["coconut"] = 2] = "coconut";
})(approvalS || (approvalS = {}));
;
var request = {
    id: 1,
    status: approvalS.coconut,
    descript: "approve it"
};
if (request.status === approvalS.coconut) {
    console.log("YOU ROCK!!!!");
}
//Any Type--------
var rs;
rs = 23093;
//rs.thisCompilesEvenWithoutImplementation(); //Any powers,skips type checking
//Void Type--------abscence of any type at all  
//Never type----unassignable values to "never"
//Union type--- several values in one type
var union;
union = 10, "wow!", true; //<-------- This is cool
union = "kpertpiweutipwe0";
var mes;
mes = "uhYeah!!!";
//string Literals --> for mouse events
var mouseEvent;
//mouseEvent = "mouseover" //<--error
mouseEvent = 'click'; //valid
console.log(r, hexa, employee, num, skill, union, mes);
