function loadItems() {
  return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

function createElement(item) {
  const img = document.createElement('img');
  img.setAttribute('class', 'itme__thumbnail');
  img.setAttribute('src', item.image);
  img.setAttribute('alt', item.type);

  const span = document.createElement('span');
  span.setAttribute('class', 'item__description');
  span.innerText = `${item.gender}, ${item.size}`;

  const li = document.createElement('li');
  li.setAttribute('class', 'item');
  li.setAttribute('data-type', item.type);
  li.setAttribute('data-color', item.color);

  li.append(img);
  li.append(span);

  return li;
}

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key === null || value === null) return;

  updateItems(items, key, value);
}

function updateItems(items, key, value) {
  items.forEach(item => {
    if (item.dataset[key] === value) {
      item.classList.remove('invisible');
    } else {
      item.classList.add('invisible');
    }
  });
}

loadItems().then(itmes => {
  const elements = itmes.map(createElement);
  const container = document.querySelector('.items');
  container.append(...elements);
  const buttons = document.querySelector('.buttons');
  buttons.addEventListener('click', event => onButtonClick(event, elements));
});
