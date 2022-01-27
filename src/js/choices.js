import './onSubmit';
import Choices from 'choices.js';

const element = document.querySelector('#searchCountry');

const choices = new Choices(element, {
  searchEnabled: true,
  placeholder: true,
});
