import renderMarkupMain from './renderMarkupMain';
import { params, fetchEvents, requestToAPI } from './fetchEvents';
import paginationMarkup from './pagination';
import onToUpBtn from './scroll';

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
  onToUpBtn();
  fetchEvents(keyword, countryCode, pageCount).then(renderMarkupMain);
  fetchEvents(keyword, countryCode, pageCount).then(
    renderMarkupMain =>
      (paginationId.innerHTML = paginationMarkup(
        renderMarkupMain.page.totalPages,
        renderMarkupMain.page.number,
        {
          baseTag: 'a',
          link: `${requestToAPI}&page=`,
        },
      )),
  );
});
