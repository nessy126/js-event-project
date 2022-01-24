export default function renderMarkupMain(array) {
  const galleryEl = document.querySelector('.gallery');
  const markupCard = array
    .map(
      item =>
        `<li data-modal-open class="gallery__item">
        <div class="gallery__block">
        <div class="gallery__decoration">
        </div><img class="gallery__img"  src="${item.images[0].url}" alt="${item.name}">
        <p class="gallery__title">${item.name}</p><p class='gallery__date'>${item.dates.start.localDate}</p>
        <p class="gallery__place">${item._embedded.venues[0].name}</p>
        </div>
        </li>`,
    )
    .join('');
  return (galleryEl.innerHTML = markupCard);
}
