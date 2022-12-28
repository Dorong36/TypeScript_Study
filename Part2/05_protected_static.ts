

// 3️⃣ protected 
// private 붙이면 변수 class 안에서만 사용가능
// protected는 비슷하지만 조금 더 확장성 지원
// 본인 class 뿐만 아니라 extends로 확장한 class에서까지 사용 가능
// but 동일하게 class 밖인 자식 instace들에서는 사용 불가능

class User205_1 {
    private x = 10;
    protected y = 20;
}
class User205_2 extends User205_1 {
    /*
    printX(){
        console.log(this.x) // => private한 x에 접근 불가
    }
    */
   printY(){
       console.log(this.y); // => protected한 y에 접근 가능
   }
}
let uesr205_1 = new User205_2();
// uesr205_1.printX;
uesr205_1.printY();



// 4️⃣ static
// 우리가 class안에서 생성하는 변수와 함수는 모두 class로부터 생성되는 instance에 부여
// 근데 class에 직접 변수나 함수를 부여하고 싶을 때 => static!!
class User205_3 {
    // static은 자식이 아닌 부모 class에 직접 부여
    // + 자식 instance에게 물려주지 않음!!
    // but extends 하면 잘 따라옴

    // static은 다른 public, private, protected와 함께 사용 가능
    // 함께 사용하는 것들과 의미가 모두 합쳐짐
    public static x = 30;
    y = 40;
}
let user205_2 = new User205_3;
// console.log(user205_2.x); // static을 붙인 x는 출력이 안됨
console.log(User205_3.x); // 클래스에 직접 접근하면 출력 가능
console.log(user205_2.y);


// 언제 사용할 수 있을까
// constructor 말고 static으로 특정 변수 가변적으로 물려주기
class User205_4{
    static skill = 'ts'; // 자식에게 안물려주고싶음
    hello = 'Hello ' + User205_4.skill; // this말고 class명으로 접근 가능
}
let user205_4 = new User205_4();
console.log(user205_4.hello);

// 새로 생성되는 자식에서는 skill을 바꿔주고 싶다면
User205_4.skill = 'js';
// 이렇게 클래스로 접근해서 변경
let user205_5 = new User205_4();
console.log(user205_5.hello);

// 진짜 숨기고 싶다면 private, protected가 낫다!!






