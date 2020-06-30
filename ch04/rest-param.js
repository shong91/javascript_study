// 가변 인자의 활용 - spread operator 와 유사.
// 여러가지 값을 매개변수로 받을 때, 가변하는 파라미터를 arguments 배열로 받을 수 있도록 함. 

function checkNum(...argArr){
//    const argArr = Array.prototype.slice.call(arguments);
    console.log(argArr);



}

const result = checkNum(10,2,3,4,5,"55");
const result2 = checkNum(10,5,"aaa");
