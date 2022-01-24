import './sass/main.scss';
import renderMarkupMain from './js/renderMarkupMain';
import paginationMarkup from './js/pagination';
import './js/modal-team';
import './js/modal-window-open';
import { params, fetchEvents } from './js/fetchEvents';
import './js/scroll';
import './js/fetchEvents';
import './js/markupSelect';
import './js/onSubmit';
import './js/styleSelect';

let { countryCode, keyword, pageCount } = params;
fetchEvents(keyword, countryCode, pageCount).then(renderMarkupMain);
const paginationId = document.querySelector('.pagination');
fetchEvents(keyword, countryCode, pageCount).then(
  renderMarkupMain =>
    (paginationId.innerHTML = paginationMarkup(
      renderMarkupMain.page.totalPages,
      renderMarkupMain.page.number,
      {
        baseTag: 'a',
        link: 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=il6i4KM0pDEyN9gICQHmHldbbGGfGGTO&page=',
      },
    )),
);

const galleryEl = document.querySelector('.gallery');
const formEl = document.querySelector('#search-form');
const selectEl = document.querySelector('#searchCountry');
paginationId.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'A') return;
  const linkRef = +e.target.href.split('=')[2];
  pageCount = linkRef;
  galleryEl.innerHTML = '';
  countryCode = selectEl.value;
  keyword = formEl.elements.searchWord.value;
  fetchEvents(keyword, countryCode, pageCount).then(renderMarkupMain);
});
