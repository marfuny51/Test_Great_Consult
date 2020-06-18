"use strict"

var telRE=/^\d{1,}$/;

var buttonGet = document.getElementById('input_second');
buttonGet.addEventListener('click', sentInfo, false);

function sentInfo(EO) {
  var phoneNumber = document.getElementById('input_first');
  var phoneNumberValue = phoneNumber.value;
  if (telRE.test(phoneNumberValue)) {
    alert('Мы получили Ваш запрос. В ближайшее время с Вами свяжемся.');
  }
  else if (phoneNumberValue ===''){
    alert('Введите, пожалуйста, номер телефона.');
  }
  else {
    phoneNumber.value = '';
    alert('Номер телефона не может содержать буквы!');
  }
  EO.preventDefault();
}

var firstWindow = document.getElementById('first');
firstWindow.addEventListener('click', chooseWindow, false);

function chooseWindow(EO) {
  var windowImage = document.getElementsByClassName('calc_choice')[0];
  var windowName = document.getElementsByClassName('choice_name')[0];
  windowName.textContent = 'Одностворчатое окно KBE';
  windowImage.src = 'images/window1.jpg';
  windowImage.style.width = '7vw';
  windowImage.style.left = '9vw';
}

var secondWindow = document.getElementById('second');
secondWindow.addEventListener('click', chooseWindow2, false);

function chooseWindow2(EO) {
  var windowImage = document.getElementsByClassName('calc_choice')[0];
  var windowName = document.getElementsByClassName('choice_name')[0];
  windowName.textContent = 'Двухстворчатое окно KBE';
  windowImage.src = 'images/window2.jpg';
  windowImage.style.width = '13vw';
  windowImage.style.left = '7vw';
}

var thirdWindow = document.getElementById('third');
thirdWindow.addEventListener('click', chooseWindow3, false);

function chooseWindow3(EO) {
  var windowImage = document.getElementsByClassName('calc_choice')[0];
  var windowName = document.getElementsByClassName('choice_name')[0];
  windowName.textContent = 'Трехстворчатое окно KBE';
  windowImage.src = 'images/window3.jpg';
  windowImage.style.width = '18vw';
  windowImage.style.left = '6vw';
}

var forthWindow = document.getElementById('forth');
forthWindow.addEventListener('click', chooseWindow4, false);

function chooseWindow4(EO) {
  var windowImage = document.getElementsByClassName('calc_choice')[0];
  var windowName = document.getElementsByClassName('choice_name')[0];
  windowName.textContent = 'Балконный блок';
  windowImage.src = 'images/window4.jpg';
  windowImage.style.width = '15vw';
  windowImage.style.left = '6vw';
  windowImage.style.top = '5vw';
}

var fifthWindow = document.getElementById('fifth');
fifthWindow.addEventListener('click', chooseWindow5, false);

function chooseWindow5(EO) {
  var windowImage = document.getElementsByClassName('calc_choice')[0];
  var windowName = document.getElementsByClassName('choice_name')[0];
  windowName.textContent = 'Остекление балкона';
  windowImage.src = 'images/window5.jpg';
  windowImage.style.width = '15vw';
  windowImage.style.left = '6vw';
  windowImage.style.top = '5vw';
}
