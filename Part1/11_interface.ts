

// ✅ Object의 경우 타입을 지정할 때 두 가지 방법이 있음

// 1. type
type Square11_1 = {color : string, width : number};
let square11_1 : Square11_1 = {color : 'black', width : 100};

// 2. interface    => class 문법과 비슷
interface Square11_2 {color : string, width : number};
let square11_2 : Square11_2 = {color : 'black', width : 100};


// 🔸 interface의 장점 => extends로 복사 가능
interface Student11 {name : string};
interface Teacher11 extends Student11 { // extends로 Student interface의 name 속성 가져옴
    // name : number; => 오류!!
    // extends로 가져온 속성을 여기서 다시 정의할 수는 없음!!
    age : number
};
let student11 : Student11 = {name : 'Kim'};
let teacher11 : Teacher11 = {name : 'Kim', age : 30};


// 🔸 & 기호도 유사한 기능 가능
type Animal11 = {name : string};
type Cat11 = {color : string} & Animal11; // &로 두 가지 타입속성을 모두 만족시키게 함
type Cat11_1 = {color : string} & Teacher11; // interface도 묶을 수 있음

// & 사용에서 속성에 중복이 일어난다면?
type Dog11 = {name : number} & Animal11; // 오류 발생하지 않음! => 근데 나기는 하는데 안알려주는거임
// let dog : Dog11 = {name : 'choco'}; 선언해보면 name속성이 'never'로 지정되어 있음을 확인가능
// &는 단순히 합치는 게 아니라 모든 사항을 동시에 만족해야 함을 의미
// 여기서는 name의 타입이 number, string을 동시에 만족해야하는데, 그럴 수 없으므로 'never'


// ✅ type interface 차이점
// 🔸 interface는 중복선언 가능
interface Student11_1 { name : string };
interface Student11_1 { age : number };
interface Student11_1 { married : boolean };
// 갱신이 아니라 기존 내용에 속성이 계속 추가됨
// 고로 최종적 형태는 => interface Student11_1 = {name : string, age : number, married : boolean}

// 🔸 type은 중복선언이 불가능
type Animal11_1 = {name : string};
// type Animal11_1 = {age : number}; => 오류!!!

// 여기서 드러나는 interface의 장점
// 외부 라이브러리 경우 interface사용이 많음 => 속성 추가 등 커스터마이징이 유용!!




// Q1
interface Product11_1 {brand : string, serialNumber : number, model : string[]}

// Q2
interface Product11_2 {product : string, price : number};
let shoppingList : Product11_2[] = [{product : 'mouse', price : 79000}, {product : 'keyboard', price : 139000}]

// Q3
interface Product11_3 extends Product11_2 {
    card : boolean
}

// Q4
interface Quest11_4 {
    plus : (a:number, b : number) => number,
    minus : (a:number, b : number) => number
}
let plusMinus : Quest11_4 = {
    // interface에서 지정했으니까 여기서 파라미터나 리턴타입에 타입을 지정할 필요는 없음
    plus : (a,b) => {return a+b;}, 
    minus : (a,b) => {return a-b;},
}
// plusMinus.plus(1,'4');  interface로 타입지정, 그 외의 타입 들어오면 당연히 오류
