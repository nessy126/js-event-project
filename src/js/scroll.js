const toUpBtn = document.querySelector('.btn-up');

window.addEventListener('scroll', onScroll);
toUpBtn.addEventListener('click', onToUpBtn);

function onScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    toUpBtn.classList.add('btn-up--visible');
  }
  if (scrolled < coords) {
    toUpBtn.classList.remove('btn-up--visible');
  }
}

export default function onToUpBtn() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
