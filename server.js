// requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// listen
app.listen(3000, function (){
  console.log('server up on 3000');
});

// base url //_ when we go to slash, run this code
// get route --> mailbox: address is written in browser
app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve("views/index.html"));
});

app.post('/calculation', function(req, res){
  console.log('input request', req.body.Type);

  var Add = "add";
  var Subtract = "subtract";
  var Multiply = "multiply";
  var Divide = "divide";
  var Clear = "clear";

  var calculationResponse;

  if ('#add'){
    calculationResponse = parseInt(req.body.Input1) + parseInt(req.body.Input2);
  } else if
      ('#subtract'){
    calculationResponse = parseInt(req.body.Input1) - parseInt(req.body.Input2);
  } else if
      ('#multiply'){
    calculationResponse = parseInt(req.body.Input1) * parseInt(req.body.Input2);
  } else if
      ('#divide'){
        calculaltionResponse = parseInt(req.body.Input1) / parseInt(req.body.Input2);
  } else if
      ('#clear'){
        calculationResponse = ('');
    }
      res.send(calculationResponse.toString());
});
