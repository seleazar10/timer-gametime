//time round started
var start = new Date().getTime();
var currTime = new Date().toLocaleTimeString();
console.log(start);
console.log(currTime);

//event listener to hide shape and display time taken
document.getElementById("shapes").addEventListener("click", function () {
  console.log("shape clicked");

  var end = new Date().getTime();
  console.log(end);

  //   calculate time taken to click shape
  const timeTaken = (end - start) / 1000;
  console.log(timeTaken);
  // display time taken
  document.getElementById("timer").innerHTML = timeTaken + "s";
  // remove shape from UI
  document.getElementById("shapes").style.display = "none";

  randTime = Math.floor(Math.random());

  setTimeout(() => {
    displayShape();
  }, 2000);
});

var displayShape = function () {

    //rest timer start
  start = new Date().getTime();
  //display shape on click
  document.getElementById("shapes").style.display = "block";

  
  
  //randomize background color
  var colors = ['blue', 'red', 'green', 'purple', 'yellow']
  var randColor = colors[Math.floor(Math.random()*colors.length)]
  console.log(randColor)
  document.getElementById("shapes").style.backgroundColor = randColor
  
  //randomize border radius
  var borderRad = [0, 50];
  var randBorRad = borderRad[Math.floor(Math.random() * borderRad.length)];
  console.log(randBorRad);
  document.getElementById('shapes').style.borderRadius = randBorRad.toString()+"%";

//random position-top
var topArr = [20, 40, 50, 80]

var randTop = topArr[Math.floor(Math.random()*topArr.length)]
var randLeft = topArr[Math.floor(Math.random()*topArr.length)]

document.getElementById("shapes").style.left = randLeft.toString()+"%"
document.getElementById("shapes").style.top = randTop.toString()+"%"






};



