// import * as countries from './countries.json';
const selectEl = document.querySelector('#searchCountry');
import countries from './countries.json';

const markupSelect = countries => {
  const markup = countries
    .map(
      element => `
  <option value="${element.countryCode}">${element.country}</option>`,
    )
    .join('');
  selectEl.insertAdjacentHTML('beforeend', markup);
};
markupSelect(countries);
