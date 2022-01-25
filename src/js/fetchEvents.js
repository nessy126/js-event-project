const axios = require('axios');

const baseUrl =
  'https://app.ticketmaster.com/discovery/v2/events.json?apikey=bnP0T7x8D01uSePMubEXBVcRutPm493N';
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

    return data;
  } catch (error) {
    return error;
  }
}
const params = {
  pageCount: 1,
  keyword: '',
  countryCode: '',
};

export { params, fetchEvents };
