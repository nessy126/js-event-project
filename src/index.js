import './sass/main.scss';

import './js/fetchEvents';
import './js/markupSelect';
import './js/onSubmit';

import renderMarkupMain from './js/renderMarkupMain';
import modalTogle from './js/modal-team';
import { fetchEvents } from './js/fetchEvents';

modalTogle();

fetchEvents().then(renderMarkupMain);
