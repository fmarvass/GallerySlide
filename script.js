let currentImageIndex = 0;
let images = [
    'asd.png',
    'IMG_20220404_120356015_HDR.jpg',
    'IMG_20230215_115306878_PORTRAIT_preview_rev_1.png',
    'WhatsApp Image 2021-03-31 at 18.04.18.jpeg'
];

function updateImage() {
    let image = document.getElementById('image-slider');
    image.src = images[currentImageIndex];
}

document.getElementById('btn-anterior').addEventListener('click', function () {
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = images.length - 1;
    }
    updateImage();
});

document.getElementById('btn-siguiente').addEventListener('click', function () {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }
    updateImage();
});

let galleryVisible = false;
let toggleButton = document.getElementById('toggle-button');
let sliderContainer = document.querySelector('.image-slider');
let galleryContainer = document.querySelector('.gallery-container');

toggleButton.addEventListener('click', function () {
    if (galleryVisible) {
        toggleButton.textContent = 'Ver vista galería de imágenes';
        sliderContainer.style.display = 'flex';
        galleryContainer.style.display = 'none';
    } else {
        toggleButton.textContent = 'Ver vista deslizador de imágenes';
        sliderContainer.style.display = 'none';
        galleryContainer.style.display = 'block';
    }
    galleryVisible = !galleryVisible;
});

updateImage();