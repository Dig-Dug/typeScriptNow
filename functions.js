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
