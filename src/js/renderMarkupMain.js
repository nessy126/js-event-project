// export default function renderMarkupMain(array) {
//   const galleryEl = document.querySelector('.gallery');
//   const markupCard = array
//     .map(
//       item =>
//         `<li class="gallery__item"><div class="gallery__block"><div class="gallery__decoration"></div><img class="gallery__img" scr="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIpVc6pNRGRiTCqYfTez1z3U0FGxvAJ5jsKCsMwlWo5v-qAZ0pvkAe4F_zJ12hIlyicY&usqp=CAU" alt="${array.desc}"><p class="gallery__title">${array.title}</p><p class='gallery__date'>${array.date}</p><p class="gallery__place">${array.place}</p></div></li>`,
//     )
//     .join('');
//   return (galleryEl.innerHTML = markupCard);
// }
