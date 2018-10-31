document.addEventListener('DOMContentLoaded', function(){

var button = document.querySelector(".switch.on");
var status = document.querySelector(".status")
var body = document.querySelector(".light")

console.log(button.className);

button.addEventListener('click', function() {
  if (button.className === "switch on") {
    button.className = "switch off"
    body.className = "dark"
    status.innerText = "Where did the lights go?"
  } else {
  button.className = "switch on"
  body.className = "light"
  status.innerText = "It's so bright in here!"
}
});

})
