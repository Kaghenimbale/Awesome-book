const newBookSection = document.querySelector('.new-book-section');
const contactSection = document.getElementById('contact-section');
const booksSection = document.getElementById('books-section');
const list = document.getElementById('list');
const addNew = document.getElementById('add-new');
const newContact = document.getElementById('contact');

window.addEventListener('DOMContentLoaded', () => {
  contactSection.classList.add('display');
  newBookSection.classList.add('display');
});

list.addEventListener('click', () => {
  contactSection.classList.add('display');
  newBookSection.classList.add('display');
});

addNew.addEventListener('click', () => {
  contactSection.classList.add('display');
  booksSection.classList.add('display');
});

newContact.addEventListener('click', () => {
  booksSection.classList.add('display');
  newBookSection.classList.add('display');
});
