import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  ref,
  createGallery,
  showLoader,
  clearGallery,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

hideLoader();
let page = null;
let inputValue = null;
const limit = 15;

ref.form.addEventListener('submit', formSbmtHandler);

async function formSbmtHandler(e) {
  e.preventDefault();
  const input = e.currentTarget.elements.search.value.trim();
  inputValue = input;
  page = 1;

  if (input === '') {
    iziToast.warning({
      message: 'The input is empty',
      position: 'topRight',
    });
    ref.form.reset();
    return;
  }

  showLoader();
  clearGallery();

  await getApiDataAndCreateMarkup(inputValue, page);
}

ref.loadBtn.addEventListener('click', onLoadBtnClick);

async function onLoadBtnClick() {
  showLoader();
  page++;

  await getApiDataAndCreateMarkup(inputValue, page);
  autoSkroll();
}

async function getApiDataAndCreateMarkup(value, page) {
  try {
    const { hits, totalHits } = await getImagesByQuery(value, page);
    const totalPages = Math.ceil(totalHits / limit);

    if (totalPages >= totalHits) {
      iziToast.warning({
        message:
          'We are sorry, but you have reached the end of search results.',
        position: 'topRight',
        color: 'red',
      });
      hideLoadMoreButton();
      return;
    }

    if (hits.length === 0) {
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        color: 'red',
      });
      hideLoadMoreButton();
      return;
    }

    createGallery(hits);
    showLoadMoreButton();
  } catch (error) {
    iziToast.warning({
      message: `${error}`,
      position: 'topRight',
    });
  } finally {
    ref.form.reset();
    hideLoader();
  }
}

function autoSkroll() {
  const card = document.querySelector('.gallery-item');
  const { height } = card.getBoundingClientRect();

  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}
