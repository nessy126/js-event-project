import { async } from 'fast-glob';
import { params, fetchEvents } from './fetchEvents';
import renderMarkupMain from './renderMarkupMain';
import { toggleClass } from './modal-window-open';
import paginationMarkup from './pagination';
import notification from './notification';
import { even } from 'prelude-ls';

const axios = require('axios');

let { countryCode, keyword, pageCount } = params;

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
    priceRanges: data.priceRanges ? data.priceRanges : '',
    byTicket: data.url ? data.url : '',
    country: data._embedded.venues[0].country.name,
    image: data.images.find(img => img.url.includes('ARTIST_PAGE_3_2')),
    imageMain: data.images.find(img => img.url.includes('TABLET_LANDSCAPE_LARGE_16_9')),
    nameOfAuthor: data._embedded.attractions.find(author => author.name).name,
  };

  console.log(event.byTicket);

  modalMarkup(event);
}

const modalForm = document.querySelector('.modal-wrapper');
function modalMarkup(event) {
  console.log(event.nameOfAuthor);
  const markup = `
  <div class="img-wrapper">
        <img class= "small-img" src="${event.image.url}" alt="">
      </div>
      <div class="main-img-wrapper">
          <img class ="main-img" src="${event.imageMain.url}" alt="">
      </div>
      <div class="card-discription">
          <ul class="modal__list">
              <li class="modal__item ">
                    <h2 class="modal__header">INFO</h2>
                    <div  class="info-conteiner">
                    <p class="modal__description" data-modal-info>${event.info}</p>
                    </div>
                </li>
                <li class="modal__item">
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
            <ul class="prices-list"></ul>
        </div>
         <a class="buttons more-from btn-position" href="#" data-name="${event.nameOfAuthor}">MORE FROM THIS AUTHOR</a>`;
  modalForm.innerHTML = markup;
  renderIventPrice(event.priceRanges, event.byTicket);

  const infoConteiner = document.querySelector('[data-modal-info]');

  if (event.info.length > 50) {
    infoConteiner.classList.add('info-description');
  } else {
    infoConteiner.classList.remove('info-description');
  }

  const linkEl = document.querySelector('.more-from');
  linkEl.addEventListener('click', searchByAuthor);
}

function renderIventPrice(priceRanges, byTicket) {
  const priceListEl = document.querySelector('.prices-list');
  console.log(byTicket);
  console.log;

  if (priceRanges === '') return;
  priceListEl.innerHTML = `<h2 class="modal__header">PRICES</h2>`;
  const renderPrice = priceRanges
    .map(item => {
      return `<li>
        <p class="price">
      ${item.type[0].toUpperCase() + item.type.slice(1)}  ${item.min} - ${item.max} ${
        item.currency
      }</p>
        <a class="buttons buy-tiket" href= "${byTicket}" target="_blank">BUY TICKETS </a>
    </li>`;
    })
    .join('');

  priceListEl.insertAdjacentHTML('beforeend', renderPrice);
}
export { fetchEventsById, checkInfo };

function searchByAuthor(event) {
  keyword = event.target.getAttribute('data-name');
  console.log(keyword);
  toggleClass();
  const paginationId = document.querySelector('.pagination');
  fetchEvents(keyword, countryCode, pageCount).then(renderMarkupMain).catch(notification);
  fetchEvents(keyword, countryCode, pageCount)
    .then(
      renderMarkupMain =>
        (paginationId.innerHTML = paginationMarkup(
          renderMarkupMain.page.totalPages,
          renderMarkupMain.page.number,
          {
            baseTag: 'a',
            link: 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=il6i4KM0pDEyN9gICQHmHldbbGGfGGTO&page=',
          },
        )),
    )
    .catch(console.log);
}
