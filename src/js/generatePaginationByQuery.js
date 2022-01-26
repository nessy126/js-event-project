import { params } from './fetchEvents';
import fetchRequest from './fetchRequest';

let { countryCode, keyword, pageCount } = params;
const galleryEl = document.querySelector('.gallery');
const formEl = document.querySelector('#search-form');
const selectEl = document.querySelector('#searchCountry');
const paginationId = document.querySelector('.pagination');
paginationId.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'A') return;
  const linkRef = +e.target.href.split('=')[2];
  pageCount = linkRef;
  galleryEl.innerHTML = '';
  countryCode = selectEl.value;
  keyword = formEl.elements.searchWord.value;
  fetchRequest(keyword, countryCode, pageCount);
  document.querySelector('.gallery').classList.add('vivify', 'popIn');
});

document.querySelector('.gallery').classList.add('vivify', 'popIn');
paginationId.addEventListener('mouseover', e => {
  e.preventDefault();
  document.querySelector('.gallery').classList.remove('vivify', 'popIn');
});
