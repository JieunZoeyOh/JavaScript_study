// Fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// Create HTML list item from the given data item
function createHTMLString(item) {
  return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="itme__thumbnail" />
        <span class="item__description">${item.gender}, ${item.size}</span>
      </li>
    `;
}

// 이벤트를 처리하는 함수 on으로 시작
// dataset 이용하기 😍
// buttons 안의 빈공간을 클릭하면 undefined가 나옴..(주의!)
function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key === null || value === null) return;

  // 원하는 값만 따로 모아 배열로 만들 때 => filter
  displayItems(items.filter(item => item[key] === value));
}

function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  // 이벤트 위임
  const buttons = document.querySelector('.buttons');
  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', event => onButtonClick(event, items));
}

// main
loadItems()
  .then(items => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
