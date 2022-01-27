import './sass/main.scss';
import './js/fetchRequest';
import './js/renderMarkupMain';
import './js/pagination';
import './js/modal-team';
import './js/modal-window-open';
import { params } from './js/fetchEvents';
import './js/scroll';
import './js/fetchEvents';
import './js/markupSelect';
import './js/onSubmit';
import './js/styleSelect';
import './js/generatePaginationByQuery';
import './js/notification';
import fetchRequest from './js/fetchRequest';
import './js/choices';

let { countryCode, keyword, pageCount } = params;
fetchRequest(keyword, countryCode, pageCount);
