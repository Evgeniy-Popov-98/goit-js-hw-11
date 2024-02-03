import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
/*========================================*/
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
/*=============================================================*/
const img = {
  total: 4692,
  totalHits: 500,
  hits: [
    {
      id: 195893,
      pageURL: 'https://pixabay.com/en/blossom-bloom-flower-195893/',
      type: 'photo',
      tags: 'blossom, bloom, flower',
      previewURL:
        'https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg',
      previewWidth: 150,
      previewHeight: 84,
      webformatURL: 'https://pixabay.com/get/35bbf209e13e39d2_640.jpg',
      webformatWidth: 640,
      webformatHeight: 360,
      largeImageURL: 'https://pixabay.com/get/ed6a99fd0a76647_1280.jpg',
      fullHDURL: 'https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg',
      imageURL: 'https://pixabay.com/get/ed6a9364a9fd0a76647.jpg',
      imageWidth: 4000,
      imageHeight: 2250,
      imageSize: 4731420,
      views: 7671,
      downloads: 6439,
      likes: 5,
      comments: 2,
      user_id: 48777,
      user: 'Josch13',
      userImageURL:
        'https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg',
    },
  ],
};

/*====================== FORM ====================*/

const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input');
const buttom = document.querySelector('.js-button');
const gallery = document.querySelector('.js-gallery');

form.addEventListener('submit', creatGallery);

// let url =  'https://pixabay.com/api/?key=42169950-0e8cca4ed1d3fcef898dec13a&q=cat&image_type=photo&orientation=horizontal&safesearch=true';

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
    .then(res => renderImages(res))
    .catch(err => console.log(err.message));
}

function imageTemplate({
  largeImageURL,
  previewURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
		  <li class="gallery-item">
		  <a class="gallery-link" href=${largeImageURL}>
			<img class="gallery-image" src=${previewURL} alt="${tags}" />
			<div class="container-text"><h3 class="titel-text">Likes</h3><p class="text">${likes}</p></div>
			<div class="container-text"><h3 class="titel-text">Views</h3><p class="text">${views}</p></div>
			<div class="container-text"><h3 class="titel-text">Comments</h3><p class="text">${comments}</p></div>
			<div class="container-text"><h3 class="titel-text">Dowloads</h3><p class="text">${downloads}</p></div>
		  </a>
		</li>
		`;
}

function imagesTemplate(images) {
  return images.map(imageTemplate).join('');
}

function renderImages(images) {
  console.log(images);
  const markup = imagesTemplate(images);
  console.log(markup);
  gallery.innerHTML = markup;
}
/*================= GALLERY ===============*/
// const gallery = document.querySelector('.js-gallery');

// function imagesTemplate(item) {
//   return `
// 		  <li class="gallery-item">
// 		  <a class="gallery-link" href=${item.original}>
// 			<img class="gallery-image" src=${item.preview} alt="${item.description}" />
// 		  </a>
// 		</li>
// 		`;
// }

// function renderGallery() {
//   const markup = images.map(imagesTemplate).join('');
//   gallery.innerHTML = markup;
// }

// renderGallery();

// let galleryModalWindow = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionPosition: 'bottom',
//   captionDelay: 250,
// });
