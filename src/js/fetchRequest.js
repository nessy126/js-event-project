import paginationMarkup from './pagination';
import notification from './notification';
import renderMarkupMain from './renderMarkupMain';
import { params, fetchEvents, requestToAPI } from './fetchEvents';
let { countryCode, keyword, pageCount } = params;

export default function fetchRequest(keyword, countryCode, pageCount) {
  const paginationId = document.querySelector('.pagination');
  fetchEvents(keyword, countryCode, pageCount)
    .then(data => {
      renderMarkupMain(data);
      return data;
    })
    .then(
      renderMarkupMain =>
        (paginationId.innerHTML = paginationMarkup(
          renderMarkupMain.page.totalPages,
          renderMarkupMain.page.number + 1,
          {
            baseTag: 'a',
            link: `${requestToAPI}&page=`,
          },
        )),
    )
    .catch(error => {
      console.log(error.message);
      notification();
    });
}
