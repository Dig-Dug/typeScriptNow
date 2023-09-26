// T capture variable type (any data) at calling time- B..C...allowed
function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let nums = [1, 22, 3, 35, 77,];
let rand = getRandomElement<number>(nums); //works without the type as well
console.log(rand, "🎠,🎠, 🎠, 🎠, 🎠");


//Generic w. multiple Types 
function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}
// OR add constraints:
function mergeConstrained<U, V extends string>(obj1: U, string: V) {
    return {
        ...obj1,
        string: "lookAtme"
    };
}
//Use it
let res = merge(
    { some: "look!!" },
    { id: 545 }

);

console.log(res);

//Prop
function prop<T, K extends keyof T>(obj: T, key: K) { return obj[key]; }
let str = prop({ name: "Yessid" }, "name");
console.log(str)


//Generic Class
//www.typescripttutorial.net/typescript-tutorial/typescript-generic-classes/

//Generic Interfaces
interface Pair<K, V> {
    key: K,
    value: V
}
let seeIT: Pair<string, number> = {
    key: "thisIS",
    value: 66
}
console.log(seeIT)

//Generic Interface describing methods!
interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
}

class List<T> implements Collection<T>{
    private items: T[] = [];

    add(o: T): void {
        this.items.push(o);
    }
    remove(o: T): void {
        let index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}
let list = new List<number>();
for (let i = 0; i < 10; i++) {
    list.add(i)
}
console.log(list)