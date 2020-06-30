//default parameter 지칭
function sum(value, size=1){
    return value * size;
}

function sum2(value, size={value:1}){
    return value * size.value;
}


console.log(sum(3,10));
console.log(sum(3)); // NaN => default 지정 시 3 
console.log(sum2(3, {value:3}));
console.log(sum2(3, {value:0}));
console.log(sum2(3)); // 파라미터가 없을 시 디폴트 파라미터 값 사용
