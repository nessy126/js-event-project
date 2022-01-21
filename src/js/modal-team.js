export default function modalTogle() {
  const refs = {
    openModalBtn: document.querySelector('[data-open-modal-team]'),
    closeModalBtn: document.querySelector('[data-close-modal-team]'),
    modal: document.querySelector('[data-modal-team]'),
    backdrop: document.querySelector('.modal-backdrop-team'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.backdrop.addEventListener('click', onBackdrop);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
  function onBackdrop(e) {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  }
}
