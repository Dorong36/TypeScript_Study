// 일반적으로 사용하는 typeof로 해결할 수 없는 narrowing 상황에서
// 1. &&
// 보통 null / undefined 타입 체크하는 경우가 잦음
function fun202_1(a) {
    // && 연산자로 null / undefined 타입 체크하기
    // string 뿐만 아니라 undefined까지 한번에 체크
    if (a && typeof a === 'string') {
        // case1. a가 undefined라면 조건식이 && 오른쪽을 보지않고 자동으로 undefined 판단
        // case2. a가 undefined가 아니면 && 오른쪽 비교문을 실행, true 반환
    }
}
function funs202_2(animal) {
    // swim, fly 뭐 꺼낼지 narrowing 필요
    // typeof 쓰게? => typeof는 단순히 number, string 등으로만 판단. 타입 알리아스 판단 불가
    // 서로 다른 속성명을 가진 object를 구분하고 싶을 때 (배타적 속성이 있어야함)
    // 속성명 in 오브젝트자료
    if ('swim' in animal) { // Fish 타입인지 검사 가능
        console.log(animal.swim);
    }
}
// 3. instanceof 
// 인스턴스 instanceof 부모class
// 오브젝트 두 개가 비슷하다면 부모 class가 누군지 물어봐서 narrowing 가능
var date202 = new Date();
if (date202 instanceof Date) {
    console.log('yes');
}
function fun202_3(x) {
    // 비교하려는 두 타입 오브젝트가 비슷함 => in 사용 불가
    // 부모 클래스 없음 => instanceof 불가
    // 사실 이렇게 비슷한 타입 굳이 두 개 만들 이유가 없음. 안만드는게 젤 좋음
    // 그래도 불가피하게 구분해야한다면
    // 강제로 literal type을 만들기
    if (x.wheel === '4') { // 배타적인 리터럴 타입
        console.log('car');
    }
    else {
        console.log('bike');
    }
}
// 논리적으로 타입을 특정지을 수 있다면 모두 narrowing으로 인정해준다!!
