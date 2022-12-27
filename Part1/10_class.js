var Person10 = /** @class */ (function () {
    function Person10(name, age) {
        this.data = 123; // class 필드값 => constructor와 똑같은 역할
        this.name = name;
        this.age = age;
    }
    Person10.prototype.sayHi = function (name) {
        console.log('hi, ' + name);
    };
    return Person10;
}());
var person10 = new Person10('Yu', 26);
// 당연히 디폴트 파라미터, 레스트 파리미터 다 가능
console.log(person10.data);
person10.sayHi('Yu');
// Q1
var Car10 = /** @class */ (function () {
    function Car10(model, price) {
        this.model = model;
        this.price = price;
    }
    Car10.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car10;
}());
var car10 = new Car10('sonata', 3000);
console.log(car10);
console.log(car10.tax());
// Q2
var Word10 = /** @class */ (function () {
    function Word10() {
        var datas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            datas[_i] = arguments[_i];
        }
        var nums = [];
        var strs = [];
        datas.forEach(function (data) {
            if (typeof data === 'number') {
                nums.push(data);
            }
            else {
                strs.push(data);
            }
        });
        this.num = nums;
        this.str = strs;
    }
    return Word10;
}());
var words = new Word10(1, 'a', 2, 'bc', 345);
console.log(words.num);
console.log(words.str);
