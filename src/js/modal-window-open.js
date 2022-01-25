import { fetchEventsById, checkInfo } from './modalMarkup.js';
const refs = {
  openModalBtn: document.querySelectorAll('[data-modal-open]'),
  gallery: document.querySelector('.gallery'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  backdrop: document.querySelector('.backdrop'),
  modalForm: document.querySelector('.modal-wrapper'),
};

refs.closeModalBtn.addEventListener('click', closeModal);
refs.backdrop.addEventListener('click', onBackdrop);
refs.gallery.addEventListener('click', openModal);

export default function onToggleModal() {
  openModal();
  closeModal();
  onBackdrop();
}

function toggleClass() {
  return refs.modal.classList.toggle('is-hidden');
}

function openModal(e) {
  if (!e.target.closest('li')) return;
  const id = e.target.closest('li').id;
  toggleClass();
  fetchEventsById(id).then(checkInfo);
  // renderModalMarkup();
}

function closeModal(e) {
  if (!e.target.closest('button')) return;
  refs.modalForm.innerHTML = '';
  toggleClass();
}

function onBackdrop(e) {
  if (e.target === e.currentTarget) {
    refs.modalForm.innerHTML = '';
    toggleClass();
  }
}

export { toggleClass };
// targetElement.ontouchend = e => {
//   e.preventDefault();
// };
