import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

const pixabayURL = 'https://pixabay.com/api/'; // URL
const myKeyPixabay = '45488193-7ca777789e7fbcf45aeeb8195'; // key='***'

const formSerched = document.querySelector('.js-search-form');
// const searchInput = document.querySelector('.js-search-input');
// const searchBtn = document.querySelector('.search-btn');
const gallery = document.querySelector('.js-gallery');

console.dir(formSerched);

const fetchToPixabay = questEntered => {
  const urlOptions = new URLSearchParams({
    key: myKeyPixabay,
    q: questEntered,
    image_type: 'photo',

    safesearch: true,
    orientation: 'horizontal',
  });

  return fetch(`${pixabayURL}?${urlOptions}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

const createGalleryCard = imageSet => {
  return `<li class="gallery-card">
            <a href="${imageSet.largeImageURL}" class="gallery-link">
              <img class="image-normal" src="${imageSet.webformatURL}" alt="${imageSet.tags}" width="360" height="152" />
              <ul class="image-text">
                <li class="image-text-item">
                  <p class="key key-likes">Likes</p>
                  <p class="value value-likes">${imageSet.likes}</p>
                </li>
                <li class="image-text-item">
                  <p class="key key-views">Viwes</p>
                  <p class="value value-views">${imageSet.views}</p>
                </li>
                <li class="image-text-item">
                  <p class="key key-comments">Comments</p>
                  <p class="value value-comments">${imageSet.comments}</p>
                </li>
                <li class="image-text-item">
                  <p class="key key-downloads">Downloads</p>
                  <p class="value value-downloads">${imageSet.downloads}</p>
                </li>
              </ul>
            </a>
          </li>`;
};

const submitSearchPhoto = event => {
  event.preventDefault();

  const searchResault = formSerched.elements.user_query.value;
  console.log(searchResault);

  fetchToPixabay(searchResault)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
          maxWidth: '432px',
          messageColor: '#fafafb',
          messageSize: '16px',
          messageLineHeight: '150%',
          timeout: '40000',
        });
      }

      const photoCardsInfo = data.hits
        .map(details => createGalleryCard(details))
        .join('');

      gallery.innerHTML = photoCardsInfo;

      new SimpleLightbox('.js-gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });

      // const
    })
    .catch(error => {
      iziToast.info({
        title: 'error',
      });
      console.log(error);
    });

  formSerched.reset();
};

formSerched.addEventListener('submit', submitSearchPhoto);
