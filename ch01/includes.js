// ES6 includes method
// arr.includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별한다.(boolean)
// 객체 값(요소)로 판별하며, 요소가 가지고 있는 특정 문자열 등으로 판별하는 것은 아니다. 
// (참고) string.includes() 메서드는 요소가 가진 특정 문자열이 있는지 판별한다. 

const arr1 = [1,2,3];
arr1.includes(2); // true

const animals = ['cat', 'dog', 'bat'];
animals.includes('cat'); //true
animals.includes('at'); //false
"cat".includes('at'); //true


// 파라미터가 2개인 경우, (찾을 값, 검색을 시작할 인덱스) 이다. 
// fromIndex가 배열의 길이보다 같거나 크다면 false 를 반환하다. (배열 검색 불가)
// fromIndex가 음수라면, fromIndex = (length + fromIndex) 으로 계산한다. 단, 계산된 fromIndex가 (-1 * arr.length) 보다 작거나 같다면 전체 배열을 검색한다. 

[1,2,3].includes(2); //valuetoFind (true)
[1,2,3].includes(3,3); //valueToFind, fromIndex (false)

var arr = ['a', 'b', 'c'];
arr.includes('a', -100); // (true) newFromIndex = 3-100 = -97. (-1 * 3) 보다 작으므로 전체 배열을 검색한다. 
arr.includes('a', -2); // (false) newFromIndex = 3-2 = 1
