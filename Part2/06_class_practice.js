// Q1
/*
    x : User 클래스에 직접 생성된 것으로 instace에 물려주지 않고,
        extends 및 외부에서 접근 수정 불가능, User 클래스 내부에서만 접근, 수정 가능
        
    y : User 클래스에 직접 생성된 것으로 instace에 물려주지 않고,
        User 클래스 내부, 혹은 User 클래스 직접 호출(User.속성)을 통해서만 접근, 수정 가능

    z : User 클래스 내부에서만 사용가능, instance 포함 외부에서 접근 불가,
        extends 시에는 그대로 따라감
*/
// Q2
var Q206_2 = /** @class */ (function () {
    function Q206_2() {
    }
    Q206_2.addOne = function (a) {
        Q206_2.x = Q206_2.x + a;
    };
    Q206_2.printX = function () {
        console.log(Q206_2.x);
    };
    Q206_2.x = 10;
    Q206_2.y = 20;
    return Q206_2;
}());
Q206_2.addOne(3);
Q206_2.printX();
Q206_2.addOne(4);
Q206_2.printX();
// Q3
// canvas를 활용한 내 풀이
// let canvas206 = document.getElementById('canvas');
// let ctx;
// if(canvas206 instanceof HTMLCanvasElement){
//     ctx = canvas206.getContext("2d");
// }
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    // 내풀이
    // draw(){
    //     if(ctx instanceof CanvasRenderingContext2D){
    //         ctx.fillStyle = this.color;
    //         ctx.fillRect(Math.floor(Math.random()*400),Math.floor(Math.random()*100),this.width, this.height)
    //     }
    // }
    // 해답
    Square.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style = \"position : relative;\n            top : ".concat(a * 400, "px;\n            left : ").concat(a * 400, "px;\n            width : ").concat(this.width, "px;\n            height : ").concat(this.height, "px;\n            background : ").concat(this.color, "></div>");
        document.body.insertAdjacentHTML('beforeend', square);
    };
    return Square;
}());
var square206 = new Square(30, 30, 'blue');
square206.draw();
square206.draw();
square206.draw();
square206.draw();
square206.draw();
square206.draw();
square206.draw();
square206.draw();
// 해답대로 하면 안나오는데 이유를 모르겠다
// 내 풀이는 나오기는 하는데 픽셀값 대응이 이상함
//      0~400 사이 x,y좌표인데 자꾸 벗어나는 경우가 생김
//      width, height 30, 30 지정했는데 세로가 더 긴 직사각형이 생김
