//holds all tweets and gives back the methods for interacting with them 
const _ = require('lodash'); //library module 

/*var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var deep = _.cloneDeep(objects); // clones the list of data as a new copy 
console.log(deep);*/ // returns the same array of objects 

var data=[]; //stores the tweets  // not doing module.export bcz making it as priate var 

//adding,listing and finding tweets :
function add (name, content) {
  data.push({ name: name, content: content });
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));   //filters from the cloned data and returns new filterd array , the properties could be : func, value anything to mact with original data 
}


const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};


// fake tweets : 



module.exports = { add: add, list: list, find: find };

const getFakeName = function() {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (let i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );  // adds the name and the content 
}

console.log(data); // list of name and tweets 