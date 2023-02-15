const titleInput = document.getElementById('book');
const authorInput = document.getElementById('author');
const form = document.getElementById('form');
const container = document.getElementById('container');
const bookskey = 'books';

class Book {
  constructor(books) {
    this.books = books;
  }

  displayBooks() {
    container.innerHTML = '';
    this.books.forEach((book) => {
      const bookElement = this.getBookElement(book);

      container.appendChild(bookElement);
    });

    this.removeBook();
  }

  getBookElement = ({ title, author, id }) => {
    const newbook = document.createElement('li');
    newbook.innerHTML = `
    <div class="description">
    <h2>${title}</h2>
    by
    <h3>${author}</h3>
    </div>
    <button data-id=${id} id='remove'>Remove</button>
    `;
    return newbook;
  }

  AddBook(newbooks) {
    this.books.push(newbooks);
    localStorage.setItem(bookskey, JSON.stringify(this.books));

    this.displayBooks();
    form.reset();
  }

  removeBook() {
    const removeBtns = document.querySelectorAll('#remove');

    removeBtns.forEach((removeBtn) => {
      removeBtn.addEventListener('click', (e) => {
        const { id } = e.target.dataset;
        this.books = this.books.filter((book) => book.id !== +id);
        localStorage.setItem(bookskey, JSON.stringify(this.books));
        this.displayBooks();
      });
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const storeBookLocally = localStorage.getItem(bookskey)
    ? JSON.parse(localStorage.getItem(bookskey)) : [];

  const book = new Book(storeBookLocally);
  book.displayBooks();

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const bookData = {
      title: titleInput.value,
      author: authorInput.value,
      id: Date.now(),
    };
    book.AddBook(bookData);
  });
});
