import Notiflix from 'notiflix';

export default function notification() {
  Notiflix.Notify.init({
    width: '350px',
    fontSize: '24px',
    distance: '30px',
    clickToClose: true,
    useIcon: false,
    failure: {
      background: 'rgba(220, 86, 197, .4)',
    },
  });
  Notiflix.Notify.failure('Sorry, but we do not found any event &#128557;');
}
