// 일반적인 방법보다 더 엄격한 타입지정 가능
// 타입을 만족하는 정해진 값만 들어올 수 있게~
// ✅ Literal types
var name07;
name07 = 123;
// name07 = 456; => 오류!!
// 미리 들어올 자료를 정해놓는 변수
var human07;
human07 = 'kim';
human07 = 'yu';
// human07 = 'Lee'; => 오류
// Literal types 특징
/*
    - 변수에 뭐가 들어올지 더 엄격하게 관리가능
    - 자동완성도 잘됨
*/
// 함수도 됨
function hellofun(a) {
    console.log(a);
    return 1;
}
// Q1
function rsp07(choice) {
    //            파라미터로 가위바위보만 받기              리턴으로 가위바위보만 담고있는 배열 넘기기
    return [choice];
}
// Literal type은 const 변수와 유사하게 사용 가능
// Literal type의 문제점
var data07 = {
    name: 'kim'
};
// data07.name의 값은 분명히 'kim'
function fun07(a) {
    console.log(a);
}
// fun07(data07.name) => 근데 오류가 난다?
/* 이유
    함수 파라미터의 a : 'kim'의 의미는
    - kim이라는 자료만 들어올 수 있습니다 (X)
    - kim이라는 타입만 들어올 수 있습니다 (O)
    => data07.name은 string 타입
*/
// 솔루션1 - 선언시 데이터타입 맞춰주기
var data07_1 = {
    name: 'kim'
};
// 솔루션2 - Assertion 사용
fun07(data07.name);
// ✅ 솔루션3 - as const 키워드 사용하기
var data07_2 = {
    name: 'kim'
};
// as const의 효과
// 1. object value 값을 그대로 타입으로 지정해줌
// 2. object 속성들에 모두 readonly 붙여줌 => 속성 값 바꾸면 오류남
fun07(data07_2.name);
