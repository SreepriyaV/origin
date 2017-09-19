'use strict';

const express = require( 'express' );
const app = express();
const routes = require('./routes'); //gets index.js page 
app.use('/', routes); // takes contents of index.js 

//var index=require('./routes/index.js');  // same as require('./routes')
 // creates an instance of an express application
const volleyball = require('volleyball');
const nunjucks=require('nunjucks');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views',{ noCache: true }); // point nunjucks to the proper directory for templates



nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(function (req, res, next) {
    // do your logging here
    console.log(req.method,req.path);
    next();
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
})

app.use(express.static('public')); // matches with all the public files and fetches it  eg http://localhost:3000/stylesheets/style.css

app.use(volleyball);

app.listen(3000,function()
{
    console.log("I am listening to port no 3000");
})




/*
var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
*/
//nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });
//logs to the terminal

/*
app.get('/', function(req, res,next) {
    const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
res.render( 'index', {title: 'Hall of Fame', people: people} );  // loads the html passed as parameters 
   //res.render('index.html',locals); // loads the index.html using populated values . locals: object defined above 
    next();
});
*/


/*app.get('/stylesheets/style.css',function(req,res,next)
{

  //  var fileName = req.params.name;
  res.sendFile('/stylesheets/style.css');

})*/

/*app.get('/', function (req, res,next) {
  res.send('Welcome!');
  next();
})*/


/*
app.get('/news',function(req,res,next)
{
    res.send("You can read news")
    next();
})

app.get('/special/',function(req,res,next)
{
res.send("You are Special ");
    next();
})

app.use( function (req, res,next) {
  console.log(req.method,res.statusCode);
  next();
})

app.use('/special/', function (req, res) {
  console.log("you reached the special area.");
})
*/








