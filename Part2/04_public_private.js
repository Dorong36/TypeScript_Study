// ts는 객체지향 언어같은 문법도 지원
// public private protected static
var User204 = /** @class */ (function () {
    // 완전 수정 불가는 아님 => class 안에서는 가능
    function User204(name) {
        // 2️⃣ private 붙이면
        this.familyName = 'Yu';
        this.name = name;
        this.fullName = this.familyName + name; // class 내부에서는 private 접근 가능
    }
    // 1️⃣ public 함수
    User204.prototype.fun204 = function () {
        console.log('hi');
    };
    // 2️⃣-🔸 private값 변경하는 함수
    User204.prototype.changeFN = function (newName) {
        this.familyName = newName;
        this.fullName = this.familyName + this.name;
    };
    return User204;
}());
var user204_1 = new User204('dy');
// 1️⃣ public
user204_1.name = 'hy'; // 접근 가능
// 사실 public은 안써도 기본값(생략 가능)
// 2️⃣ private
// user204_1.familyName = 'kim' => 오류(외부에서는 접근불가)
console.log(user204_1.fullName);
// console.log(user204_1.familyName); // 막상 쳐보면 조회는 가능
// 2️⃣-🔸외부에서 반드시 접근해야만 한다면? => 클래스 내부에 값 변경 함수를 제작
user204_1.changeFN('Lee');
console.log(user204_1.fullName);
var Person204 = /** @class */ (function () {
    // 파라미터에 public 키워드를 붙여 'this.' 생략하기
    function Person204(name) {
        this.name = name;
    }
    return Person204;
}());
var person204 = new Person204('Park');
console.log(person204.name);
