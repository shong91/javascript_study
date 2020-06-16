// Set: Unique 한 배열 만들기. ==> 중복 없이 유일한 값을 저장하려고 할 때 사용.

let mySet = new Set();
console.log(toString.call(mySet));

mySet.add("hong");
mySet.add("lee");
mySet.add("hong"); 

mySet.forEach(function(value){
    console.log(value); // 중복된 hong 은 처음값 하나만 저장한다. 
});


if(mySet.has("hong")){
    mySet.delete("hong");

}



// WeakSet: 참조를 가지고 있는 객체만 저장이 가능하다 
// 객체가 변경되어 null 이 되면 GC의 대상이 되므로 weakSet 에서도 이를 감지한다. 
// 객체 형태를 중복 없이 저장하려고 할 때 유용하다. 

let arr = [1,2,3,4];
let arr2 = [a,b,c,d];

let obj = {arr, arr2};
let ws = new WeakSet();

ws.add(arr);
ws.add(111);    // invalid type
ws.add("2323"); // invalid type
ws.add(null);   // invalid type
ws.add(function(){});

ws.add(arr2);
ws.add(obj);


arr = null;

console.log(ws);
console.log(ws.has(arr), ws.has(arr2)); // false, true

