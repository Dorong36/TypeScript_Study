// Type script로 HTML 조작하기
// tsconfig에 "strictNullChecks": true 추가
// => 간혹가다 null 타입이 들어올 때 엄격히 체크
var title09 = document.querySelector('#title');
// title09?.innerHTML = 'Hello~~~'  => 오류
// 오류문 보면 title09의 type이 (Element | null)로 지정되어있음
//  => 잘 찾으면 element들어오지만 id 틀리거나 하면 null 들어올거 대비
// 타입 narrowing 필요
