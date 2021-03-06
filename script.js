"use strict";
// Theme switcher
const themeOne = document.getElementById("theme-one");
const themeTwo = document.getElementById("theme-two");
const themeThree = document.getElementById("theme-three");

// Keypad buttons
const del = document.querySelector(".keypad__buttons--del");
const reset = document.querySelector(".keypad__buttons--reset");
const equals = document.querySelector(".keypad__buttons--equals");
const add = document.querySelector(".keypad__buttons--add");
const subtract = document.querySelector(".keypad__buttons--subtract");
const divide = document.querySelector(".keypad__buttons--divide");
const multiply = document.querySelector(".keypad__buttons--multiply");

// Input
const input = document.querySelector(".input");

const number = [1, 2, 3, 4, 5, 6];

themeOne.addEventListener("click", function () {
  document.body.style = "background-color: hsl(222, 26%, 31%)"; // Body bg color
  document.querySelector(".top").style = "color: #fff"; // text color for top class
  document.querySelector(".top__right--box-circle").style = "left: 3px;";
  document.querySelector(".top__right--box-circle").style =
    "background-color: hsl(6, 63%, 50%)"; // switch circle
  document.querySelector(".top__right--box").style =
    "background-color: hsl(223, 31%, 20%)"; // switch background
  document.querySelector(".input").style =
    "background-color: hsl(224, 36%, 15%); color: #fff"; // screen bg and text color
  document.querySelector(".keypad").style =
    "background-color: hsl(223, 31%, 20%)"; // Keypad bg

  // Keypad buttons
  const keypadButtons = document.querySelectorAll(".keypad__buttons");
  for (let i = 0; i < keypadButtons.length; i++) {
    keypadButtons[i].style.cssText =
      "background-color: hsl(30, 25%, 89%); color: hsl(221, 14%, 31%); box-shadow: 0 4px 0 0 hsl(28, 16%, 65%);";
  }

  // Delete and reset buttons
  document.querySelector(".keypad__buttons--del").style =
    "background-color: hsl(225, 21%, 49%); box-shadow: 0 4px 0 0 hsl(224, 28%, 35%)";
  document.querySelector(".keypad__buttons--reset").style =
    "background-color: hsl(225, 21%, 49%); box-shadow: 0 4px 0 0 hsl(224, 28%, 35%)";

  // Equal button
  document.querySelector(".keypad__buttons--equals").style =
    "background-color: hsl(6, 63%, 50%); box-shadow: 0 4px 0 0 hsl(6, 70%, 34%)";

  // attribution
  document.querySelector(".attribution").style = "color: #fff";
});

themeTwo.addEventListener("click", function () {
  // body
  document.body.style = "background-color: hsl(0, 0%, 90%);";

  // top
  document.querySelector(".top").style = "color: hsl(60, 10%, 19%)";
  document.querySelector(".top__right--box-circle").style =
    "left: 24px; background-color: hsl(25, 98%, 40%)";
  document.querySelector(".top__right--box").style =
    "background-color: hsl(0, 5%, 81%)";

  // input
  document.querySelector(".input").style =
    "background-color: hsl(0, 0%, 93%); color: hsl(60, 10%, 19%)";

  // keypad
  document.querySelector(".keypad").style = "background-color: hsl(0, 5%, 81%)";

  // keypad buttons
  const keypadButtons = document.querySelectorAll(".keypad__buttons");
  for (let i = 0; i < keypadButtons.length; i++) {
    keypadButtons[i].style.cssText =
      "background-color: hsl(30, 25%, 89%); color: hsl(60, 10%, 19%); box-shadow: 0 4px 0 0 hsl(28, 16%, 65%);";
  }

  // delete and reset buttons
  document.querySelector(".keypad__buttons--del").style =
    "background-color: hsl(185, 42%, 37%); box-shadow: 0 4px 0 0 hsl(185, 58%, 25%)";
  document.querySelector(".keypad__buttons--reset").style =
    "background-color: hsl(185, 42%, 37%); box-shadow: 0 4px 0 0 hsl(185, 58%, 25%)";

  // equal button
  document.querySelector(".keypad__buttons--equals").style =
    "background-color: hsl(25, 98%, 40%); box-shadow: 0 4px 0 0 hsl(25, 99%, 27%)";

  // attribution
  document.querySelector(".attribution").style = "color: hsl(60, 10%, 19%)";
});

themeThree.addEventListener("click", function () {
  // body
  document.body.style = "background-color: hsl(268, 75%, 9%);";

  // top
  document.querySelector(".top").style = "color: hsl(52, 100%, 62%)";
  document.querySelector(".top__right--box-circle").style =
    "left: 45px; background-color: hsl(176, 100%, 44%)";
  document.querySelector(".top__right--box").style =
    "background-color: hsl(268, 71%, 12%)";

  // input
  document.querySelector(".input").style =
    "background-color: hsl(268, 71%, 12%); color: hsl(52, 100%, 62%)";

  // keypad
  document.querySelector(".keypad").style =
    "background-color: hsl(268, 71%, 12%)";

  // keypad buttons
  const keypadButtons = document.querySelectorAll(".keypad__buttons");
  for (let i = 0; i < keypadButtons.length; i++) {
    keypadButtons[i].style.cssText =
      "background-color: hsl(268, 47%, 21%); color: hsl(52, 100%, 62%); box-shadow: 0 4px 0 0 hsl(290, 70%, 36%);";
  }

  // delete and reset buttons
  document.querySelector(".keypad__buttons--del").style =
    "background-color: hsl(281, 89%, 26%); box-shadow: 0 4px 0 0 hsl(285, 91%, 52%)";
  document.querySelector(".keypad__buttons--reset").style =
    "background-color: hsl(281, 89%, 26%); box-shadow: 0 4px 0 0 hsl(285, 91%, 52%)";

  // equal button
  document.querySelector(".keypad__buttons--equals").style =
    "background-color: hsl(176, 100%, 44%); box-shadow: 0 4px 0 0 hsl(177, 92%, 70%)";

  // attribution
  document.querySelector(".attribution").style = "color: hsl(52, 100%, 62%)";
});

del.addEventListener("click", function () {
  const num = document.querySelector("input").value;
  document.querySelector("input").value = num.substr(0, num.length - 1);
});

reset.addEventListener("click", function () {
  document.calc.number.value = "";
});

// +
add.addEventListener("click", function (e) {
  document.calc.number.value = document.calc.number.value + "+";
});

// -
subtract.addEventListener("click", function () {
  document.calc.number.value = document.calc.number.value + "-";
});

// *
multiply.addEventListener("click", function () {
  document.calc.number.value = document.calc.number.value + "*";
});

// /
divide.addEventListener("click", function () {
  document.calc.number.value = document.calc.number.value + "/";
});

// =
equals.addEventListener("click", function () {
  document.calc.number.value = eval(calc.number.value);
});

function isNumberKey(txt, evt) {
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode == 46) {
    //Check if the text already contains the . character
    if (txt.value.indexOf('.') === -1) {
      return true;
    } else {
      return false;
    }
  } else {
    if (charCode > 31 &&
      (charCode < 48 || charCode > 57))
      return false;
  }
  return true;
}

