'use strict';
//const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList'),
  right_container = document.querySelector('.right_container');

const TODOS_LS = 'toDos';

let toDos = [];

function redColorBtn(event) {
  const btn = event.target;
  btn.classList.add('turnRed');
}

function changeColorBtn(event) {
  const btn = event.target;
  btn.classList.remove('turnRed');
}

function deleteToDo(event) {
  // 클릭 된 버튼의 부모 요소 찾기
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  // order cleanToDos's id & li's id
  cleanToDos.forEach(function (newToDo, index) {
    newToDo.id = index + 1;
    toDoList.childNodes[index].id = newToDo.id;
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  // 자바스크립트는 local storage에 있는 모든 데이터를 String 형태로 저장한다.
  // JSON.stringify는 자바스크립트 Object를 String으로 바꿔준다.
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const newId = toDos.length + 1;
  span.innerText = text;
  delBtn.innerText = '✖';
  delBtn.addEventListener('click', deleteToDo);
  delBtn.addEventListener('mouseenter', redColorBtn);
  delBtn.addEventListener('mouseout', changeColorBtn);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = '';
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmit);
}

init();
