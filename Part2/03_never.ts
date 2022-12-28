
// function return 값에 붙일 수 있는 never type

/* never 붙이면 조건
    1. return 값이 없어야함
    2. endpoint가 없어야 한다 == 함수실행이 끝나지 않아야한다
        => 사실 1번과 같은 말(조건2 충족하면 조건1 자동 충족)
*/

function fun203_1() : never{
    throw new Error(); // 임의로 오류 내기
    // 코드 실행은 중단되지만 함수가 끝나는건 아님(조건2)

    //while(true){ // while 조건식을 true로 두면 무한히 돔
    //
    //}
}

// ✅ 실제 코딩에서 never 타입 사용
/*
    - 사실 쓸 일이 없음 => void로 대체 가능하거든
    - 근데 알아야 하는건
        => 잘못 코드가 짜여지면 종종 등장하는 타입!!!
*/
// never타입이 등장하는 경우
// 1. 뭔가 이상한 narrowing
function fun203_2(data : string){
    if(typeof data == 'string'){
        console.log(data);
    }else { // 어차피 파라미터로 string만 받는데 else가 있나?
        console.log(data); // 확인해보면 타입이 never로 찍힘 => "있을 수 없다"라는 뜻
    }
}

// 2. 어떤 함수 표현식은 return 타입이 자동으로 never
let fun203_3 = function(){ // 함수 담긴 변수 보면 never
    throw new Error();
}


// 사실상 never은 코드가 뭔가 이상하다는걸 알려줌. 
// 코드 짜다가 나온다면 원인을 파악하고 수정 해보쟈
