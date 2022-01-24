export default function renderMarkupMain(array) {
  const galleryEl = document.querySelector('.gallery');
  const markupCard = array._embedded.events
    .map(
      item =>
        `<li id=${item.id} class="gallery__item">
        <div class="gallery__block">
        <div class="gallery__decoration"></div>
     <img data-modal-open class="gallery__img" src="${
       item.images.find(img => img.ratio === '4_3').url
     }" alt="${item.name}">
     <p class="gallery__title">${item.name}</p>
     <p class='gallery__date'>${item.dates.start.localDate}</p>
     <p class="gallery__place">${item._embedded.venues[0].name}</p>
        </div>
        </li>`,
    )
    .join('');
  galleryEl.innerHTML = markupCard;
  const gallery__placeEl = document.querySelectorAll('.gallery__place');
  gallery__placeEl.forEach(item => {
    if (item.textContent === 'undefined') {
      item.classList.add('visually-hidden');
    }
  });
}
