// 자바스트립트는 함수 호출 방식에 의해 this 에 바인딩할 어떤 객체가 동적으로 결정된다. 
// 즉, 함수를 선언할 때 바인딩할 객체가 정적으로 결정되는 것이 아니라, 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다. 

// 일반 함수의 this: 콜백 함수 내부의 this === 전역 객체 window 를 가리킨다. 
const myObj = {
    runTimeOut(){
        setTimeout(function(){
            this.printData(); // bind()하지 않는다면 error! this 는 메소드를 호출한 객체(인스턴스)가 아닌 window 이기 때문
            console.log(this === window); //true
        }.bind(this), 2000);
    },
    printData(){
        console.log("hi codeSquad!");
    }
}

//화살표 함수의 this: 함수를 선언할 때 this에 바인딩 할 객체가 정적으로 결정된다. 
// 동적으로 결정되는 일반 함수와 달리, 화살표 함수의 this는 언제나 상위 스코프의 this를 가리킨다. (Lexical this)
// => Lexical this 를 지원하므로, 콜백 함수로 사용하기 편리함. 
const myObj2 = {
    runTimeOut(){
        setTimeout(() => {
            this.printData();
            console.log(this === window); //false
        }, 2000);
    },
    printData(){
        console.log("hi codeSquad!");
    }
}

myObj.runTimeOut();



//
const el = document.querySelector("p");
el.addEventListener("click", function(evt){
    console.log(this); // this === <p/>
});

// arrow function 을 사용 
// 객체 안에서 함수 register(), printData()를 선언함..  => addEventListner 함수에서 사용한 this === 상위 컨텍스트인 myObj
// (객체 안에서 선언한 것이 아니었다면, this는 상위 컨텍스트인 전역객체 window. )
const myObj3 = {
    register(){
        el.addEventListener("click", (evt) => {
            this.printData(evt.target);
        });     
    },
    printData(el){
        console.log("clicked!", el.innerText);
    }
}

myObj3.register();