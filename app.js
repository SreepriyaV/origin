const express = require( 'express' );
const app = express(); // creates an instance of an express application
const volleyball = require('volleyball');

app.use(function (req, res, next) {
    // do your logging here
    console.log(req.method,req.path);
    next();
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
})


app.get('/', function (req, res,next) {
  res.send('Welcome!');
  next();
})
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

app.use(volleyball);

app.listen(3000,function()
{
    console.log("I am listening to port no 3000");
})