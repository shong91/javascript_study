//map, weakMap 
//array -> (개선) set, weakset
//object -> (개선) map, weakmap

//map은 key, value 구조 

let wm = new WeakMap();
let myfunc = function(){};

// 이 함수가 얼마나 실행됐는지 알려고 할 때, 

wm.set(myfunc, 0);
console.log(wm);

for(let i=0; i<10; i++) {
    count = wm.get(myfunc); // key 값에 따라 get Value
    count++;  
    wm.set(myfunc, count);
}

console.log(wm); // 10


myfunc = null;  // null로 초기화 시 GC의 대상이 되므로 weakSet 에서도 이를 감지한다. 
console.log(wm.get(myfunc)); 

