const form = document.getElementById('form');
const inputBook = document.getElementById('book');
const inputAuthor = document.getElementById('author');
const Container = document.getElementById('container');

// Add Books

const addBook = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const authorbook = inputAuthor.value;
    const titlebook = inputBook.value;
    const itemlist = document.createElement('div');
    itemlist.className = 'Itemlist';

    const obj = {
      Title: titlebook,
      Author: authorbook,
    };

    const book = `
    <ul class=''>
    <li>${obj.Title}</li>
    <li>${obj.Author}</li>
    </ul>
    `;
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove';
    removeBtn.id = 'removeBtn';
    removeBtn.innerText = 'Remove';

    itemlist.innerHTML = book;
    itemlist.appendChild(removeBtn);
    Container.append(itemlist);

    const result = JSON.stringify(obj);
    localStorage.setItem('data', result);
  });
};

addBook();

const getDataStored = JSON.parse(localStorage.getItem('data'));

window.onload = () => {
  if (getDataStored) {
    inputAuthor.value = getDataStored.Author;
    inputBook.value = getDataStored.Title;
  }
};

// Remove book

const removeBook = () => {
  Container.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
      const item = e.target.parentElement;
      Container.removeChild(item);
    }
  });
};

removeBook();
