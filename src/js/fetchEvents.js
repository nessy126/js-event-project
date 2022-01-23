const axios = require('axios');
import notification from './notification';

const baseUrl =
  'https://app.ticketmaster.com/discovery/v2/events.json?apikey=peAFicxdgROimLgt9qctrhItXcX4ekFy';
let pageCount = 1;
// let keyword = '';
// let countryCode = '';

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
    notification();
  }
}
const params = {
  pageCount: 1,
  keyword: '',
  countryCode: '',
};

export { params, fetchEvents };
