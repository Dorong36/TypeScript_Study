

// ✅ function
function x2(x : number):number{
    //      파라미터 타입  리턴 타입
    // 파라미터 등에 타입 지정 안해주면 자동으로 any타입이 설정
    return x * 2;
}
x2(30);

// 함수에 void 타입 활용 가능
function voidFun(x:number):void{ // return 하기 싫을 때 void 지정
    // return 1+1; => 오류 남
    1+1;
}
// 함수에 파라미터와 타입까지 지정해두면 JS와 약간 달라짐
//  => 🔸 타입지정된 파라미터는 필수로 넣어줘야함!!! 🔸
//  => 파라미터 옵션으로 넣을거면 ?삽입
function paramUndef(x?:number):number{ // 파라미터에 ?붙이기 => 들어올 수도 있고 아닐 수도 있다!!
    return 1+1;
}
paramUndef();
paramUndef(123);
// 🌟 (x?:number)는 결국 (x : number | undefined)와 같은 의미!! 🌟


// 간단한 퀴즈
function quiz4_0fun(x : number | string) : void {
    // console.log(x + 3); // 오류가 나는 이유는?
    // => 지난시간에 배운것처럼 union type은 새로운 자료형과 같음
    //  => 엄격한 typescript는 숫자가 아니기 때문에 연산을 할 수 없다고 판단

    // 코드를 엄격하게 짜서 해결 => narrowing => 다음시간에 보쟈
}


// Q1
function quiz4_1fun(name? : string):string{
    if(name){
        return `hello ${name}!!`
    }else{
        return 'no name'
    }
}

// Q2
function quiz4_2fun(nums : number | string):number{
    return nums.toString().length;
}

// Q3
function quiz4_3fun(income:number, homeExst:boolean, charm:string):string | void{
    let score:number = 0;
    score += income;
    if(homeExst){score += 500}
    if(charm === '상'){score += 100}
    if(score >= 600){
        return 'Good'
    }
}
console.log(quiz4_3fun(100,true,'중'))