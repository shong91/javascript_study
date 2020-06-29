// 구조 분해 할당 Destructuring
let data = ["crong", "hon", "jk", "jinny"];

// 배열의 특정 인덱스 값을 변수로 사용하기
let myName = data[0];
let jisu = data[1];
let jung = data[2];

// destructing 으로 배열/오브젝트에 원하는 값 할당하기
let [jisu, ,jung] = data; // "crong", "jk";



let obj = {
    name: "crong",
    address : "korea",
    age: 10
};

let {name, age} = obj;

let {name: myName, age: myAge} = obj;
console.log(myName, myAge); //"crong" , 10;


// 새로운 변수 이름으로 할당하기
var o = {p: 30, q:true};
var {p: foo, q: bar} = o;

console.log(foo); // 30; 
console.log(bar); // true
