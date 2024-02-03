import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
/*========================================*/
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
/*=============================================================*/

const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input');
const buttom = document.querySelector('.js-button');
const gallery = document.querySelector('.js-gallery');

form.addEventListener('submit', creatGallery);

function creatGallery(event) {
  event.preventDefault();
  const infoSearch = form.elements.text.value.trim();
  if (infoSearch) {
    getImages(infoSearch);
  } else {
    iziToast.error({
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }
}

function getImages(infoSearch) {
  const url = `https://pixabay.com/api/?key=42169950-0e8cca4ed1d3fcef898dec13a&q=${infoSearch}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        const myError = new Error(`${res.status}`);
        throw myError;
      }
    })
    .then(resolt => renderImages(resolt.hits))
    .catch(err => console.log(err.message));
}

function imageTemplate(img) {
  return `
			  <li class="gallery-item">
			  <a class="gallery-link" href=${img.largeImageURL}>
				<img class="gallery-image" src=${img.previewURL} alt="${img.tags}" />
				<div class="container-text"><h3 class="titel-text">Likes</h3><p class="text">${img.likes}</p></div>
				<div class="container-text"><h3 class="titel-text">Views</h3><p class="text">${img.views}</p></div>
				<div class="container-text"><h3 class="titel-text">Comments</h3><p class="text">${img.comments}</p></div>
				<div class="container-text"><h3 class="titel-text">Dowloads</h3><p class="text">${img.downloads}</p></div>
			  </a>
			</li>
			`;
}

function renderImages(images) {
  const markup = images.map(imageTemplate).join('');
  gallery.innerHTML = markup;
}
