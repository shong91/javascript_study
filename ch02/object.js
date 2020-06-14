const name = "crong";
const age = 31; 

const obj = {
    name : name, 
    age : age
};

console.log(obj);


function getObject(){
    const name = "pororo";
    
    const getName = function(){
        return name;
    }

    const setName = function(newName){
        name = newName;

    }

    const printName = function(){
        console.log(name);
    }

    // return {
    //     getName : getName,
    //     setName : setName,
    //     name: name
    // }

    // 객체 리터럴(Object Literal): key, value 값이 일치한다면 아래와 같이 축약 가능
    return {getName, setName, name}
}

var obj = getObject();
console.log(obj);
console.log(obj.getName());


const data = {
    name, 
    getName() {
        
    },
    age,
}