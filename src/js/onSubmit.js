import { params, fetchEvents } from './fetchEvents';
const formEl = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');

let { pageCount, keyword, countryCode } = params;

function onSubmitForm(event) {
  event.preventDefault();
  countryCode = formEl.elements.searchCountry.value;
  keyword = formEl.elements.searchWord.value;
  if (countryCode === 'Choose country') {
    countryCode = 'US';
  }

  fetchEvents(keyword, countryCode).then(console.log);
}

formEl.addEventListener('submit', onSubmitForm);
