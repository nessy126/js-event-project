import './sass/main.scss';
import renderMarkupMain from './js/renderMarkupMain';
import './js/pagination';
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
import notification from './js/notification';

let { countryCode, keyword, pageCount } = params;
fetchEvents(keyword, countryCode, pageCount).then(renderMarkupMain).catch(notification);
