const images = ['illo1.png', 'illo2.png', 'illo3.png', 'illo4.png', 'illo5.png', 'illo6.png', 'illo7.png', 'illo8.png', 'illo9.png', 'illo10.png', 'illo11.png', 'illo12.png', 'illo13.png', 'illo14.png', 'illo15.png', 'illo16.png'];

// display all images files on page
function renderGallery(files) {
  const galleryDiv = document.querySelector('.gallery');
  const path = 'images/thumbs/';
  let count = 0;

  files.forEach(file => {
    const image = document.createElement('img');
    image.src = `${path}${file}`;
    galleryDiv.appendChild(image);
    count++;
  });

  console.log(count);
}

renderGallery(images);
