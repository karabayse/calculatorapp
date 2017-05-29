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
  console.log('in calculation post');
  var calculationResponse;

  if (req.body.Type == "add"){
    calculationResponse = parseInt(req.body.Input1) + parseInt(req.body.Input2);
  } else if
      (req.body.Type == "subtract"){
    calculationResponse = parseInt(req.body.Input1) - parseInt(req.body.Input2);
  } else if
      (req.body.Type == "multiply"){
    calculationResponse = parseInt(req.body.Input1) * parseInt(req.body.Input2);
  } else if
      (req.body.Type == "divide"){
        calculationResponse = parseInt(req.body.Input1) / parseInt(req.body.Input2);
  } else if
      (req.body.Type == "clear"){
        $('#firstInput').empty();
    }
      res.send(calculationResponse.toString());
});
