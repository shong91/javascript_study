// 기본 예제
const handler = {
    get: function(obj, prop) {
        return (prop in obj) ? obj[prop] : 37;
    }
};

const p = new Proxy({}, handler);
p.a = 1; 
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log('c' in p, p.c); // false, 37
console.log('=================================');

const target = {};
const p2 = new Proxy(target, {});

p2.a = 37; 
console.log(target.a);
console.log('=================================');

// Validation 
let validator = {
    set: function(obj, prop, value) {
        if(prop === 'age') {
            if(!Number.isInteger(value)) {
                throw new TypeError('The age is not an Integer');
            }
            if(value > 200) {
                throw new RangeError('The age seems invalid');
            }
        }

        obj[prop] = value; 
        return true; 
    }
};

const person = new Proxy({}, validator);

person.age = 100; 
//person.age = 'young'; // throw TypeError
//person.age = 300; // throw RangeError
console.log('=================================');


// 생성자 확장 
function extend(sup, base) {
    var descriptor = Object.getOwnPropertyDescriptor(base.prototype, 'constructor');
    base.prototype = Object.create(sup.prototype);

    var handler = {
        construct : function(target, args) {
            var obj = Object.create(base.prototype);
            this.apply(target, obj, args);
            return obj; 
        },
        apply: function(target, that, args){
            sup.apply(that, args);
            base.apply(that, args);
        }
    };
    
    var proxy = new Proxy(base, handler);
    descriptor.value = proxy; 
    Object.defineProperty(base.prototype, 'constructor', descriptor);
    return proxy; 
}

var Person = function(name) {
    this.name = name; 
};

var Boy = extend(Person, function(name, age){
    this.age = age; 
});

Boy.prototype.gender = 'M';

var Peter = new Boy('Peter', 14);

console.log(Peter.gender);
console.log(Peter.name);
console.log(Peter.age);