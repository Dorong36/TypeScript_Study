

// ✅ Narrowing
function narrowingFun(x : number | string):void{
    // console.log(x + 3); // union 타입이라 오류
    // 타입이 아직 하나로 확정되지 않았을 경우 => Type Narrowing 사용하자
    // 🔸 대표적인 narrowing 방법은 typeof 연산자
    if(typeof x === 'string'){
        console.log(x + '1');
    }else {
        console.log(x + 1);
    }
}
narrowingFun('hi');
narrowingFun(10);

function narrowingFun2(x : number | string){
    let narrArr:number[] = [];
    // narrArr[0] = x; <= 오류 나겠지? narrowing 해야지
    if(typeof x === 'number'){
        narrArr[0] = x;
    }else{ // 🌟 if문 써줬으며 else까지 끝까지 써주는게 에러로부터 안전
        narrArr[0] = 1;
    }
}

// 또다른 narrowing 문법
// - 속성 in 오브젝트 자료
// - 인스턴스 instanceof 부모
// 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 다 인정해줌


// ✅ Assertion => 타입 덮어쓰기
function narrowingFun3(x : number | string){
    let narrArr:number[] = [];
    narrArr[0] = x as number; // 변수 as 자료형 => 변수를 지정한 자료형으로 덮어 써주세요~
    // 편하다고 남용하면 빠따맞음
    /* as를 활용한 assertion 정석적인 사용법
    1. narrowing 할 때
        => 확정되지 않은 변수들 narrowing에 사용하는 것이 올바른 사용법
        => 명확히 정해진 타입으로 이미 할당된 변수의 타입을 임의로 바꾸면 안됨!!
    2. 어떤 타입이 들어올 지 거의 확실할 때
        => union으로 지정되어있지만 사실상 하나로 들어올게 확실할 때
        => 숫자 | 문자 를 숫자만 들어오려니~하고 숫자로 as 해놔버리면
            문자가 들어와도 버그를 캐치하지 못함(타입스크립트 의미 없어짐)
    그래서 거의 안쓰는게 일반적 => 차라리 if와 typeof 활용
    디버깅이나 비상용으로 쓰쟈

    +) assertion 과거 사용법
        => <number>변수
    */
}

// Q1
function quiz5_1fun(arr : (number|string)[]):number[]{
    let ansArr:number[] = [];
    arr.forEach((a)=>{
        if(typeof a === 'string'){
            ansArr.push(parseFloat(a));
        }else{
            ansArr.push(a);
        }
    })
    return ansArr;
}
console.log(quiz5_1fun([1,2,'3',4,'5']))


// Q2
function quiz5_2fun(teacher:{subject : string | string[]}):string|undefined{ // return에 undefined 추가하라는 오류문 뜸 => 09 수업 과정에서 tsconfig 건드려서 그럼
    if(typeof teacher.subject === 'string'){
        return teacher.subject;
    }else if(Array.isArray(teacher.subject)){
        // 배열 여부 확인하기
        // typeof 사용하면 배열은 object로 나옴
        // Array.isArray(변수)의 true, false 사용하자!!
        return teacher.subject[teacher.subject.length-1];
    }
}
let teacher1 = {subject : 'math'}
let teacher2 = {subject : ['korean', 'science']}
let teacher3 = {hello : 'hi'}
console.log(quiz5_2fun(teacher1));
console.log(quiz5_2fun(teacher2));
// console.log(quiz5_2fun(teacher3)); => 에러