import Notiflix from 'notiflix';
const axios = require('axios');

Notiflix.Notify.init({
  width: '350px',
  fontSize: '24px',
  distance: '30px',
  clickToClose: true,
  useIcon: false,
  failure: {
    background: 'rgba(220, 86, 197, .4)',
  },
});

const baseUrl =
  'https://app.ticketmaster.com/discovery/v2/events.json?apikey=peAFicxdgROimLgt9qctrhItXcX4ekFy';
let pageCount = 1;
let keyword = '';
let countryCode = '';

async function fetchEvents(keyword, countryCode) {
  try {
    const result = await axios.get(
      `${baseUrl}&page=${pageCount}&keyword=${keyword}&countryCode=${countryCode}`,
    );
    const totalElements = result.data.page.totalElements;
    if (totalElements === 0) {
      throw new Error();
    }
    const events = result.data._embedded.events;
    // console.log(events);
    return events;
  } catch (error) {
    Notiflix.Notify.failure('Sorry, but we do not found any event &#128557;');
  }
}
const params = {
  pageCount: 1,
  keyword: '',
  countryCode: '',
};

export { params, fetchEvents };
