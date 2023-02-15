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
