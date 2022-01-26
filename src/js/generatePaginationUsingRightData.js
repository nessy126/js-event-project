import renderMarkupMain from './renderMarkupMain';
import { params, fetchEvents, requestToAPI } from './fetchEvents';
import paginationMarkup from './pagination';

let { countryCode, keyword, pageCount } = params;
fetchEvents(keyword, countryCode, pageCount).then(renderMarkupMain);

const paginationId = document.querySelector('.pagination');
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
