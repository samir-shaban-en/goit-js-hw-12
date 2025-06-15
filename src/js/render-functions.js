import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const ref = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

const gallery = new SimpleLightbox('.gallery a', {});

export function createGallery(images) {
  const imagesMArkup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class='gallery-item'>
         <a href='${largeImageURL}'>
         <img src='${webformatURL}' alt='${tags}' width='360'
         />
         </a>
      <ul class='info-list'>
      
      <li class='info-item'>
         <span>Likes</span>
         <span>${likes}</span>
        </li>

        <li class='info-item'>
          <span>views</span>
         <span>${views}</span>
         </li>

         <li class='info-item'>
          <span>comments</span>
         <span>${comments}</span>
         </li>

         <li class='info-item'>
          <span>downloads</span>
         <span>${downloads}</span>
         </li>
       </ul>
      </li>`;
      }
    )
    .join('');

  ref.gallery.insertAdjacentHTML('beforeend', imagesMArkup);

  gallery.refresh();
}

export function hideLoader() {
  ref.loader.style.display = 'none';
}

export function showLoader() {
  ref.loader.style.display = 'block';
}

export function clearGallery() {
  ref.gallery.innerHTML = '';
}
