import renderMarkupMain from './renderMarkupMain';
import { params, fetchEvents } from './fetchEvents';
import paginationMarkup from './pagination';

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
