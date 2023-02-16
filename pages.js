const newBookSection = document.querySelector('.new-book-section');
const contactSection = document.getElementById('contact-section');
const booksSection = document.getElementById('books-section');
const list = document.getElementById('list');
const addNew = document.getElementById('add-new');
const newContact = document.getElementById('contact');

// window.addEventListener('DOMContentLoaded', () => {
//   contactSection.classList.add('display');
//   newBookSection.classList.add('display');
// });

list.addEventListener('click', () => {
  booksSection.classList.remove('display')
  contactSection.classList.add('display')
  newBookSection.classList.add('display')
});

addNew.addEventListener('click', () => {
  newBookSection.classList.remove('display')
  booksSection.classList.add('display')
  contactSection.classList.add('display')
});

newContact.addEventListener('click', () => {
  contactSection.classList.remove('display')
  newBookSection.classList.add('display')
  booksSection.classList.add('display')
});
