import axios from 'axios';

import 'izitoast/dist/css/iziToast.min.css';

export async function getImagesByQuery(query, page) {
  const {
    data: { hits, totalHits },
  } = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '50844575-9e292bfe2a1d78c665340f91a',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  });

  return { hits, totalHits };
}
