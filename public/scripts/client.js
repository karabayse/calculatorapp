console.log('client.js');

$(document).ready(onReady);

// global variable


// onReady function
function onReady(){
  console.log('in onReady function');

// event listeners  -->  calculator BUTTONS
  $('.button').on('click', calculation);
  $('#clear').on('click', calculation);
} // end of onReady function

// calculation function
function calculation(){
  console.log('in calculation function');
// calculation object to send to server
var calculationObject = {
  Input1 : $('#firstInput').val(),
  Input2 : $('#secondInput').val()
};
  console.log(calculationObject);
  
  // ajax call to construct request and send a JSON file
  // communicates with server --> acts as postman
  $.ajax({
    method: 'POST',
    url: '/calculation',
    data: calculationObject,
    success: function(response){
      console.log(response);
      $("#outputDiv").append("<h1>" + response + "</h1");
    }
}); // end calculation function
}
