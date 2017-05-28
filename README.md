Build a calculator application using jQuery, Node, Express

Front End / Client Functionality & Server Logic
IMPORTANT:  The logic for the calculation needs to be implemented on the Server.

The FRONT END will display
[X] INPUT fields  -->  2 values
[X] BUTTONS -->  ADD, SUBTRACT, MULTIPLY, DIVIDE
[X] BUTTON  -->  CLEAR

The CLIENT SIDE will bundle up the inputs and mathematical operator into an
object and then send it to the server via a POST request.
When the object leaves the Client, it should look something like this:
{
  x: 3,
  y: 4,
  type: "add"
}

Once the SERVER receives the request, it will compute the numbers in one of
four different ways:
1. Addition
2. Subtraction
3. Multiplication
4. Division

Once the result of the mathematical operation is determined, it should be
sent back down to the CLIENT where it will be displayed on the FRONT END.




HARD MODE
Create a calculator-like Front End.

Convert the input fields for the two values to buttons.
This experience would allow the user to
1. Click on a numerical buttons
2. Click on a mathematical operator
3. Click on a numerical button
4. Click on an equal button that sends all of the information to the server
