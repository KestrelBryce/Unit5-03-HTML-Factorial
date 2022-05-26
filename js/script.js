  /* This function gets the user's two numbers and multiplies them togrther. 
*/

function displayGreeting () {

    // initializing values
  
  // initializing counter
  let counter = 1

  let factorial = 1

  let finalFact = ""
  
    // user input
  let userNum = parseInt((document.getElementById("userNum-Here").value));
  
    // loop code
    do  {

      factorial = factorial * counter
    
      finalFact = finalFact + factorial + "<br>"
    
      counter = counter + 1
      
    }  while  (counter <= userNum)

    // return string
    document.getElementById("greeting").innerHTML = "hjihjni " + factorial
        



  //document.getElementById("greeting").innerHTML = "hi"
  
}
//sum = sum + int2 + "<br>"

    // add to the counter
    //sum = sum + counter
  //(let counter = 0;  counter <= int1;  counter++)