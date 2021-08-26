'use strict';
// Theme switcher
const themeOne = document.getElementById('theme-one');
const themeTwo = document.getElementById('theme-two');
const themeThree = document.getElementById('theme-three');

themeOne.addEventListener('click', function() {
  // Theme switcher
  document.querySelector('.top__right--box-circle').style = 'left: 3px;';
  document.querySelector('.top__right--box-circle').style = 'background-color: hsl(6, 63%, 50%)';
  document.querySelector('.top__right--box').style = 'background-color: hsl(223, 31%, 20%)';
  document.querySelector('.input').style = 'background-color: hsl(224, 36%, 15%); color: #fff'; // screen bg and text color
  document.querySelector('.keypad').style = 'background-color: hsl(223, 31%, 20%)'; // Keypad bg
  
  // Keypad buttons
  const keypadButtons = document.querySelectorAll('.keypad__buttons');
  for (let i = 0; i < keypadButtons.length; i++) {
    keypadButtons[i].style.cssText = 'background-color: hsl(30, 25%, 89%); color: hsl(221, 14%, 31%); box-shadow: 0 4px 0 0 hsl(28, 16%, 65%);';
  };
  
  // Delete and reset buttons
  document.querySelector('.keypad__buttons--del').style = 'background-color: hsl(225, 21%, 49%); box-shadow: 0 4px 0 0 hsl(224, 28%, 35%)';
  document.querySelector('.keypad__buttons--reset').style = 'background-color: hsl(225, 21%, 49%); box-shadow: 0 4px 0 0 hsl(224, 28%, 35%)';

  // Equal button
  document.querySelector('.keypad__buttons--equals').style = 'background-color: hsl(6, 63%, 50%); box-shadow: 0 4px 0 0 hsl(6, 70%, 34%)';
});

themeTwo.addEventListener('click', function() {
  document.querySelector('.top__right--box-circle').style = 'left: 24px;';
});

themeThree.addEventListener('click', function() {
  document.querySelector('.top__right--box-circle').style = 'left: 45px;';
});