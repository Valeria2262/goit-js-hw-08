const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];


// Отримуємо посилання на елемент <ul>
const gallery = document.querySelector('.gallery');

// Створюємо фрагмент для оптимального додавання у DOM
const fragment = document.createDocumentFragment();

// Створюємо та додаємо кожен елемент <li> з <img> у фрагмент
images.forEach((image) => {
  const listItem = document.createElement('li');
  const img = document.createElement('img');

  img.src = image.url;
  img.alt = image.alt;
  img.width = 360;
  img.height = 300;

  listItem.appendChild(img);
  fragment.appendChild(listItem);
});

// Додаємо фрагмент з усіма елементами до <ul>
gallery.appendChild(fragment);




/*const gallery = document.querySelector(".gallery");

const markup = images.map(({url, alt, src}) => {
  const img = document.createElement("img");
  img.setAttribute("src", url);
  img.setAttribute("alt", alt);
  img.width = 360;
  img.height = 300;

    return `<li class="gallery-images">${img}</li>`;
});

console.log(markup);
gallery.insertAdjacentHTML("afterbegin", markup); */






/*const gallery = document.querySelector(".gallery");

const markup = images.map(({url, alt, src}) => {
  const img = document.createElement("img");
  img.setAttribute("src", url);
  img.setAttribute("alt", alt);
  img.width = 360;
  img.height = 300;

    return `<li class="gallery-images">${img.outerHTML}</li>`;
});

console.log(markup);
gallery.insertAdjacentHTML("afterbegin", markup); */
