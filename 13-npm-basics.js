// npm (node package manager) - comes with node
//npm --version or node --v
//local dependency - use only in current project
// npm -i <PackageName>
//
//global dependency - use in any project
//npm install -g <ProjectName>

//package.json - manifest file (stores important info about project and package)
//3 ways to create package.json
//create manually and type every property
//npm init (step by step, eneter value for each property on console)
//npm init -y (defaults every property)


//npm install
//this command installs all dependencies from the package.json file
//this is useful when share code, as node_modules will not be pushed to the remote repo
//and user will have to insall the depencies by running npm install

//npm install <packagename> -D
// to install dev dependecies - dependecies which we may not want in production
// e.g. formatting, code lint, etc

const _ = require('lodash');

const items = [1,9,3,2,[2,[3,[4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems[1]);
console.log("hyw");
