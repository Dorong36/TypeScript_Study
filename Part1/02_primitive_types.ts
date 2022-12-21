// ✅ JS 문법 그대로 TS에서 사용 가능 + 변수 자료형 정의
let lastName :string = 'kim';
let age:number = 26;
let married:boolean = false;
let nullvar:null = null;
// 배열, 오브젝트
let members:string[] = ['yu', 'lee'];
let memberName:{name1:string, name2:string} = {name1 : 'kim', name2 : 'lee'}

// 타입스크립트 갓 배운 사람 특 => 온갖 곳에 다 타입 지정함 ㅋㅋ
// 타입지정 원래 자동으로 됨 => 타입지정 문법 생략 가능
let firstName = 'dy';
let num123 = 123;
// 마우스 올려보면 맞춰서 자료형이 들어가있음


// Q1
let myName:string = 'ydy';
let myAge:number = 26;
let myHomeown:string = 'gwangju';

// Q2
let favSong:{title : string, singer : string} = {title : 'gradation', singer:'10cm'}

// Q3
let project:{member:string[], days:number, started:boolean} = {
    member : ['kim', 'lee'],
    days : 30,
    started : true
}