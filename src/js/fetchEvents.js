const axios = require('axios');

const baseUrl =
  'https://app.ticketmaster.com/discovery/v2/events.json?apikey=peAFicxdgROimLgt9qctrhItXcX4ekFy';
// let pageCount = 1;
// let keyword = '';
// let countryCode = '';
const params = {
  pageCount: 1,
  keyword: '',
  countryCode: '',
};

async function fetchEvents(keyword, countryCode) {
  try {
    const result = await axios.get(
      `${baseUrl}&page=${params.pageCount}&keyword=${params.keyword}&countryCode=${params.countryCode}`,
    );

    const events = result.data._embedded.events;

    return events;
  } catch (error) {
    console.log(error);
  }
}
export { params, fetchEvents };
