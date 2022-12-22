// 무조건 string 파라미터, number 파라미터
// 화살표함수에서 실행문 부분이 return문 하나면 {}와 return 키워드 생략 가능과 비슷한 느낌
// 🔸 2. 함수 표현식에만 type alias 사용가능
var fun08 = function (a) {
    return parseFloat(a);
};
fun08('123');
// Q1
// object 안에 함수 만든다면
var userInfo08 = {
    name: 'kim',
    plusOne08: function (a) {
        return a + 1;
    },
    sayHi08: function () {
        console.log('hi');
    }
};
var userInfo08_1 = {
    name: 'kim',
    plusOne08: function (a) {
        return a + 1;
    },
    sayHi08: function () {
        console.log('hi');
    }
};
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
var cutZero = function (nums) {
    var result = nums.replace(/^0+/, "");
    return result;
};
var removeDash = function (nums) {
    var result = nums.replace(/-/g, "");
    return parseFloat(result);
};
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
var quiz08_3 = function (str, fun1, fun2) {
    return fun2(fun1(str));
};
console.log(quiz08_3('010-1111-2222', cutZero, removeDash));
