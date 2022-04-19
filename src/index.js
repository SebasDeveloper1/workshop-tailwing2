import { registerImage } from './lazy'
// const API = 'https://randomfox.ca/images/';

// const images = document.querySelector('#images');
// const addButton = document.getElementById('add-button');
// const removeButton = document.getElementById('add-button');
// function generateNum() {
//   let min = 1;
//   let max = 124;
//   const numImage = Math.floor(Math.random() * (max - min)) + min;
//   return numImage;
// }

// const createNode = (baseUrl) => {
//   /* <div class="img-container">
//   <img class="i" src="${baseUrl}${image}.jpg" alt="Image">
//   </div> */

//   const numImage = generateNum();

//   const containerImage = document.createElement('div');
//   containerImage.className = 'img-container';

//   const imagen = document.createElement('img');
//   imagen.className = 'image mx-auto';
//   imagen.src = `${baseUrl}${numImage}.jpg`

//   containerImage.appendChild(imagen);

//   return containerImage;
// }



// const addImage = () => {
//   const newImage = createNode(API);
//   images.appendChild(newImage);
// };

// addButton.addEventListener('click', addImage);


//------------------------------------------------------------------Version API------------------------

const API = 'https://randomfox.ca/floof';
const images = document.querySelector('#images');
const addButton = document.getElementById('add-button');
const removeButton = document.getElementById('remove-button');


const createNode = async () => {
  try {
    const respuesta = await fetch(API);
    const data = await respuesta.json();
    const imageUrl = data.image;


    const containerImage = document.createElement('div');
    containerImage.className = 'img-container';

    const imagen = document.createElement('img');
    imagen.className = 'image mx-auto'
    imagen.dataset.src = imageUrl;

    containerImage.appendChild(imagen);
    images.appendChild(containerImage);
    appendedImages++;
    printLog();

    registerImage(containerImage); // IntersectionObserver

  } catch (err) { console.log(`This is the ${err}`) };
}


const deleteNode = () => {
  const containerImage = document.querySelectorAll('.img-container');
  containerImage.forEach((image) => {
    images.removeChild(image);
    appendedImages = 0;
    loadedImages = 0;
  })
}


addButton.addEventListener('click', createNode);

removeButton.addEventListener('click', deleteNode);