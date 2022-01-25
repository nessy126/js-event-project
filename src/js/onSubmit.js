import { params, fetchEvents } from './fetchEvents';
import renderMarkupMain from './renderMarkupMain';
const formEl = document.querySelector('#search-form');
const selectEl = document.querySelector('#searchCountry');
import paginationMarkup from './pagination';
import notification from './notification';

let { countryCode, keyword, pageCount } = params;

function onSearch(event) {
  event.preventDefault();
  countryCode = selectEl.value;
  keyword = formEl.elements.searchWord.value;
  if (countryCode === 'Choose country') {
    countryCode = 'US';
  }
  // console.log(keyword);
  // console.log(countryCode);
  const paginationId = document.querySelector('.pagination');
  fetchEvents(keyword, countryCode, pageCount).then(renderMarkupMain).catch(notification);
  fetchEvents(keyword, countryCode, pageCount)
    .then(
      renderMarkupMain =>
        (paginationId.innerHTML = paginationMarkup(
          renderMarkupMain.page.totalPages,
          renderMarkupMain.page.number,
          {
            baseTag: 'a',
            link: 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=il6i4KM0pDEyN9gICQHmHldbbGGfGGTO&page=',
          },
        )),
    )
    .catch(console.log);
}

formEl.addEventListener('submit', onSearch);
selectEl.addEventListener('change', onSearch);
