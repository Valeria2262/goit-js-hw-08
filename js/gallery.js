
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

const gallery = document.querySelector('.gallery');

// Функція для створення галереї на основі масиву зображень
function createGallery(images) {
    return images.map(image => {
        const listItem = document.createElement('li');
        listItem.classList.add('gallery-item');

        const linkElement = document.createElement('a');
        linkElement.classList.add('gallery-link');
        linkElement.href = image.original;

        const imageElement = document.createElement('img');
        imageElement.classList.add('gallery-image');
        imageElement.src = image.preview;
        imageElement.alt = image.description;
        imageElement.style.width = '360px';
        imageElement.style.height = '200px';

        linkElement.appendChild(imageElement);
        listItem.appendChild(linkElement);

        linkElement.addEventListener('click', (event) => {
            event.preventDefault();
            openModal(image.original, image.description);
        });

        return listItem;
    });
}

// Оголошення змінної для екземпляра lightbox
let lightboxInstance = null;

function openModal(src, alt) {
    
    lightboxInstance = basicLightbox.create(`
        <img src="${src}" alt="${alt}" width="1112" height="640">
    `, {
        onShow: (instance) => {
            window.addEventListener('keydown', onEscKeyPress);
        },
        onClose: (instance) => {
            window.removeEventListener('keydown', onEscKeyPress);
        }
    });

    lightboxInstance.show();
}

// Функція для закриття модального вікна 'Escape'
function onEscKeyPress(event) {
    if (event.key === 'Escape') {
        lightboxInstance.close();
    }
}

// Створюємо галерею та додаємо її до контейнера
const galleryItems = createGallery(images);
gallery.append(...galleryItems);



