const EventEmitter = require('events');

const REPONSE = 'reponse';

const customEmitter = new EventEmitter();

customEmitter.on('REPNSE', ()=>{
    console.log('data recvd');
});


customEmitter.on(REPONSE, (name, id)=>{
    console.log(`diff data recvd ${name} ${id}`);
});

customEmitter.emit(REPONSE);
customEmitter.emit(REPONSE,'john', 34);