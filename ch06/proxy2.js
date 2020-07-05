const target = {
    message1: "hello",
    message2: "everyone",
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);

// 핸들러가 비어있으므로, 프록시는 오리지널 target object 와 같이 동작한다. 
console.log(proxy1.message1); // hello
console.log(proxy1.message2); // everyone 

// 핸들러 정의하여 프록시를 커스터마이징
const handler2 = {
    get: function(target, property, receiver) {
        return "world";
    }
};

// proxy2 를 호출할 때, 핸들러의 get()이 인터셉트하여 프로퍼티를 재정의함
const proxy2 = new Proxy(target, handler2);
console.log(proxy2.message1); // world
console.log(proxy2.message2); // world 


// Reflect 클래스; 오리지널 target object를 reflect 함. 
const handler3 = {
    get: function(target, property, receiver) {
        if(property === "message2") {
            return "world";
        }
        return Reflect.get(...arguments);
    }
};

const proxy3 = new Proxy(target, handler3);

console.log(proxy3.message1); // hello
console.log(proxy3.message2); // world 
