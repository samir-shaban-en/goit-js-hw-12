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
let page = 1;
let inputValue = null;
const limit = 15;

ref.form.addEventListener('submit', formSbmtHandler);

async function formSbmtHandler(e) {
  e.preventDefault();
  const input = e.currentTarget.elements.search.value.trim();
  inputValue = input;
  page = 1;

  if (inputValue === '') {
    iziToast.warning({
      message: 'The input is empty',
      position: 'topRight',
    });
    ref.form.reset();
    return;
  }

  showLoader();
  clearGallery();

  try {
    const { hits, totalHits } = await getImagesByQuery(inputValue, page);
    const totalPages = Math.ceil(totalHits / limit);

    if (hits.length === 0) {
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        color: 'red',
      });
      hideLoadMoreButton();
      return;
    } else {
      iziToast.success({
        message: `Images with ${inputValue} are found`,
        position: 'topRight',
        color: 'green',
      });
    }
    if (page >= totalPages) {
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }

    createGallery(hits);
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

ref.loadBtn.addEventListener('click', onLoadBtnClick);

async function onLoadBtnClick() {
  showLoader();
  page++;

  try {
    const { hits, totalHits } = await getImagesByQuery(inputValue, page);
    const totalPages = Math.ceil(totalHits / limit);

    if (page >= totalPages) {
      iziToast.warning({
        message:
          'We are sorry, but you have reached the end of search results.',
        position: 'topRight',
        color: 'red',
      });
      hideLoadMoreButton();
      return;
    } else {
      iziToast.success({
        message: `Images with ${inputValue} are found`,
        position: 'topRight',
        color: 'green',
      });
    }

    createGallery(hits);

    const card = document.querySelector('.gallery-item');
    if (card) {
      autoSkroll(card);
    }
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

function autoSkroll(card) {
  const { height } = card.getBoundingClientRect();

  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}
