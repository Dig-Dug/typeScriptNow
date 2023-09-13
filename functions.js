function add(a, b) {
    console.log(a + b, "ffffff");
}
add(222, 3);
//Function Types------------
var min;
min = function (a, y) {
    console.log(a - y);
    return a - y;
}; //OR
var min1 = function (x, c) {
    console.log(x * c);
    return x * c;
};
min(23, 3435); //-3412
min1(23, 3435); //79005
//Optional Parameters: use  question mark 
function multiply(a, b, c /**<---here at the end */) {
    if (typeof c !== 'undefined') {
        console.log(a * b * c, "3 params work too 🐷");
        return a * b * c;
    }
    console.log(a * b, "if only 2 params no problem 🥑");
    return a * b;
}
multiply(2, 34, 2);
multiply(2, 34);
//Default parameters------not allowed in function type definition
function defaultMe(price, discount) {
    if (discount === void 0) { discount = 10; }
    console.log(price * (discount), "default params 🥑");
    return price * (discount);
}
defaultMe(10); //100
defaultMe(10, 2); //20
//Rest Parameters---type Array, at the end
function restParam() {
    var bsp = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        bsp[_i] = arguments[_i];
    }
    var t = 10;
    bsp.forEach(function (i) { return t += i; });
    console.log(t, "🐷🐷🐷");
    return t;
}
restParam(23);
function over(a, b) {
    console.log(a + b, "Function Overloadingss----🐷🐷🐷");
    return a + b;
}
over(12, 1);
over("12", "1");
over(12, "12");
