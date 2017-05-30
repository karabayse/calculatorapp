console.log('client.js');

$(document).ready(onReady);

// onReady function
function onReady(){
  console.log('in onReady function');

// event listeners  -->  calculator BUTTONS
$('.calculate').on('click', calculation);
$('.clear').on('click', clear);
} // end of onReady function

// calculation function
function calculation(){

// calculation object to send to server
  var calculationObject = {
    Input1 : $('#firstInput').val(),
    Input2 : $('#secondInput').val(),
    Type : $(this).attr('id')
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
  }); // end ajax call
}  // end calculation function

// clear function
function clear(){
  $('#firstInput').val('');
  $('#secondInput').val('');
  $('#outputDiv').empty();
}
