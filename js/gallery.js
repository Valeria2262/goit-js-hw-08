
const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

// Отримуємо посилання на елементи DOM

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-image');
const modalCloseBtn = document.querySelector('.modal-close');


// Функція для створення галереї на основі масиву зображень

function createGallery(images) {
  return images.map(image => {
  // Створюємо елемент li для кожного зображення
        const listItem = document.createElement('li');
        listItem.classList.add('gallery-item');

    // Створюємо посилання для зображення
        const linkElement = document.createElement('a');
        linkElement.classList.add('gallery-link');
        linkElement.href = image.original;

    // Створюємо тег img для мініатюри зображення
        const imageElement = document.createElement('img');
        imageElement.classList.add('gallery-image');
        imageElement.src = image.preview;
        imageElement.alt = image.description;
      
    // Додаємо стилі для визначення ширини та висоти зображень
        imageElement.style.width = '360px';
        imageElement.style.height = '200px';
      
     // Додаємо зображення до посилання, а посилання до елемента li
        linkElement.appendChild(imageElement);
        listItem.appendChild(linkElement);

     // Додаємо обробник події на кожне посилання для відкриття модального вікна
        linkElement.addEventListener('click', (event) => {
            event.preventDefault();
            openModal(image.original, image.description);
        });

        return listItem;
    });
}
// Додаємо прослуховування кліка на весь контейнер галереї
gallery.addEventListener('click', (event) => {
    // Визначаємо елемент, на якому відбувся клік
    const target = event.target;

    // Перевіряємо, чи клік відбувся на зображенні
    if (target.classList.contains('gallery-image')) {
        // Отримуємо посилання на велике зображення
        const originalSrc = target.src;
            }
});

// Оголошення змінної для екземпляра lightbox
let lightboxInstance = null;

// Функція для закриття модального вікна
function closeModal() {
  modal.style.display = 'none';
  // Закриваємо lightbox, якщо він існує
  if (lightboxInstance) {
    lightboxInstance.close();
  }
}


function openModal(src, alt) {
  // Закриваємо попереднє відкрите модальне вікно
  closeModal();

  // Оновлюємо атрибут src перед показом нового модального вікна
  modalImage.src = src;

  // Створюємо новий екземпляр lightbox
  lightboxInstance = basicLightbox.create(`
    <img src="${src}" alt="${alt}" width="1112" height="640">
  `);

  // Показуємо lightbox
  lightboxInstance.show();
}

// Функція для закриття модального вікна 'Escape'
window.addEventListener('keydown', onEscKeyPress);

        function onEscKeyPress(event) {
            if (event.key === 'Escape') {
                lightboxInstance.close();
             }
};
    

// Створюємо галерею та додаємо її до контейнера
const galleryItems = createGallery(images);
gallery.append(...galleryItems);



