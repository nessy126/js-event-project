const modalForm = document.querySelector('.modal-form');
import { params, fetchEvents } from './fetchEvents';

export default function renderModalMarkup(data) {

  const markup = arr
    .map(item => {
      `<div class="img-wrapper">
        <img src="${item.images[0].url}" alt="">
      </div>
      <div class="main-img-wrapper">
          <img src="${item.images[1].url}" alt="">
      </div>
      <div class="card-discription">
          <ul class="modal__list">
              <li class="modal__item">
                    <h2 class="modal__header">INFO</h2>
                    <p class="modal__description">${item.name}</p>
                </li>
                <li class="modal__item"
                    <h2 class="modal__header">WHEN</h2>
                    <p class="modal__description">${item.dates.start.localDate}</p>
                    <p class="modal__description">${item.sales.public.startDateTime}${item._embedded.venues[0].timezone}(Kyiv/Ukraine)</p>
                </li>
                <li class="modal__item">
                    <h2 class="modal__header">WHERE</h2>
                    <p class="modal__description">${item._embedded.venues[0].country.name},${item._embedded.venues[0].city}</p>
                    <p class="modal__description">${item._embedded.venues[0].name}</p>
                </li>
                <li class="modal__item">
                    <h2 class="modal__header">WHO</h2>
                    <p class="modal__description">${item.name}</p>
                </li>
            </ul>
            <h2 class="modal__header">PRICES</h2>
            <ul class="prices-list">
                <li>
                    <p class="price">${item.priceRanges[0].type}${item.priceRanges[0].min}${item.priceRanges[0].max}${item.priceRanges[0].currency}</p>
                    <a class="buttons buy-tiket" href="#">BUY TICKETS</a>
                </li>
                <li><img src="#" alt="">
                    <p class="price">${item.priceRanges[1].type}${item.priceRanges[1].min}${item.priceRanges[1].max}${item.priceRanges[1].currency}</p>
                    <a class="buttons buy-tiket" href="#">BUY TICKETS</a>
                </li>
            </ul>
        </div>`;
    })
    .join('');
  modalForm.innerHTML = markup;
}
