var active = "1st floor";
var buttons = document.getElementsByClassName("button");

buttons[0].classList.add("active");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    var target = event.target;

    if (target.tagName.toLowerCase() !== "h2") {
      target = target.childNodes[1];
    }

    for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("active");

      if (buttons[j].childNodes[1].innerHTML == target.innerHTML) {
        buttons[j].classList.add("active");

        var map = document.getElementById("map");

        if (j === 0) {
          map.setAttribute("src", "/img/first-floor-map.svg");
        } else {
          map.setAttribute("src", "/img/second-floor-map.svg");
        }
      }
    }
  });
}
