// ✅ Union type
var unionVar = 123; // 괄호 치는건 선택사항
unionVar = 'hello';
// array / object
var unionMem = [1, 2, '3']; // 여기는 괄호 필수
// let unionMem : number | string[] = [1,2,'3']; <= 이렇게 해버리면 변수가 숫자 or 문자배열로 지정됨
var unionObj = { a: 'hello' };
// ✅ Any
var anyVar;
anyVar = 'string';
anyVar = 123;
// 편해 보이지만 사실 typescript의 의미가 없어짐
// 일반 JS 변수같아짐
// 타입관련 버그가 나와도 짚어주지 못함
// 대체 => unknown
// ✅ Unknown
var unknownVar;
unknownVar = 'string';
unknownVar = 345;
// 모든 자료형 허용
// but any보다는 안전
var stringVar;
// stringVar = unknownVar; => 오류
// 타입이 지정된 다른 변수에 할당 불가능
// +) any는 다른 타입이 지정된 변수에도 들어갈 수 있음
// ✅ 타입스크립트의 엄격함에 대해
// 1. 
var notNum;
// notNum + 3; // 오류
// 간단한 수학 연산도 타입 맞아야함
var unionAge;
// 2. 
// unionAge + 1; // 오류
// 왜? => Union 타입은 새로운 타입을 만드는 것으로,
//      JS에서 String에도, number에도 +연산이 가능할지라도
//      union타입에서는 안됨!!
// 3. 
var unknownAge = 1;
// unknownAge + 1; => 오류
// unknown 변수에 숫자를 할당하더라도 숫자타입은 아니기때문에 연산은 불가능
// Q1
var qUser = 'kim';
var qAge = undefined;
var qMarried = false;
var james = [qUser, qAge, qMarried];
// Q2
var school = {
    score: [70, 80, 90],
    teacher: 'Kim',
    friend: 'Lee'
};
school.score[4] = false;
school.friend = ['Lee', school.teacher];
