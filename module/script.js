const titleInput = document.getElementById('book');
const authorInput = document.getElementById('author');
const form = document.getElementById('form');
const container = document.getElementById('container');
const booklist = document.querySelector('.render-books');
const inputs = document.querySelector('.new-book-section');
const bookskey = 'books';

const getBookElement = ({ title, author, id }) => {
  const newbook = document.createElement('li');
  newbook.className = 'container-list';
  newbook.innerHTML = `
  <div class="description">
  <h2>${title}</h2>
  by
  <h3>${author}</h3>
  </div>
  <button data-id=${id} id='remove'>Remove</button>
  `;
  return newbook;
};

const displayBooks = (removeBook) => {
  const storeBookLocally = localStorage.getItem(bookskey)
    ? JSON.parse(localStorage.getItem(bookskey)) : [];
  const books = [...storeBookLocally];

  container.innerHTML = '';
  books.forEach((book) => {
    const bookElement = getBookElement(book);
    container.appendChild(bookElement);
  });
  removeBook();
};

const removeBook = () => {
  const removeBtns = document.querySelectorAll('#remove');

  removeBtns.forEach((removeBtn) => {
    removeBtn.addEventListener('click', (e) => {
      const storeBookLocally = localStorage.getItem(bookskey)
        ? JSON.parse(localStorage.getItem(bookskey)) : [];
      const { id } = e.target.dataset;
      const books = storeBookLocally.filter((book) => book.id !== +id);
      localStorage.setItem(bookskey, JSON.stringify(books));

      displayBooks(removeBook);
    });
  });
};

export const AddBook = (newbooks) => {
  const storeBookLocally = localStorage.getItem(bookskey)
    ? JSON.parse(localStorage.getItem(bookskey)) : [];
  const Books = [...storeBookLocally];

  Books.push(newbooks);
  localStorage.setItem(bookskey, JSON.stringify(Books));

  displayBooks(removeBook);
  form.reset();
};

removeBook();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  booklist.classList.remove('display');
  inputs.classList.add('display');
  const bookData = {
    title: titleInput.value,
    author: authorInput.value,
    id: Date.now(),
  };
  AddBook(bookData);
});

export const initialDisplay = () => {
  displayBooks(removeBook);
};
