//keeps running the call back after the specified intervals

const { forEach } = require("lodash");

//until interrupted or some error
setInterval(() => {
    console.log("I am in interval");
}, 1000);

console.log("I will run first");

setTimeout(() => {
    console.log("I am in timeout");
}, 1000);

const syncFunction = (name)=>{
    console.log(`hello ${name}`);
};

syncFunction('onkar');