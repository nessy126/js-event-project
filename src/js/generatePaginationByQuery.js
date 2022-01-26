import renderMarkupMain from './renderMarkupMain';
import { params, fetchEvents, requestToAPI } from './fetchEvents';
import paginationMarkup from './pagination';

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
  fetchEvents(keyword, countryCode, pageCount).then(renderMarkupMain);
  fetchEvents(keyword, countryCode, pageCount).then(
    renderMarkupMain =>
      (paginationId.innerHTML = paginationMarkup(
        renderMarkupMain.page.totalPages,
        renderMarkupMain.page.number + 1,
        {
          baseTag: 'a',
          link: `${requestToAPI}&page=`,
        },
      )),
  );
  document.querySelector('.gallery').classList.add('vivify', 'popIn');
});

document.querySelector('.gallery').classList.add('vivify', 'popIn');
paginationId.addEventListener('mouseover', e => {
  e.preventDefault();
  document.querySelector('.gallery').classList.remove('vivify', 'popIn');
});
