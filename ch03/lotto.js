const SETTING = {
    name: "LUCKY LOTTO!",
    count: 6,
    maxNumber: 45
};

const {count, maxNumber} = SETTING;
const lotto = new Set();

function getRandomNumber(maxNumber){
    while(lotto.size < count) {
        const randomNumber = Math.floor(Math.random() * (maxNumber -1)) +1;
        if(!lotto.has(randomNumber)) {
            lotto.add(randomNumber);
        }
    }
}

getRandomNumber(maxNumber);

lotto.forEach(n => {
    console.log(n);
});
