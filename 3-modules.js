//Modules
// CommonJS, every file is modile (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor')
//require import and invoke any function/log calls inside the module
require('./7-mind-grenade')

//console.log(data);
// sayHi(names.onkar);
// sayHi(names.kaku);
// sayHi(`fsd`);
//console.log(name);