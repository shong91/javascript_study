var data  = [1, 2, undefined, NaN, null, ""];
Array.prototype.getIndex = function(){};

data.forEach(element => {
 console.log('value', element);

});

//[비권장] for-in을 사용시, 상위 오브젝트의 객체까지 순회하여 읽는 경우 발생
for(let index in data){
    console.log(data[index]);
}

//[권장] for-in의 버블링 방지를 위해 for-of 를 사용하는 것을 권장.
for(let value of data) {
    console.log(value);

}

//for-of 로 문자열 순회 가능 
var str = "hello world!";
for (let value of str) {
    console.log(value);
}

//spread operator (펼침 연산자)
let pre = ["apple", "orange", 100];
let newData = [...pre]; //spread operator
console.log(newData);
console.log(pre === newData); // false

let pre = [100,200,"hello",null];
let newData = [0,1,2,3,...pre,4];

let arr = [100,200,300];
console.log(sum.apply(null, arr)); // 기존 방법
console.log(sum(...arr)); // spread operator 로 매개변수 할당

function sum(a,b,c){
    return a+b+c;
}

