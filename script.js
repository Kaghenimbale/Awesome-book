const titleInput = document.getElementById('book');
const authorInput = document.getElementById('author');
const form = document.getElementById('form');
const container = document.getElementById('container');
const bookskey = 'books';
let deleteBtns = document.querySelectorAll('#remove');

class Book {
  constructor (title, author, id) {
    this.author = author;
    this.title = title;
    if(id) {
      this.id = id;
    }
    else {
      this.id = 1;
    }
  }

  AddBook (){
    const book = document.createElement('li');
    book.innerHTML = `
    <div class="description">
    <h2>${this.title}</h2>
    by
    <h3>${this.author}</h3>
    </div>
    <button data-id=${this.id} id='remove'>Remove</button>
    `;
    return book;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const storeBookLocally = JSON.parse(localStorage.getItem(bookskey));
  const Title = titleInput.value;
  const Author = authorInput.value;
  const last = storeBookLocally[storeBookLocally.length -1] 
  const id = last ? last.id + 1 : 1; 
  const book = new Book(Title, Author, id);
  
  const createSingleBook = book.AddBook();
  const newsBooks = [...storeBookLocally]
  newsBooks.push(book);
  localStorage.setItem(bookskey, JSON.stringify(newsBooks));
  container.appendChild(createSingleBook);
  form.reset();
  deleteBtns = document.querySelectorAll('#remove');
  removeBook(deleteBtns);
});

// RemoveBook
const renderBooks = (books) => {
  container.innerHTML = "";
  books.forEach((book, index) => {
    const title = book.title;
    const author = book.author;
    const id = book.id;
  
    const instanceBook = new Book(title, author, id);
    const createdBookElement = instanceBook.AddBook();
    container.appendChild(createdBookElement);
  });

  // Remove
  deleteBtns = document.querySelectorAll('#remove');
  removeBook(deleteBtns);
};

const removeBook = (deleteBtns) => { 
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const storeBookLocally = JSON.parse(localStorage.getItem(bookskey));
      const bookId = Number(e.target.getAttribute("data-id"));
      const filterBooks = storeBookLocally.filter((book) => book.id !== bookId);
      renderBooks(filterBooks);

      localStorage.setItem(bookskey, JSON.stringify(filterBooks))
    })
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const storeBookLocally = localStorage.getItem(bookskey) ? JSON.parse(localStorage.getItem(bookskey)) : [];
  renderBooks(storeBookLocally);
});
