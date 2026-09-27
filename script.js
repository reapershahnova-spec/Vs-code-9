var text = "";
text += "Random Numbers:<br><br>";
for (var i = 1; i <= 5; i++) {
    var randomNumber = Math.random() * 100;
    text += "Random number " + i + " = " + randomNumber + "<br/>";
}
var number = Math.random() * 100;
text += "<br/>Random number = " + number;
var roundedNumber = Math.round(number);
text += "<br/>Rounded random number = " + roundedNumber;
var today = new Date();
text += "<br/><br/>Current date and time = " + today;
document.getElementById("demo").innerHTML = text;