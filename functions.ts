function add(a: number, b: number): void {
    console.log(a + b, "ffffff")

}
add(222, 3)
//Function Types------------
let min: (a: number, y: number) => number;
min = function (a: number, y: number) {
    console.log(a - y)
    return a - y;
} //OR

let min1: (a: number, y: number) => number =
    function (x: number, c: number) {
        console.log(x * c)
        return x * c;
    }

min(23, 3435) //-3412
min1(23, 3435) //79005

