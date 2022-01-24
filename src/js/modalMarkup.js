const axios = require('axios');

async function fetchEventsById(id) {
  try {
    const result = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=il6i4KM0pDEyN9gICQHmHldbbGGfGGTO`,
    );

    const data = result.data;

    return data;
  } catch (error) {
    console.log(error);
  }
}

function modalMarkup(data) {
  console.log(data);
}

export { fetchEventsById, modalMarkup };
