import './sass/main.scss';
import renderMarkupMain from './js/renderMarkupMain';
import modalTogle from './js/modal-team';
import './js/modal-window-open';
import { params, fetchEvents } from './js/fetchEvents';
import './js/scroll';
import './js/fetchEvents';
import './js/markupSelect';
import './js/onSubmit';

let { countryCode, keyword, pageCount } = params;

fetchEvents(keyword, countryCode).then(renderMarkupMain);
