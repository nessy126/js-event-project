export default function modalTogle() {
  const refs = {
    openModalBtn: document.querySelector('[data-open-modal-team]'),
    closeModalBtn: document.querySelector('[data-close-modal-team]'),
    modal: document.querySelector('[data-modal-team]'),
    backdrop: document.querySelector('.modal-backdrop-team'),
  };

  refs.openModalBtn.addEventListener('click', toggleModalOpen);
  refs.closeModalBtn.addEventListener('click', toggleModalCloset);
  refs.backdrop.addEventListener('click', onBackdrop);

  function toggleModalOpen() {
    refs.backdrop.classList.toggle('is-hidden');
    document.querySelector('.modal-form-team').classList.remove('vivify', 'popOutTop');
    document.querySelector('.modal-form-team').classList.add('vivify', 'fadeInBottom');
  }

  function toggleModalCloset() {
    refs.backdrop.classList.toggle('is-hidden');
    document.querySelector('.modal-form-team').classList.remove('vivify', 'fadeInBottom');
    document.querySelector('.modal-form-team').classList.add('vivify', 'popOutTop');
  }

  function onBackdrop(e) {
    if (e.target === e.currentTarget) {
      toggleModalCloset();
    }
  }
}

modalTogle();
