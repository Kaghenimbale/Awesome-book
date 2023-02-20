const newBookSection = document.querySelector('.new-book-section');
const contactSection = document.getElementById('contact-section');
const booksSection = document.getElementById('books-section');
const renderListBook = () => {
  booksSection.classList.remove('display');
  contactSection.classList.add('display');
  newBookSection.classList.add('display');
};
const renderContactform = () => {
  newBookSection.classList.remove('display');
  booksSection.classList.add('display');
  contactSection.classList.add('display');
};
const renderContactSection = () => {
  contactSection.classList.remove('display');
  newBookSection.classList.add('display');
  booksSection.classList.add('display');
};
const renderPageContent = () => {
  contactSection.classList.add('display');
  newBookSection.classList.add('display');
  booksSection.classList.remove('display');
};
