//parent obj
const healthObj = {
    showHealth : function(){
        console.log("오늘은 " + this.healthTime + "시간 운동했다!");
    },
    setHealth: function(newTime) {
        this.healthTime = newTime;
        
    }
}

//child obj
const healthChildObj = {
    getAge : function(){
        return this.age;
    }
    
};

//prototype chain
const lastHealthObj = Object.setPrototypeOf(healthChildObj, healthObj);


const childObj = Object.setPrototypeOf({
    age: 22
}, healthChildObj);

childObj.setHealth("12:12");
childObj.showHealth(); //healthTime: 12:!2

console.log("childObj is.. ", childObj);

