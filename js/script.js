  /* This function gets the user's number and finds its factorial. 
*/

function displayGreeting () {

    // initializing values
  
  // initializing counter
  let counter = 1

  let factorial = 1
  
  
    // user input
  let userNum = parseInt((document.getElementById("userNum-Here").value));

  
    // loop code
    do  {

      factorial = factorial * counter
    
      counter = counter + 1
      
    }  while  (counter <= userNum)

    // return string
    document.getElementById("greeting").innerHTML = "You entered " + userNum + ". The factorial of " + userNum + " is " + factorial + "."

  
}
