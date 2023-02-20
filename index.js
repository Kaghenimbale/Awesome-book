import { renderDomContentDb } from './module/script.js';
import {
  renderPageContent, renderListBook, renderContactform, renderContactSection,
} from './module/pages.js';
import renderDate from './module/date.js';

const list = document.getElementById('list');
const addNew = document.getElementById('add-new');
const newContact = document.getElementById('contact');

requestAnimationFrame(renderDate);
window.addEventListener('DOMContentLoaded', renderDomContentDb);
window.addEventListener('DOMContentLoaded', renderPageContent);
list.addEventListener('click', renderListBook);
addNew.addEventListener('click', renderContactform);
newContact.addEventListener('click', renderContactSection);
