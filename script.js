const images = ['illo1.png', 'illo2.png', 'illo3.png', 'illo4.png', 'illo5.png', 'illo6.png', 'illo7.png', 'illo8.png', 'illo9.png', 'illo10.png', 'illo11.png', 'illo12.png', 'illo13.png', 'illo14.png', 'illo15.png', 'illo16.png'];
const gallery = document.querySelector('.gallery');

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
function showLightBox(e) {
  const {filename} = e.target.dataset;

  // console.log(`image/artwork/${fileName}`);
}

fadeInRenderGallery(images);

gallery.addEventListener('click', showLightBox);
