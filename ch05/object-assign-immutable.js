const previousObj = {
    name: "honghong",
    healthTime : "12:12"
}

const myHealth = Object.assign({}, previousObj, {
    "healthTime" : "12:20"});


console.log(myHealth); // healthTime 값이 대체됨


//setPrototypeOf: ~의 프로토타입으로 set 하는 메서드. 
const healthObj = {
    showHealth : function(){
        console.log("오늘은 " + this.healthTime + "시간 운동했다!");
    },
    setHealth: function(newTime) {
        this.healthTime = newTime;
        
    }
}

const myHealth2 = {
    name: "hong22",
    healthTime : "11:11"
};

// myHealth2 에 healthObj의 프로토타입이 추가된다. 
Object.setPrototypeOf(myHealth2, healthObj);

console.log(myHealth2);