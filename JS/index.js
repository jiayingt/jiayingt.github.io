// Do not amend these!
function run() {
    var input = document.getElementById("input").value.split(" ");
    if (input.length >= 3) {
      main(parseInt(input[0]), parseInt(input[1]), parseInt(input[2]));
    } else {
      console.log("Please enter 3 numbers.");
    }
  }
  
  function main(a, b, c) {
    // Use a, b and c to help you!
    // TODO: Your code below.
    var positions = [];
    //a is total members present, b is size of new comms, c is current position
    while(c>0 && a>b) {
        a=a-1;
        c=c-b+1;
        if (c<0) {
            c=c+a+1;
        }
        positions.push(c);
    }
    console.log(positions);
    if (c == 0) {
        console.log("Sorry, you are not selected");
    }   else {
        console.log("Congratulations, you are in!");
    }
  }

var target = document.getElementById('target');
var divs = document.getElementsByTagName('div');
var stuff = document.getElementsByClassName('class1');

var button = document.getElementById("click-me");

button.addEventListener("click", hello);

function hello(e) {
    var target = document.getElementById("target");
    target.innerHTML = "Wee!";
}