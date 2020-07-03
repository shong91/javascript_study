const previousObj = {
    name: "honghong",
    healthTime : "12:12"
}

const myHealth = Object.assign({}, previousObj, {
    "healthTime" : "12:20"});


console.log(myHealth);