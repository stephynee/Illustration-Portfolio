const images = ['illo1.png', 'illo2.png', 'illo3.png', 'illo4.png', 'illo5.png', 'illo6.png', 'illo7.png', 'illo8.png', 'illo9.png', 'illo10.png', 'illo11.png', 'illo12.png', 'illo13.png', 'illo14.png', 'illo15.png', 'illo16.png'];
const gallery = document.querySelector('.gallery');
const body = document.querySelector('body');

// display all images files on page with fade in effect
function fadeInRenderGallery(files) {
  const galleryDiv = document.querySelector('.gallery');
  const path = 'images/thumbs/';
  let time = 70;

  files.forEach(file => {
    const image = document.createElement('img');

    image.src = `${path}${file}`;
    image.dataset.filename = file;
    image.style.opacity = 0;

    galleryDiv.appendChild(image);

    setTimeout(() => {
      image.style.opacity = 1;
    }, time);

    time += 70;
  });
}

// display correct image in lightbox when gallery is clicked.
function showLightBox(e, el) {
  const {filename} = e.target.dataset;
  const path = 'images/artwork/';
  const lightbox = document.createElement('div');
  const img = document.createElement('img');
  const exit = document.createElement('i');

  img.src = `${path}${filename}`;

  exit.classList.add('fa');
  exit.classList.add('fa-times');
  exit.addEventListener('click', closeLightbox);

  lightbox.classList.add('lightbox');
  lightbox.appendChild(exit);
  lightbox.appendChild(img);

  el.appendChild(lightbox);
}

// remove the lightbox from DOM
function closeLightbox() {

}

fadeInRenderGallery(images);

gallery.addEventListener('click', e => showLightBox(e, body));
