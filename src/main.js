import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getImagesByQuery from './js/pixabay-api';
import {
  ref,
  createGallery,
  showLoader,
  clearGallery,
  hideLoader,
} from './js/render-functions';
hideLoader();

ref.form.addEventListener('submit', formSbmtHandler);

function formSbmtHandler(e) {
  e.preventDefault();
  const input = e.currentTarget.elements.search.value.trim();
  if (input === '') {
    iziToast.warning({
      message: 'The input is empty',
      position: 'topRight',
    });
    e.currentTarget.reset();
    return;
  }

  showLoader();

  clearGallery();

  getImagesByQuery(input)
    .then(createGallery)
    .catch(error =>
      iziToast.warning({
        message: `${error}`,
        position: 'topRight',
      })
    )
    .finally(hideLoader);

  e.currentTarget.reset();
}
