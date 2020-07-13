class Blog {
    constructor(){
        console.log('Blog is started!');
        const dataURL = "./data/data.json";
        this.setInitData(dataURL);
    }

    setInitData(dataURL) {
        this.getData(dataURL);
    }

    getData(dataURL){
        //ajax 호출
        const oReq = new XMLHttpRequest();
        oReq.addEventListener("load", () => {
            const list = JSON.parse(oReq.responseText).body;
            console.log(list);

            list.forEach((value) => {
                console.log(value.title);
            })
            


        });

        oReq.open('GET', dataURL);
        oReq.send();



    }
    
}


export default Blog; 
// npm run devserver 