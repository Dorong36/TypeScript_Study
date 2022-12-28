

// ts는 객체지향 언어같은 문법도 지원
// public private protected static

class User204 {
    // 변수들 필드에서 만드나 constructor로 만드나 결과는 같음
    // 다만 constructor는 파라미터 받기 가능

    // 1️⃣ 필드값에 public 붙이면
    // 외부에서 접근 가능
    // 모든 자식들이 이용가능
    public name : string;
    // 생략가능
    fullName : string;

    // 2️⃣ private 붙이면
    private familyName : string = 'Yu';
    // 완전 수정 불가는 아님 => class 안에서는 가능


    constructor(name : string){
        this.name = name;
        this.fullName = this.familyName + name; // class 내부에서는 private 접근 가능
    }

    // 1️⃣ public 함수
    public fun204(){
        console.log('hi')
    }

    // 2️⃣-🔸 private값 변경하는 함수
    changeFN(newName : string){
        this.familyName = newName;
        this.fullName = this.familyName + this.name;
    }
}
let user204_1 = new User204('dy');

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




class Person204 {
    // 파라미터에 public 키워드를 붙여 'this.' 생략하기
    constructor(public name : string){ // 들어오는 파라미터 자식의 name 속성에 기입한다는 의미
    }
}
let person204 = new Person204('Park');
console.log(person204.name);