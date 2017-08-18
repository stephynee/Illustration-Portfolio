const images = ['illo1.png', 'illo2.png', 'illo3.png', 'illo4.png', 'illo5.png', 'illo6.png', 'illo7.png', 'illo8.png', 'illo9.png', 'illo10.png', 'illo11.png', 'illo12.png', 'illo13.png', 'illo14.png', 'illo15.png', 'illo16.png'];
const gallery = document.querySelector('.gallery');
const body = document.querySelector('body');

// display all images files on page with fade in effect
function fadeInRenderGallery(files, galleryDiv) {
  const path = 'images/thumbs/';
  let time = 70;

  files.forEach((file, i) => {
    const image = document.createElement('img');

    image.src = `${path}${file}`;
    image.dataset.filename = file;
    image.dataset.index = i;
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
  const {filename, index} = e.target.dataset;
  const path = `images/artwork/${filename}`;
  const lightbox = document.createElement('div');
  const img = createImage(path, index, lightbox);
  const exit = document.createElement('i');

  exit.classList.add('fa');
  exit.classList.add('fa-times');
  exit.addEventListener('click', () => lightbox.remove());

  lightbox.classList.add('lightbox');
  lightbox.appendChild(exit);
  lightbox.appendChild(img);

  el.appendChild(lightbox);
}

// build lightbox image
function createImage(path, index, el) {
  const img = document.createElement('img');

  img.src = path;
  img.dataset.index = index;
  img.addEventListener('click', () => cycleImages(img, el));

  return img;
}

// cycle to next image in list.
function cycleImages(currentImg, el) {
  const index = parseInt(currentImg.dataset.index) >= images.length - 1 ? -1 : parseInt(currentImg.dataset.index);
  const path = `images/artwork/${images[index + 1]}`;
  const nextImg = createImage(path, index + 1, el);

  currentImg.style.opacity = 0;
  nextImg.style.opacity = 0;

  setTimeout(() => {
    currentImg.remove();
    el.appendChild(nextImg);

    setTimeout(() => {
      nextImg.style.opacity = 1;
    }, 50);
  }, 60);
}

fadeInRenderGallery(images, gallery);

gallery.addEventListener('click', e => showLightBox(e, body));
