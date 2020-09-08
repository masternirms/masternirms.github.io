var pos = 0;

var text = "Hi there!";
var speed = 200;

setTimeout(typeWriter, speed);

function typeWriter() {
  if (pos < text.length) {
    document.getElementById("welcome").innerHTML += text.charAt(pos);

    pos++;
    setTimeout(typeWriter, speed);
  } else {
  	setTimeout(erase, speed+100);
  }
}
