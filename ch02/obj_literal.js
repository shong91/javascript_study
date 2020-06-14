// 객체 리터럴(Object literal): 객체를 {} 으로 표현하는 방식. 보다 간결하고 직관적이다.
// var obj = {}; === var obj = new Object();

var obj = {
    name: 'hong',
    age : 10, 
    increaseAge : function(i){
        this.age++;
    }
};


// 객체 리터럴을 이용해 속성에 다른 객체를 할당 (중첩)
var anotherName = "another_hong";
var obj = {
    name: 'hong',
    age: 10, 
    parent: {
        name: 'hong_parent',
        job: 'developer'
    },
    etc: function(){
        name + "의 또다른 이름: " + anotherName
    }
};

console.log(obj.parent.job); // 중첩된 객체의 속성에 접근하기


// 파라미터 값 전달 시 객체 리터럴 사용하기 
var options = {
    path: 'http://www.naver.com',
    windowName: 'naver_window',
    windowOptions: 'width=500, height=500',

};

function openWindow(options){
    var url = options.path;
    var name = options.windowName;
    var option = options.windowOptions;

    window.open(url, name, option);
}

openWindow(options);


// 사용자 객체 정의: function 키워드 사용 (자바: class)
// 객체를 정의할 때 function 키워드와, 일반함수를 정의하는 function의 차이 ?
// 자바스크립트의 funtion 은 함수를 호출하는 요소로도, 다른 객체를 생성하는 요소로도 사용될 수 있다. (new ~. function 객체 생성 시 대문자로 시작)

function Person(name){
    this.name = name; 
    this.setNewName = function(name){
        this.name = name; 
    }
}

var mySon = new Person('hong_son');
var mySon = new Person(); // name 매개변수는 undefined 로 설정됨
var mySon = new Person; // new 연산자에서 ()를 생략 가능. name 매개변수는 undefined 로 설정됨 

