

// ✅ type alias
// let animal : string | number | undefined; => 타입 너 복잡하다?
type Animal = string | number | undefined;
let animal06 : Animal;
animal06 = 123;
animal06 = 'hi';

// 특히 복잡한 오브젝트 타입
type Animal1 = {name : string, age : number};
let animal06_1:Animal1 = {name : 'coco', age : 10}

// type alias는 구분을 위해 🌟첫 글자를 대문자🌟로 시작하는게 일반적!!


// 잠시 const 설명
// const로 변수 선언 및 할당 시 변경 불가능
// but 오브젝트 할당시 내부 요소 값 변경은 가능
/*
const human06 = {
    name : 'Kim',
}
human06.name = 'Lee' => 이렇게하면 수정이 됨
*/

// 🔸 typescript는 object 자료 수정도 막을 수 있음!! => readonly 키워드!!
type Human06 = {
    readonly name : string // readonly => 읽기전용 => 수정불가(수정해도 오류)
};
const human06 : Human06 = {
    name : 'Kim'
}
// human06.name = 'Lee'; // => 에러문 : 읽기 전용 속성이므로 'name'에 할당할 수 없습니다.
// const로도 불가능한 오브젝트 요소 값 수정 막기 가능
// 🟥 but!!!!!
//  타입스크립트 에러는 에디터 & 터미널에서만 존재 => 실제 JS 파일에서는 바꿔짐.

// object type alias 내에서도 ? 사용가능



// ✅ type keyword 합성 가능
// 방법1 : | => or
type Name06 = string;
type Age06 = number;
type Person06 = Name06 | Age06

// 방법2 : & => and
type PositionX06 = {x : number};
type PositionY06 = {y : number};
type Position06 = PositionX06 & PositionY06;
let position06:Position06 = {x:3, y:5};
// object 타입 합치기 => 전문용어로 "object타입 extend 한다"
// 나중에 interface 할때 다시 나옴


// +) type 변수 재정의 불가능!!
// type Name06 = number; => 오류!!!




// Q1
type Type06_1 = {name : string};
type Type06_2 = {name : string};
type Type06_3 = Type06_1 & Type06_2;
let typeTest06: Type06_3 = {name : 'kim'} 
// 동일한 object 속성 &로 묶으면 그냥 하나로 들어옴


// Q2
type Quiz06_2 = {color?:string, size:number, readonly position:number[]}
let quiz06_2: Quiz06_2 = {size : 40, position : [1,2,3]};
// quiz06_2.position = [3,4]; => readonly라 오류!!


// Q3
type Quiz06_3 = {name : string, phone : number, email : string}


// Q4
type Quiz06_4_1 = {adult : boolean};
type Quiz06_4 = Quiz06_3 & Quiz06_4_1; 

