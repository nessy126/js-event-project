const axios = require('axios');
const key = 'bnP0T7x8D01uSePMubEXBVcRutPm493N';
const baseURL = 'https://app.ticketmaster.com/discovery/v2/events';
const requestToAPI = `${baseURL}.json?apikey=${key}`;

async function fetchEvents(keyword, countryCode, pageCount) {
  try {
    const result = await axios.get(
      `${requestToAPI}&page=${pageCount - 1}&keyword=${keyword}&countryCode=${countryCode}`,
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

export { params, fetchEvents, key, baseURL, requestToAPI };
