"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var human207 = 'Yu';
var starex = { wheel: 4, model: 'starex' };
var bike207 = { wheel: 2, model: 'bmw' };
var fun207_2 = function (obj) { console.log(obj); };
fun207_2({ name: 'yu' });
var namespace207_3;
(function (namespace207_3) {
    ;
})(namespace207_3 || (namespace207_3 = {}));
var dog1 = 'bark';
var dog2 = { name: 'paw' };
// namespace는 꼭 export한 파일거를 import해와서 써야하는건 아니다.
// 한 파일 내부에서 namespace안에 동일한 이름의 타입이나 인터페이스를 숨기고 export 하면,
// 해당 파일 내에서 namespace를 통한 접근으로 중복없이 사용할 수 있다.
