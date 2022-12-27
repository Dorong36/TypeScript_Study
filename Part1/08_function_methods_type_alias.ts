

// ✅ Type alias에 함수 type 저장해서 쓰기
// 🔸 1. 함수 타입은 꼭 화살표함수 사용!!
type Funtype08 = (a : string) => number;
// 무조건 string 파라미터, number 리턴
// 화살표함수에서 실행문 부분이 return문 하나면 {}와 return 키워드 생략 가능과 비슷한 느낌

// 🔸 2. 함수 표현식에만 type alias 사용가능
let fun08:Funtype08 = function(a){
    return parseFloat(a);
}
fun08('123');





// Q1
// object 안에 함수 만든다면
let userInfo08 = {
    name : 'kim',
    plusOne08(a){ // 파라미터 있는데 타입지정 안하면 임시로 any가 되었다는 경고문이 뜸
        return a + 1;
    },
    sayHi08 : () => {
        console.log('hi')
    }
}

// 타입 지정해보쟈
type Info08 = {
    name : string,
    plusOne08 : (a : number) => number,
    sayHi08 : () => void
}
let userInfo08_1 : Info08 = {
    name : 'kim',
    plusOne08(a){
        return a + 1;
    },
    sayHi08 : () => {
        console.log('hi')
    }
}


// +) 콜백함수 추가 설명
// 함수 안의 함수가 콜백함수
// = 함수가 실행되고 바로 실행되는 함수
// Q2
type CutZero = (nums : string) => string;
type RemoveDash = (nums : string) => number;

// 내풀이
/*
    let cutZero:CutZero = function(nums){
        if(nums[0] === '0'){
            nums.slice(0, 1);
        }
        return nums;
    }

    let removeDash:RemoveDash = function(nums){
        for(let i:number = 0; i < nums.length; i++){
            if(nums[i] == '-'){
                nums.slice(i,1);
            }
        }
        return parseFloat(nums);
    }
*/

// replace와 정규식 사용
let cutZero:CutZero = function(nums){
    let result = nums.replace(/^0+/, "")
    return result;
}

let removeDash:RemoveDash = function(nums){
    let result = nums.replace(/-/g, "");
    return parseFloat(result);
}

/* ✅ replace와 정규식
🔸 replace(/[old str]/, [new str])
    => 문자열에 있는 모든 old str을 new str로 변환
🔸 old str에 사용되는 정규표현식
- /pattern/flag로 구성
- 찾으려는 문자열에 따옴표 입력하지 않음
- pattern
    - [0-9](== ₩d) : 0~9까지의 숫자 하나하나를 의미
    - + : 1개 이상의 문자 패턴
        ex) [0-9]+ => 1,2,34,567 등 다포함
    - ^ : 문자열의 시작을 의미
    - {n} : n자리수
        ex) ^02.{1} => 02로 시작하고 1자리 문자열을 가짐
    - ... 매우 다양 ...
- flag
    - g : 모든 문자열을 변환하라는 의미
    - i : 대소문자 구분하지 않음
    - ... 매우 다양 ...

*/


// Q3
let quiz08_3 = (str, fun1, fun2) => {
    return fun2(fun1(str));
}
console.log(quiz08_3('010-1111-2222', cutZero, removeDash))



let data : number  = 123
console.log(typeof data)
console.log(typeof (typeof data))