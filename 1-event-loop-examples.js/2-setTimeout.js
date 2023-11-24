console.log("first task");

// async calls will be offloaded so the main thread can continue executing.
//these callbacks will be executed after current code finishes
setTimeout(()=>{
    console.log("second task");
},0);

console.log("third task");