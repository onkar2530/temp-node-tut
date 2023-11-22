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

//following command installs all dependencies from the package.json file
//npm install
//this is useful when share code, as node_modules will not be pushed to the remote repo
//and user will have to insall the depencies by running npm install

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
console.log(items);

const newItems = _.flattenDeep(items);
console.log(newItems);