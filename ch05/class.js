//ES6 Class 
function Health(name){
    this.name = name; 
}

Health.prototype.showHealth = function(){
    console.log(this.name + "님, 안녕하세요. ");

}

const h = new Health("hong");
h.showHealth();

//////javascript 의 class 는 [object >>Function<<]. (즉, 상기와 하기는 동일한 것)
class Health2 {
    constructor(name, lastTime){
        this.name = name; 
        this.lastTime = lastTime;
    }

    showHealth() {
        console.log("안녕하세요, " + this.name);
    }
}

const myHealth = new Health2("lee");
myHealth.showHealth();

console.log(myHealth);