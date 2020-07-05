// 프록시: 오브젝트를 intercept가로채 다른 작업을 추가로 할 수 있도록 함
const myObj = {
    name: 'hong',
    changedValue: 0
};

//target object, handler
const proxy = new Proxy(myObj, {
    get: function(target, property, receiver){ // receiver == proxy
        console.log('get value');
        //return target[property];
        //return Reflect.get(target, property);
        return (property in target) ? target[property] : "anonymous";
    },
    set: function(target, property, value){
        console.log('change value');
        target['changedValue']++;
        target[property] = value;
    }
}); 
//proxy.name;
proxy.name = 'kim';
proxy.name = 'lee';

proxy.name;
console.log(proxy.changedValue);

