


// 함수 파라미터에 타입도 입력 가능 => Generic

function arrFirst(arr : unknown[]){
    return arr[0]
}
let firstValue = arrFirst([1,2,3,4]) // 결과는 1
// 그렇다면 firstValue 변수의 타입은 number?
// no!! ==>> unknown
// 파라미터에 unknown으로 지정해뒀으니까
//   => 파라미터에 들어가는 것도 하나의 변수임
// 위 파라미터에서 unknown으로 들어갔으니까 내부에서 리턴해주는것도 unknown
// ts는 숫자가 나간다고 숫자타입으로 바꿔주고 그런거 안함!!

// 간단한 연산도
// console.log(firstValue + 4);
// 타입때문에 안됨

// 해결책
// 1. 함수 내부에서 narrowing / assertion
// 2. ✅ Generic 함수 만들기 ( 파라미터로 타입을 입력하는 함수 )
function genericFun<MyType>(arr : MyType[]) : MyType{
    //              => <>로 타입만 입력할 수 있는 파라미터 자리를 새로 생성해준다고 생각하면 됨 (여러개 넣을 수 있음)
    //                  그리고 그 타입은 파라미터와 리턴 타입에서 바로 사용해서 지정할 수 있다!!
    return arr[0];
}
// 확장성이 생김
let myFirstVal1 = genericFun<number>([6,3,7,1]); // 타입 파라미터를 넣어줌
let myFirstVal2 = genericFun<string>(['2', '3', '5']);
// 가끔은 타입파라미터 안넣어도 알아서 인식하기도 함


/*
function minusOne<MyType>(num : MyType) : MyType{
    return num-1; // 에러남
    // MyType에 뭐가 들어올 줄 알고 수학 연사을 하냐! 라고 에러 내는것
    // narrowing 해주는 방법도 있지만,
    // ✅ 파라미터로 들어오는 타입을 제한둘 수 있음 => extends
}
*/
function minusOne<MyType extends number>(data : MyType){
    // ✅ extends => 파라미터 타입이 오른쪽 속성을 가지고있는지 체크

    // 하지만 리턴타입까지 MyType으로 설정시 오류가 발생하는데,
    /*
        - 오류문
        'number' 형식은 'MyType' 형식에 할당할 수 없습니다.
        'number'은(는) 'MyType' 형식의 제약 조건에 할당할 수 있지만,
        'MyType'은(는) 'number' 제약 조건의 다른 하위 형식으로 인스턴스화할 수 있습니다.

        number에 속할수도 있는데, 리턴하는 결과가 다른 형식이면 어쩔거냐는 이야기
    */
    return data-1;
}
let minusVal = minusOne<number>(30);

// string 으로 extends확인해서 length 기능도 쓸 수 있고~~
function strLen<MyType extends string>(data : MyType){
    return data.length;
}

// 커스텀 type alias 및 interface도 가능!!
interface Intf208 {name : string};
function namePrint208<MyType extends Intf208>(data : MyType){
    return data.name;
}
let name208 = namePrint208<Intf208>({name : 'yu'});


// class에서도 사용가능
// 예시)
// class Myclass <MyType> {};
// let a = new Myclass<number>();

// type변수에도 사용가능
// type Age <MyType> = MyType; 이런식



// Q1
// type strArr = string | [] => union 타입이라고 따로 안빼도 그냥 바로 넣을 수 있음
function count208<MyType extends string | []>(data : MyType){
    return data.length;
}


// Q2
interface AnimalObj {
    name : string;
    age : number
}
function toAnimal<MyType>(data : string):MyType{
    return JSON.parse(data);
}
let animalData = '{"name" : "dog", "age" : 1}';
let result208 = toAnimal<AnimalObj>(animalData)
console.log(result208);

// ❗️JSON이 뭔데!!
/*
object 자료형인데 글자로 바꾸려고 전부 따옴표쳐놓은 자료를 JSON 이라고 칭합니다. 
서버랑 통신할 때 가끔 사용합니다

JSON --> object 이렇게 변환하고 싶으면 직접 따옴표를 제거하든가 아니면  
JSON.parse() 소괄호 안에 JSON자료를 넣으면 그 자리에 따옴표가 제거된 object가 남습니다. 
 */


// Q3
class RanName <Type>{
    constructor(public name : Type){
    }
}
let ranName1 = new RanName<string>('yu');
let result1 = ranName1.name;
let ranName2 = new RanName<number>(123);
let result2 = ranName2.name;
let ranName3 = new RanName<string[]>(['a', 'b', 'c']);
let result3 = ranName3.name;

