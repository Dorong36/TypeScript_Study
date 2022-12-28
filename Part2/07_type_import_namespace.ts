

// 에러 리포트
/*
    계속 에러가 나는거임 (울뻔함)
    에러문은 : ReferenceError: Can't find variable: exports

    서치해보니 tsconfig.json의 module 속성이 commonjs라서 발생한다는 의견
        => 아하! tsc -w 로 ts파일을 js로 변환하는 과정에서 발생한 오류였다!!
        => 그 변환 속성을 지정하는 tsconfig.json파일에서 
           module은 import, export 방법을 지정한다는 초반 강의 내용이 있었음

    module : "es2015"로 변경 => 새로운 오류 : SyntaxError: Unexpected keyword 'export'

    더 찾아보다 인프런 선생님의 답변을 찾을 수 있었는데

    "타입스크립트를 이용해서 import, export 모듈화를 진행하는 경우
    웹팩과 같은 모듈 번들러를 같이 활용해 주셔야 정상적으로 동작합니다 :)
    웹팩을 학습하신 후 아래 커밋 보시면 이해가 가실거에요! :)"
    
    라고 한다. 일단은 넘어가고, 향후 다시 살펴보는걸로(그래도 원인 해결책 찾아서 살짝 뿌듯)
*/





import {Name207} from './07_type_export';

let human207 : Name207 = 'Yu';


// 과거 ts import 문법
// ===>>> '/' 3개도 정해진 코드에 포함임
///<reference path="./07_type_export" />

// 과거에는 그래서 이렇게 접근했다!! => 지금은 하니까 오류남;;
// let human207_1 : namespace207.Name207_1 = 'kim';


// 지금은 그냥 import export 쓰면 된다!!



// Q1
import {Car, Bike} from "./07_type_export";
let starex : Car = {wheel : 4, model : 'starex'};
let bike207 : Bike = {wheel : 2, model : 'bmw'};


// Q2
import {qst207_2} from "./07_type_export";
let fun207_2 : qst207_2 = (obj) => {console.log(obj)}
fun207_2({name : 'yu'})


// Q3
namespace namespace207_2 {
    export type Dog = string;
}
namespace namespace207_3 {
    export interface Dog {name : string};
}

let dog1 : namespace207_2.Dog = 'bark';
let dog2 : namespace207_3.Dog = {name : 'paw'};

// namespace는 꼭 export한 파일거를 import해와서 써야하는건 아니다.
// 한 파일 내부에서 namespace안에 동일한 이름의 타입이나 인터페이스를 숨기고 export 하면,
// 해당 파일 내에서 namespace를 통한 접근으로 중복없이 사용할 수 있다.
