const axios = require('axios');
import notification from './notification';

const baseUrl =
  'https://app.ticketmaster.com/discovery/v2/events.json?apikey=il6i4KM0pDEyN9gICQHmHldbbGGfGGTO';
// let pageCount = 1;
// let keyword = '';
// let countryCode = '';

async function fetchEvents(keyword, countryCode, pageCount) {
  try {
    const result = await axios.get(
      `${baseUrl}&page=${pageCount}&keyword=${keyword}&countryCode=${countryCode}`,
    );
    const totalElements = result.data.page.totalElements;
    if (totalElements === 0) {
      throw new Error();
    }
    const data = result.data;

    // const events = _embedded.events;
    // console.log(events);
    return data;
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
