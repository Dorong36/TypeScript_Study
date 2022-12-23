

// Type script로 HTML 조작하기
// tsconfig에 "strictNullChecks": true 추가
// strict true로 해도 가능 => strict 옵션이 5개 정도 있는데 한번에 다함
// => 간혹가다 null 타입이 들어올 때 엄격히 체크

let title09 = document.querySelector('#title');
// title09?.innerHTML = 'Hello~~~'  => 오류
// 오류문 보면 title09의 type이 (Element | null)로 지정되어있음
//  => 잘 찾으면 element들어오지만 id 틀리거나 하면 null 들어올거 대비
// 타입 narrowing 필요

// ✅ html 조작시 narrowing 방법 5개
// 1. if문
if(title09 != null){
    title09.innerHTML = 'Hello~~~'
}

// 2. 🌟 instanceof 🌟 => 가장 많이 씀!!
if(title09 instanceof Element){
    title09.innerHTML = 'Hello~~~'
}

// 3. assertion
// let title09 = document.querySelector('#title') as Element;
//  => 선언부터 Element로 가져오기

// 4. 오브젝트에 붙이는 ?. => 신문법
if(title09?.innerHTML != undefined){
    title09.innerHTML = 'Hello~~~'
}

// 5. tsconfig 수정
// strict모드를 꺼버리기


// 일반 JS에서도 이렇게 narrowing 이용하면 안전하고 좋음

// ✅ 링크
let link09 = document.querySelector('.link');
// link09.href = 'https://google.com'; => 그냥 쓰면 오류
if(link09 instanceof HTMLAnchorElement){
                    // => 그냥 Element 쓰면 오류
                    // => 단순 Element가 아닌 <a>에 필요한 정확한 타입명이 있음
                    // => HTMLAnchorElement
    link09.href = 'https://google.com';
}

// ts가 제공하는 Element 타입을 상속하는 상세한 타입들이 있음
// 앵커태그, 버튼태그 등
// 태그에 해당하는 상세 내용들이 잘 들어있음


// ✅ EventListener
let button09 = document.querySelector('#btn');
button09?.addEventListener('click', function(){ // ?.로 narrowing
    alert('Hi!!!')
})



// Q1
let img09 = document.querySelector('#img');
if(img09 instanceof HTMLImageElement){
    img09.src = 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-10th-gen-finish-unselect-gallery-1-202212?wid=2560&hei=1440&fmt=p-jpg&qlt=95&.v=1667592106064';
}


// Q2
let link09_1 = document.querySelectorAll('.naver');
link09_1.forEach((a) => {
    if(a instanceof HTMLAnchorElement){
        a.href = 'https://google.com'
    }
})



