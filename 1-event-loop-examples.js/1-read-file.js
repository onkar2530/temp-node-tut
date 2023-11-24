const { log } = require('console');
const {readFile} = require('fs');

console.log("starting first task");

// CHECK FILE PATH
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log("first task completed");
});

console.log("starting second task");

// CHECK FILE PATH
readFile('./content/second.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log("second task completed");
});

console.log("All tasks completed");