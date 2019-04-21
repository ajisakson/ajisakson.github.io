var i = 0;
var txt = 'Austin Isakson';
var speed = 120;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("headerTxt").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// window.onload = typeWriter;
