

// ✅ Rest parameter 타입지정
function fun201(...datas : number[]){
    // rest parameter는 넣어준 값들을 배열로 받아오므로 타입을 배열로 지정
    console.log(datas);
}
fun201(1,2,3,34,5,56,7);


// ✅ Destructuring 타입지정
function funs201_1({name, age} : {name : string, age : number}){ // 항상 오브젝트 타입 지정하는거랑 같음!!
    console.log(name, age);
}
let obj201 = {name : 'yu', age : 26};
funs201_1(obj201);

// rest parameter, destructuring 개념 복습!!


// Q1
function max201(...datas : number[]):number{
    let maxNum = 0; // 이렇게 지역적으로 쓰고 바로 할당해서 타입이 명확하면 굳이 수동으로 안하고 자동으로 하게 두는 듯!!
    datas.forEach((data) => {
        if(maxNum < data){
            maxNum = data;
        }
    })
    return maxNum;
}
console.log(max201(1,2,4,6,9,34));
// Math.max(...array) ==>> 최댓값 구하는 함수


// Q2
interface Type201_2 {user : string, comment : number[], admin : boolean}
function quest201_2({user, comment, admin} : Type201_2):void{
    console.log(user, comment, admin);
}
let obj201_2 = {user : 'yu', comment : [1,2,3], admin : true};
quest201_2(obj201_2);


// Q3
function quest201_3([alc, kind, onsale] : (number | string | boolean)[]){
    console.log(alc, kind, onsale);
}
quest201_3([40, 'wine', false]);

