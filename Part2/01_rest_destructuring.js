// ✅ Rest parameter 타입지정
function fun201() {
    var datas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        datas[_i] = arguments[_i];
    }
    // rest parameter는 넣어준 값들을 배열로 받아오므로 타입을 배열로 지정
    console.log(datas);
}
fun201(1, 2, 3, 34, 5, 56, 7);
// ✅ Destructuring 타입지정
function funs201_1(_a) {
    var name = _a.name, age = _a.age;
    console.log(name, age);
}
var obj201 = { name: 'yu', age: 26 };
funs201_1(obj201);
// rest parameter, destructuring 개념 복습!!
// Q1
function max201() {
    var datas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        datas[_i] = arguments[_i];
    }
    var maxNum = 0; // 이렇게 지역적으로 쓰고 바로 할당해서 타입이 명확하면 굳이 수동으로 안하고 자동으로 하게 두는 듯!!
    datas.forEach(function (data) {
        if (maxNum < data) {
            maxNum = data;
        }
    });
    return maxNum;
}
console.log(max201(1, 2, 4, 6, 9, 34));
function quest201_2(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
var obj201_2 = { user: 'yu', comment: [1, 2, 3], admin: true };
quest201_2(obj201_2);
// Q3
function quest201_3(_a) {
    var alc = _a[0], kind = _a[1], onsale = _a[2];
    console.log(alc, kind, onsale);
}
quest201_3([40, 'wine', false]);
