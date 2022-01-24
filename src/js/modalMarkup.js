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
function checkInfo(data) {
  console.log(data);
  const event = {
    id: data.id,
    url: data.url,
    name: data.name,
    location: data._embedded.venues[0].location.name ? data._embedded.venues[0].location.name : '',
    place: data._embedded.venues[0].city.name ? data._embedded.venues[0].city.name : '',
    localTime: data.dates.start.localTime ? data.dates.start.localTime : '',
    timezone: data._embedded.venues[0].timezone ? data._embedded.venues[0].timezone : '',
    info: data.info ? data.info : 'Sorry, but there is no info',
    localDate: data.dates.start.localDate ? data.dates.start.localDate : '',
    // pricetype: data.priceRanges[0].type ? data.priceRanges[0].type : '',
    // minPrice: data.priceRanges[0].min ? data.priceRanges[0].min : '',
    // maxPrice: data.priceRanges[0].max ? data.priceRanges[0].max : '',
    // currency: data.priceRanges[0].currency ? data.priceRanges[0].currency : '',
    country: data._embedded.venues[0].country.name,
    image: data.images.find(img => img.url.includes('ARTIST_PAGE_3_2')),
    imageMain: data.images.find(img => img.url.includes('TABLET_LANDSCAPE_LARGE_16_9')),
  };

  modalMarkup(event);
}

const modalForm = document.querySelector('.modal-form');

function modalMarkup(event) {
  const markup = `
  <div class="img-wrapper">
        <img class= "small-img" src="${event.image.url}" alt="">
      </div>
      <div class="main-img-wrapper">
          <img class ="main-img" src="${event.imageMain.url}" alt="">
      </div>
      <div class="card-discription">
          <ul class="modal__list">
              <li class="modal__item">
                    <h2 class="modal__header">INFO</h2>
                    <p class="modal__description">${event.info}</p>
                </li>
                <li class="modal__item"
                    <h2 class="modal__header">WHEN</h2>
                    <p class="modal__description">${event.localDate}</p>
                    <p class="modal__description">${event.localTime}${event.timezone}</p>
                </li>
                <li class="modal__item">
                    <h2 class="modal__header">WHERE</h2>
                    <p class="modal__description">${event.place},${event.country}</p>
                    <p class="modal__description">${event.location}</p>
                </li>
                <li class="modal__item">
                    <h2 class="modal__header">WHO</h2>
                    <p class="modal__description">${event.name}</p>
                </li>
            </ul>
            <h2 class="modal__header">PRICES</h2>
            <ul class="prices-list">
           
            </ul>
        </div>
         <a class="buttons more-from btn-position" href="#">MORE FROM THIS AUTHOR</a>
        `;
  modalForm.innerHTML = markup;
}
//  <li>
//    <p class="price">
//      ${event.pricetype}${event.minPrice}-${event.maxPrice}${event.currency}
//    </p>
//    <a class="buttons buy-tiket" href="#">
//      BUY TICKETS
//    </a>
//  </li>;
//
//             <li><img src="#" alt="">
//                 <p class="price">${data.priceRanges[0].type}${data.priceRanges[0].min}${data.priceRanges[0].max}${data.priceRanges[0].currency}</p>
//                 <a class="buttons buy-tiket" href="#">BUY TICKETS</a>
//             </li>

export { fetchEventsById, checkInfo };
