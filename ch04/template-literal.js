// Tagged Template Literal
// function 에서 처리하여 템플릿을 조작하여 사용하기 


const data = [
    {
        name: 'coffee-bean',
        order : true,
        items : ['americano', 'latte', 'green-tea'],
    },
    {
        name: 'starbucks',
        order: false
    },
    {
        name: 'coffee-king',
        order: true,
        items: ['long-black', 'flat-white', 'latte'],
    }
];

//Tagged Template Literals
function fn(tags, name, items){
    console.log("tags: ",tags);
    if(typeof items === "undefined") {
        items = "주문 가능한 항목이 없습니다. ";
        
    }
    return (tags[0] + name + tags[1] + items + tags[2]);
    
}




data.forEach((v) => {
        
    let template = fn`<div> welcome ${v.name} ! 
    <h2>주문가능항목</h2>
    ${v.items}</div>`; 

    console.log(template); //undefined


});