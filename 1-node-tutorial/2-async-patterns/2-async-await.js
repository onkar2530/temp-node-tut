//here readFile, writeFile will be promise objects
const { readFile, writeFile } = require('fs').promises;

 const util = require('util');
// //util module has promisify function
// //basically, we don't need to create a promise mannually
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
console.log("some task1");

const costlyOperation = async()=>{
    for(let i = 0;i<100000;i++){
        //console.log(i);
        for(let j=0;j<100000;j++){
        }
    }
    console.log("finished costly function");
}

const costlyOperationPromise = util.promisify(()=>costlyOperation);

console.log("starting read write operations");
const start = async () => {
    try {
        //costly code inside async
        await costlyOperation();
        //read-write operations
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        console.log(`${first} ${second}`);
        await writeFile('./content/result-async-mind-grenade.txt', `great : ${first} ${second}`);
    } catch (err) {
        console.log(err);
    }
       
    console.log("finished async");

}
start();


console.log("some task2");


//2nd approach is where we manually write a promise
// const getData = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }

//         });
//     })
// }

// based on if the promise was resolved or rejected,
// we get the  following outcome

// getData('./conent/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));

// 1st approach where we write nested call back for multiple
// read and write operations, check file 11-fs-async.js

// readFile('./content/first.txt', 'utf8', (err, data)=>{
//     if(err){
//         return;
//     } else{
//         console.log(data);
//     }

// });