import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

const pixabayURL = 'https://pixabay.com/api/'; // URL
const myKeyPixabay = '45488193-7ca777789e7fbcf45aeeb8195'; // key='***'

const searchInput = document.querySelector('.js-search-input');
const searchBtn = document.querySelector('.search-btn');
const gallery = document.querySelector('.js-gallery');

const fetchTopixabay = questEntered => {
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
            <a href="" class="gallery-link">
              <img class="image-normal" src="" alt="" />
              <ul class="image-text">
                <li class="image-text-item">
                  <p class="key key-likes"></p>
                  <p class="value value-likes"></p>
                </li>
                <li class="image-text-item">
                  <p class="key key-views"></p>
                  <p class="value value-views"></p>
                </li>
                <li class="image-text-item">
                  <p class="key key-comments"></p>
                  <p class="value value-comments"></p>
                </li>
                <li class="image-text-item">
                  <p class="key key-downloads"></p>
                  <p class="value value-downloads"></p>
                </li>
              </ul>
            </a>
          </li>`;
};
