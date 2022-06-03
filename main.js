let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "0";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
      screenValue = "";
      screenValue += screen.value;
    } else if (buttonText == "DEL") {
      let number = screen.value;
      let len = number.length - 1;
      let newnumber = number.substring(0, len);
      screen.value = newnumber;
      screenValue = "";
      screenValue += newnumber;
    } else if (buttonText == "%") {
      screenValue += "/100";
      screen.value += "%";
    } else {
      if (screenValue == "0" && buttonText != "0") {
        screenValue = "";
      }
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
