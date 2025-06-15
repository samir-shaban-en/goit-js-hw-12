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
    e.currentTarget.reset();
    return;
  }

  showLoader();

  clearGallery();

  getImagesByQuery(input)
    .then(createGallery)
    .catch(console.log)
    .finally(hideLoader);

  e.currentTarget.reset();
}
