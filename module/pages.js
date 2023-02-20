const newBookSection = document.querySelector('.new-book-section');
const contactSection = document.getElementById('contact-section');
const booksSection = document.getElementById('books-section');

export const renderListBook = () => {
  booksSection.classList.remove('display');
  contactSection.classList.add('display');
  newBookSection.classList.add('display');
};

export const renderContactform = () => {
  newBookSection.classList.remove('display');
  booksSection.classList.add('display');
  contactSection.classList.add('display');
};

export const renderContactSection = () => {
  contactSection.classList.remove('display');
  newBookSection.classList.add('display');
  booksSection.classList.add('display');
};

export const renderPageContent = () => {
  contactSection.classList.add('display');
  newBookSection.classList.add('display');
  booksSection.classList.remove('display');
};
