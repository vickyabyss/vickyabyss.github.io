var quoteArray = ["hi there i'm vicky"];

var textPosition = 0; 
// speed in milliseconds
var speed = 100;
typewriter = () => {
  document.querySelector("#quote").innerHTML = quoteArray[0].substring(0, textPosition) + '<span>\u25AE</span>';
  
  if(textPosition++ != quoteArray[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter)


