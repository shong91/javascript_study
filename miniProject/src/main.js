class Blog {
    constructor(){
        console.log('Blog is started!');
        this.setInitVariables();
        this.registerEvents();
        this.likedSet = new Set(); // Set => 중복방지
    }

    setInitVariables(){
        this.blogList = document.querySelector('.blogList > ul');
        
    }

    setInitData(dataURL) {
        this.getData(dataURL, this.insertPosts.bind(this)); // this.blogList의 this가 올바르게 가리킬 수 있도록 바인딩
    }

    registerEvents(){
        const dataURL = "./data/data.json";
        const startBtn = document.querySelector('.start');
        
        startBtn.addEventListener("click", () => {
            this.setInitData(dataURL);
        });

        //event delegation (위임). event 객체를 전부 받는 것이 아니라, 필요한 객체만(target) 받을 수 있다.
        this.blogList.addEventListener("click", ({target}) => {
            const targetClassName = target.className;
            console.log(targetClassName);

            if(targetClassName !== 'like' && targetClassName !== 'unlike') { return;
            } else {
                const postTitle = target.previousElementSibling.textContent; 
       
                // 찜 취소 클릭 -> 찜하기로 다시 변경, 찜 목록 Set에서 제거 후 찜 목록 view 렌더링
                if(target.className === 'unlike') {
                    target.className = 'like';
                    target.innerText = '찜하기';
                    
                    this.likedSet.delete(postTitle);
                
                } else {
                    // 찜목록 추가(Set)
                    this.likedSet.add(postTitle);
                                    
                    // 찜 된 목록 (div)의 클래스 like -> unlike               
                    target.className = 'unlike';
                    target.innerText = '찜취소';
                }
                
                // 내 찜 목록 뷰에 추가(UI rendering)
                this.updateLikedList();
                
                // refactoring example.. 
                // dispatcher.emit("CHANGE_LIKE_LIST", {"title" : this.likedSet})
            }

        });

    }

    updateLikedList(){
        const ul = document.querySelector('.like-list > ul');
        let likedSum = "";

        // <li> 태그에 찜 리스트를 넣고, 한번에 innerHTML 을 사용한다. 
        this.likedSet.forEach((value) => {
            likedSum += `
            <li>${value}</li>
            `;

        });

        ul.innerHTML = likedSum;

    }
                   
    getData(dataURL, fn){ //콜백함수로 받아 처리함
        //ajax 호출
        const oReq = new XMLHttpRequest();
        oReq.addEventListener("load", () => {
            const list = JSON.parse(oReq.responseText).body;
            console.log(list);
            fn(list);

        });

        oReq.open('GET', dataURL);
        oReq.send();

    }
    
    insertPosts(list) {
       list.forEach((value) => {
            this.blogList.innerHTML += `
            <li>
                <a href=${value.link}> ${value.title} </a>
                <div class="like">찜하기</div>
            </li>`;
        });
    }

}




export default Blog; 
// npm run devserver 