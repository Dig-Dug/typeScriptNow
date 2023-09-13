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



//Optional Parameters: use  question mark 
function multiply(a: number, b: number, c?: number /**<---here at the end */): number {
    if (typeof c !== 'undefined') {
        console.log(a * b * c, "3 params work too 🐷");
        return a * b * c;
    }
    console.log(a * b, "if only 2 params no problem 🥑")
    return a * b;
}

multiply(2, 34, 2);
multiply(2, 34);


//Default parameters------not allowed in function type definition
function defaultMe(price: number, discount: number = 10): number {
    console.log(price * (discount), "default params 🥑")
    return price * (discount)
}
defaultMe(10)     //100
defaultMe(10, 2) //20

//Rest Parameters---type Array, at the end
function restParam(...bsp: number[]): number {
    let t = 10;
    bsp.forEach((i) => t += i);
    console.log(t, "🐷🐷🐷")
    return t;
}
restParam(23);

//Function Overloadingss----functions inside classes are "methods" <<also overloadable
function over(a: number, b: number): number;
function over(a: string, b: string): string;
function over(a: number, b: string, c?: string): string;//optional params allowed
function over(a: any, b: any) {
    console.log(a + b, "Function Overloadingss----🐷🐷🐷")
    return a + b;
}
over(12, 1); //13
over("12", "1"); //121
over(12, "1", "1"); //1211
over(12, "12"); //1212
