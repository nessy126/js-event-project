const modalForm = document.querySelector(".modal-form")

function renderModalMarkup(data) {
// getImg(data)
 const markup = data.map(({}) => {
    ` <div class="img-wrapper">
        <img src="#" alt="">
      </div>

      <div class="main-img-wrapper">
        <img src="#" alt="">
      </div>

      <ul class="modal__list">
        <li class="modal__item">
          <h2 class="modal__header">INFO</h2>
          <p class="modal__description">${}</p>
        </li>
        <li>
          <h2 class="modal__header">WHEN</h2>
          <p class="modal__description">${}</p>
          <p class="modal__description">${} ${}</p>
        </li>
        <li>
          <h2 class="modal__header">WHERE</h2>
          <p class="modal__description">${}</p>
          <p class="modal__description">${}</p>
        </li>
        <li>
          <h2 class="modal__header">WHO</h2>
          <p class="modal__description">${}</p>
        </li>
      </ul>

      <h2>PRICES</h2>
      <ul>
        <li>
          <svg class="madal-close-icon" width="18" height="18">
            <use href="#"></use>
          </svg>
          <p>Standart 300-500 UAH</p>
          <button type="submit">BUY TICKETS</button>
        </li>
        <li><img src="#" alt="">
          <p>VIP 1000-1500 UAH</p>
          <button type="submit">BUY TICKETS</button>
        </li>
      </ul>`
}).join('')
    modalForm.innerHTML = markup
}
