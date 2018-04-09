function getResults(){
  var words= 0;
  var spaces= 0;
  var sentences= 0;
  var average= 0;
  var userInput= document.getElementById("userText").value;
  var totalLength= userInput.length;

  for (var i = 0; i < totalLength; i++) {
       if (userInput[i] === " ") {
         spaces++;
       }
       if(userInput[i] === "." || userInput[i] === "?" || userInput[i] === "!"){
         sentences++;
       }
     }

    words= spaces + 1;
    average= words/sentences;

document.getElementById("words").innerHTML = "Total Words" + words;
document.getElementById("sentences").innerHTML = "Total Sentences" + sentences;
document.getElementById("average").innerHTML = "Average Words Per Sentence" + average;
document.getElementById("spaces").innerHTML = "Total Spaces" + spaces;
  }
