//weakmap 활용

function Area(height, width){
    this.height = height;
    this.width = window;
}

Area.prototype.getArea = function(){
    return this.height * this.width;
}

let myArea = new Area(10, 20);
console.log(myArea.getArea()); // 200
console.log(myArea.height); // 10


//weakmap 활용 ; weakmap 클래스 인스턴스 변수 보호하기
const wm = new WeakMap();

function Area2(height, width){
    wm.set(this, {height, width})
}

Area2.prototype.getArea = function(){
    const {height, width} = wm.get(this);
    return height * width;
}

let myArea2 = new Area2(10, 20);
console.log(myArea2.getArea()); // 200
console.log(myArea2.height); // undefined; private 변수이므로 외부에서 접근 불가


myArea2 = null; 
console.log(wm); // object 존재
console.log(wm.has(myArea2)); // false  

// weakmap 을 사용하지 않는 경우 
const obj = {};
function Area3(height, width){
    obj["height"] = height;
    obj["width"] = width;
}

Area3.prototype.getArea = function(){
    return obj.height * obj.width;
}

let myArea3 = new Area3(10, 20);
console.log(obj);
myArea3 = null; 
console.log(obj); // object 존재