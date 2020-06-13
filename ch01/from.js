//ES6 from method
// Array.from() 메서드는 유사 배열 객체(length 속성을 가진 객체)나 반복 가능한 객체(Map, Set 등 객체의 요소를 얻을 수 있는 iteratorable 한 객체)를 복사하여 새로운 Array 객체를 만든다. 

function addMark(){
    let newData = [];
    for(let i=0; i<arguments.length; i++){
        newData.push(arguments[i + "!"]);
    }

    let newArr = Array.from(arguments);
    //arguements 가 배열이라면 아래와 같이 map 을 사용할 수 있다. 
    let newData = newArr.map(function(value){
        return value + "!";
    })

    console.log(newData);
}

// 가변적인 파라미터가 인자로 넘어올 경우, argments 
addMark(1,2,3,4,5);


//========================================================


//1. String 에서 배열 만들기
Array.from('foo'); // ["f", "o", "o"];


//2. Set, Map 에서 배열 만들기
const s = new Set(['foo', window]);
Array.from(s); // ["foo", window];

const m = new Map([1,2], [2,4], [4,8]);
Array.from(m); // [[1,2], [2,4], [4,8]];


const mapper = new Map([['1', 'a'], ['2','b']]); 
Array.from(mapper.keys()); // ['1', '2']
Array.from(mapper.values()); // ['a', 'b']

//배열 형태를 가진 객체(arguments) 에서 배열 만들기
function f(){ //f()의 인자인 배열 형태의 객체(1,2,3) 을 arguements로 받음
    return Array.from(arguments);
}

f(1,2,3);

//화살표 함수 사용
Array.from([1,2,3], x => x+x);// [2,4,6]
Array.from({length:5}, (v,i) =>i); // [0,1,2,3,4]


//시퀀스 생성기
const range = (start, stop, step) 
=> Array.from({length: (stop-start) / step+1}, 
(_, i) => start + (i * step));

range(0,4,1); //[0,1,2,3,4]
range(1,10,2); //[1,3,5,7,9]