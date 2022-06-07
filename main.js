let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
let ans = "";
let x = "1";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "÷") {
      buttonText = "/";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "0";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
      screenValue = "";
      screenValue += screen.value;
      ans = "";
      ans += screen.value;
    } else if (buttonText == "DEL" && screenValue.length > 1) {
      let number = screen.value;
      let len = number.length - 1;
      let newnumber = number.substring(0, len);
      screen.value = newnumber;
      screenValue = "";
      screenValue += newnumber;
    } else if (buttonText == "DEL" && screenValue.length == 1) {
      screenValue = "0";
      screen.value = screenValue;
    } else if (buttonText == "%") {
      screenValue += "/100";
      screen.value += "%";
    } else if (buttonText == "sin") {
      screenValue += "*"+x;
      screen.value = eval(screenValue);
      screen.value = Math.sin(screen.value);
      screenValue = "";
      screenValue += screen.value;
      ans = "";
      ans += screen.value;
    } else if (buttonText == "cos") {
      screenValue += "*"+x;
      screen.value = eval(screenValue);
      screen.value = Math.cos(screen.value);
      screenValue = "";
      screenValue += screen.value;
      ans = "";
      ans += screen.value;
    } else if (buttonText == "tan") {
      screenValue += "*"+x;
      screen.value = eval(screenValue);
      screen.value = Math.tan(screen.value);
      screenValue = "";
      screenValue += screen.value;
      ans = "";
      ans += screen.value;
    } else if (buttonText == "ln") {
      screen.value = Math.log(screen.value);
      screenValue = "";
      screenValue += screen.value;
      ans = "";
      ans += screen.value;
    } else if (buttonText == "log") {
      screen.value = Math.log10(screen.value);
      screenValue = "";
      screenValue += screen.value;
      ans = "";
      ans += screen.value;
    } else if (buttonText == "√") {
      screen.value = Math.sqrt(screen.value, 2);
      screenValue = "";
      screenValue += screen.value;
      ans = "";
      ans += screen.value;
    } else if (buttonText == "e") {
      buttonText = "2.718281828459045";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "π") {
      buttonText = Math.PI;
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "φ") {
      buttonText = "1.618033988749895";
      screenValue = "";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "x²") {
      screen.value = Math.pow(screen.value, 2);
      screenValue = "";
      screenValue += screen.value;
      ans = "";
      ans += screen.value;
    } else if (buttonText == "x!") {
      var i, num, f;
      f = 1;
      num = screen.value;
      for (i = 1; i <= num; i++) {
        f = f * i;
      }
      i = i - 1;
      screen.value = f;
      screenValue = "";
      screenValue += screen.value;
      ans = "";
      ans += screen.value;
    } else if (buttonText == "ANS") {
      screen.value = ans;
      screenValue = ans;
    } else if (buttonText == "R/D/G" || buttonText == "Close") {
    } else {
      if (screenValue == "0" && buttonText != "0") {
        screenValue = "";
      }
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}

function darkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

function degree() {
  x = "3.141592653589793238462643383279/180";
}

function radians() {
  x = "1";
}

function gradian() {
  x = "3.141592653589793238462643383279/200";
}
