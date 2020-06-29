// json 으로 응답을 받고, javascript object 로 변환한 후에 
// 어떠한 데이터 처리 조작을 한 뒤 dom 에 추가하기~ => UI 개발 시 자주 사용 
// dom 조작 시 데이터 + HTML 문자열의 결합이 필요하기 때문에! 

const data = [
    {
        name: 'coffee-bean',
        order : true,
        items : ['americano', 'latte', 'green-tea'],
    },
    {
        name: 'starbucks',
        order: false
    }
];


const template = `<div>welcome ${data[0].name} !</div>`;
console.log(template);