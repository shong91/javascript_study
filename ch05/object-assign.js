//Object assign Method 
// new 키워드를 사용하지 않고 객체를 생성하기. 


const healthObj = {
    showHealth : function(){
        console.log("오늘은 " + this.healthTime + "시간 운동했다!");
    }
}

const myHealth = Object.create(healthObj);
myHealth.healthTime = "11:20";
myHealth.name = "hong"; // prototype 추가 가능

console.log(myHealth);


//object assign 사용 -> prototype 에 들어갈 내용을 바로 추가할 수 있다. 
const myHealth2 = Object.assign(Object.create(healthObj)
                            , {
                                name: "honghong",
                                healthTime : "12:12"
                            });

console.log(myHealth2);