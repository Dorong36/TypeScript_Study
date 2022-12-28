// ✅ Object의 경우 타입을 지정할 때 두 가지 방법이 있음
var square11_1 = { color: 'black', width: 100 };
;
var square11_2 = { color: 'black', width: 100 };
;
;
var student11 = { name: 'Kim' };
var teacher11 = { name: 'Kim', age: 30 };
;
;
;
;
var shoppingList = [{ product: 'mouse', price: 79000 }, { product: 'keyboard', price: 139000 }];
var plusMinus = {
    // interface에서 지정했으니까 여기서 파라미터나 리턴타입에 타입을 지정할 필요는 없음
    plus: function (a, b) { return a + b; },
    minus: function (a, b) { return a - b; },
};
// plusMinus.plus(1,'4');  interface로 타입지정, 그 외의 타입 들어오면 당연히 오류
