var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// T capture variable type (any data) at calling time- B..C...allowed
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var nums = [1, 22, 3, 35, 77,];
var rand = getRandomElement(nums); //works without the type as well
console.log(rand, "🎠,🎠, 🎠, 🎠, 🎠");
//Generic w. multiple Types 
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
// OR add constraints:
function mergeConstrained(obj1, string) {
    return __assign(__assign({}, obj1), { string: "lookAtme" });
}
//Use it
var res = merge({ some: "look!!" }, { id: 545 });
console.log(res);
//Prop
function prop(obj, key) { return obj[key]; }
var str = prop({ name: "Yessid" }, "name");
console.log(str);
var seeIT = {
    key: "thisIS",
    value: 66
};
console.log(seeIT);
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (o) {
        this.items.push(o);
    };
    List.prototype.remove = function (o) {
        var index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    };
    return List;
}());
var list = new List();
for (var i = 0; i < 10; i++) {
    list.add(i);
}
console.log(list);
