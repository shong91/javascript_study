// Destructuring (구조분해할당; 비구조화)
const[a, ,b] = [1,2,3]; // 배열이 해제되어 값이 할당됨. a = 1, b = 3


// 기존 자바스크립트 문법으로 객체 변수 선언하기
var obj = {
    name: 'hong',
    age: 20,
    parents: {
        father: 'hong',
        mother: 'kim',
    }
};

var c = obj.name; //'hong'
var d = obj.parents.mother; // 'kim'

// 구조분해할당으로 객체 변수 선언하기
const obj2 = {
    name: 'lee',
    age: 23, 
    parents: {
        mother: 'choi',
    }
};

const {name, parents:{mother}, k} = obj; 
// 'lee'           'choi'     undefined


// cf) default, rest spread (제로초)
