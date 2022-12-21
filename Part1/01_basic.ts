let name1 = 'Kim';
// 이렇게 써도 브라우저가 못읽음
// => 브라우저는 JS만 읽을 수 있음!! => JS로 변환해야함

// 터미널 켜서 => tsc -w
// 입력해두면 자동으로 변환해서 복사

// ✅ tsconfig.json은 ts => js 컴파일(변환)시 옵션 설정 가능
/* tsconfig 구성요소
- target : JS 버전 => default는 es5 / 최신버전 원하면 es2016 혹은 esnext
- module : JS 파일간 import 문법을 구현할 때 어떤 문법을 쓸지 정하는 곳
         => default는 commonjs => require문법 사용
         => es2015, esnext는 import 문법 사용
- 어느정도 IE 호환성을 원한다면 es5, commomjs 사용이 일반적
    => but 정말 신버전 문법들(bigint 타입 등)은 esnext로 버전 올려줘야함

- 추가로 넣을만한 것들
    -  "noImplicitAny": true
        => any라는 타입이 의도치않게 발생할 경우 에러 띄워주는 여부
    - "strictNullChecks": true
        => null, undefined 타입에 이상한 조작을 가하면 에러 띄워주는 여부


- 추가적 기타 항목들 포함 예시
{
 "compilerOptions": {

  "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
  "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
  "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지 
  "checkJs": true, // 일반 js 파일에서도 에러체크 여부 
  "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
  "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
  "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
  "outDir": "./", //js파일 아웃풋 경로바꾸기
  "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
  "removeComments": true, //컴파일시 주석제거 

  "strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
  "noImplicitAny": true, //any타입 금지 여부
  "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기 
  "strictFunctionTypes": true, //함수파라미터 타입체크 강하게 
  "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
  "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
  "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기

  "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
  "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
  "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기 
  "noFallthroughCasesInSwitch": true, //switch문 이상하면 에러내기 
 }
}
*/




// ✅ 간단한 변수 타입지정 가능
let name2 :string = 'yu';
// name2 = 3;  => 타입 오류남!!
// 변수 타입
// => string number boolean null undefined bigint [] {} 등 다 가능
// 배열
let names :string[] = ['Park', 'Lee']
// object
let human :{name? : string} = {name : 'Kim'}; // ?는 안들어 올 수도 있다는 의미


// ✅ Union type => 다양한 타입 들어올 수 있게 하기
let name3 : string | number = 'kim';
name3 = 123;


// ✅ Type alias => 타입이 복잡해진다? 변수에 담아서 쓰자
type Mytype = string[] | number[]; // type alias 대문자로 시작해 구분되게 하는게 일반적
let name4 : Mytype = [1,2,3];


// ✅ 함수에 타입지정 가능
function fun1(x : number) :number{ // 숫자 파라미터 받아서 숫자 리턴 의미
    return x*2;
}
// fun1('이렇게 하면 오류')


// ✅ Array에 쓸 수 있는 tuple 타입
type Member = [number, boolean]; // 무조건 첫 번째는 number, 두 번째는 boolean
let join : Member = [1, true];

// ✅ Object 상세
type Info = {
    // name? : string // 이렇게 하면 name이라는 키 외에는 아무것도 못들어옴
    [key : string] : string
    // [key : ]모든 object 속성 의미
    // 글자로 된 모든 object 속성의 타입은 string 의미
}
let memberInfo : Info = {name : 'kim', age : '12'}


// ✅ Class 타입지정 가능
class User {
    param : string; // this에 찍힐 변수를 밖에서 먼저 타입과 함께 만들어줘야함
    constructor(param : string){
        this.param = param;
    }
}
