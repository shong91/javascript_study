//ES6 filter method
// Array.filter() 는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다. 
Array.filter(elements, index, array);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);

console.log(result); // ["exuberant", "destruction", "present"];


// 모든 작은 값 걸러내기
function isBigEnough(value){
    return value >=10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// [12, 130, 44];

// JSON 에서 무효한 항목 거르기
var arr = [
    {id: 15},
    {id: -1},
    {id: 0},
    {id: 3},
    {id: 12.2},
    {},
    {id : null},
    {id : NaN},
    {id : undefined},
];

var invaildCnt = 0; 

function isNumber(obj){
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterById(item){
    if(isNumber(item.id) && item.id !== 0) {
        return true;
    } else {
        invaildCnt++;
        return false; 
    }
}

var arrById = arr.filter(filterById); // [{id: 15}, {id: -1}, {id: 3}, {id: 12.2}]
console.log(invaildCnt); 


//배열 내용 검색
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function filterItems(query) {
    return fruits.filter(function(element){
        return element.toLowerCase().indexOf(query.toLowerCase()) > -1;

    })
}

// ES6 으로 구현
const filterItems2 = (query) => {
    return fruits.filter((element) =>
      element.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
}


filterItems('ap'); // ['apple', 'banana'];
filterItems('an'); // ['banana', 'mango', 'orange'];

