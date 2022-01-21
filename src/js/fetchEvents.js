const axios = require('axios');

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

    const events = result.data._embedded.events;

    return events;
  } catch (error) {
    console.log(error);
  }
}
export { pageCount, keyword, countryCode, fetchEvents };
