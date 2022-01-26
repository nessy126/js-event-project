import { params } from './fetchEvents';
const formEl = document.querySelector('#search-form');
const selectEl = document.querySelector('#searchCountry');
import fetchRequest from './fetchRequest';

let { countryCode, keyword, pageCount } = params;

function onSearch(event) {
  event.preventDefault();
  countryCode = selectEl.value;
  keyword = formEl.elements.searchWord.value;
  if (countryCode === 'Choose country') {
    countryCode = 'US';
  }
  console.log(keyword, countryCode)
  fetchRequest(keyword, countryCode, pageCount);
}

formEl.addEventListener('submit', onSearch);
selectEl.addEventListener('change', onSearch);
