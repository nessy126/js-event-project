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
import './js/generatePaginationByQuery';
import './js/generatePaginationUsingRightData';

let { countryCode, keyword, pageCount } = params;
fetchEvents(keyword, countryCode, pageCount).then(renderMarkupMain);

