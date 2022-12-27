

class Person10 {
    data : number = 123; // class 필드값 => constructor와 똑같은 역할
    // 🌟 JS와 TS 차이!!
    // constructor에서 this키워드를 사용해 값을 할당하려면
    // 필드에서 변수를 미리 선언해줘야함
    name : string;
    age : number;
    constructor(name : string, age : number){ // return은 항상 오브젝트라 return type 따로 지정 안함
        this.name = name;
        this.age = age;
    }
    sayHi(name : string){
        console.log('hi, ' + name);
    }
}

let person10 = new Person10('Yu', 26);
// 당연히 디폴트 파라미터, 레스트 파리미터 다 가능
console.log(person10.data);
person10.sayHi('Yu');



// Q1
class Car10 {
    model : string;
    price : number;
    constructor(model, price){
        this.model = model;
        this.price = price;
    }
    tax():number{
        return this.price*0.1
    }
}
let car10 = new Car10('sonata', 3000);
console.log(car10)
console.log(car10.tax())


// Q2
class Word10 {
    num : number[];
    str : string[];

    constructor(...datas : (string | number)[]){
        let nums : number[] = []
        let strs : string[] = []
        datas.forEach((data)=>{
            if(typeof data === 'number'){
                nums.push(data);
            }else{
                strs.push(data);
            }
        })
        
        this.num = nums;
        this.str = strs;
    }
}
let words = new Word10(1,'a', 2, 'bc', 345);
console.log(words.num);
console.log(words.str);