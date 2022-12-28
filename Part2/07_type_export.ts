

export type Name207 = string;


// typescript 초창기 import export 생기기전
// src로 파일 불러와 쓰다보니 타입명이 겹치는 상황 생겼음
// 변수를 숨기는 기능으로 만든게
// ✅ namespace
namespace namespace207 {
    // export는 그대로 써줌
    export type Name207_1 = string | number;
}

// 타입에 접근하려면
// namespace 객체 통해서 접근!!
let name207_2 : namespace207.Name207_1 = 'Yu';



// +) interface도 export 가능
export interface Interface207 {age : number};

// ++)) 더 옛날에는 namespace 용어 대신 module 썼음!! (기능은 동일)



// Q1
type Car = {
    wheel : number,
    model : string
}
interface Bike {
    wheel : 2,
    model : string
}
export {Car, Bike};


// Q2
type qst207_2 = (obj ?: object) => void
export {qst207_2};


// Q3 => import 파일에서