import { fetchEventsById, checkInfo } from './modalMarkup.js';
const refs = {
  openModalBtn: document.querySelectorAll('[data-modal-open]'),
  gallery: document.querySelector('.gallery'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  modalAnime: document.querySelector('.modal-form'),
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

  animationTwo();
}

function closeModal(e) {
  if (!e.target.closest('button')) return;
  refs.modalForm.innerHTML = '';
  toggleClass();
  animation();
}

function onBackdrop(e) {
  if (e.target === e.currentTarget) {
    refs.modalForm.innerHTML = '';
    toggleClass();
    animation();
  }
}

function animationTwo() {
  document.querySelector('.modal-form').classList.remove('vivify', 'jumpOutRight');
  document.querySelector('.modal-form').classList.add('vivify', 'fadeIn');
}

function animation() {
  document.querySelector('.modal-form').classList.remove('vivify', 'fadeIn');
  document.querySelector('.modal-form').classList.add('vivify', 'jumpOutRight');
}

export { toggleClass };
