import { params, fetchEvents } from './fetchEvents';
import renderMarkupMain from './renderMarkupMain';
const formEl = document.querySelector('#search-form');
const selectEl = document.querySelector('#searchCountry');

let { countryCode, keyword, pageCount } = params;

function onSearch(event) {
  event.preventDefault();
  // countryCode = formEl.elements.searchCountry.value;
  countryCode = selectEl.value;
  keyword = formEl.elements.searchWord.value;
  if (countryCode === 'Choose country') {
    countryCode = 'US';
  }
  console.log(keyword);
  console.log(countryCode);
  fetchEvents(keyword, countryCode).then(renderMarkupMain).catch(console.log);
}

formEl.addEventListener('submit', onSearch);
selectEl.addEventListener('change', onSearch);
