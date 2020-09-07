'use strict';
const form = document.querySelector('.js-form'),
  input = form.querySelector('input'),
  greeting = document.querySelector('.js-greetings'),
  toDoForm = document.querySelector('.js-toDoForm'),
  left_container = document.querySelector('.left_container');

const USER_LS = 'currentUser',
  SHOWING_CN = 'showing';
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  left_container.classList.remove('middle_container');
  toDoForm.classList.add(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `"Good evening, ${text}"`;
}
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    //다른것 다 안보이게 하기
    left_container.classList.add('middle_container');
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}
init();
