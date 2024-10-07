import './style.css'
import { getAndSkipProducts, getProducts } from './src/services/productApi.js'
import { getAllCategories } from './src/services/categoryApi.js';


const products = await getProducts();
const categories = await getAllCategories();
const grid = document.getElementById('list-id');
const catlist = document.getElementById('categories').options;

const category = categories.map((element) => element.name)
category.forEach((item) => catlist.add(new Option(item)))

products.products.forEach((element) => {
  let div = document.createElement('div');
  const br = document.createElement('br');

  //image
  const imageItem = document.createElement('img')
  imageItem.src = element.thumbnail
  div.appendChild(imageItem)

  const contentItem = document.createElement('p')
  const content = document.createTextNode(element.title);
  contentItem.appendChild(content);
  div.appendChild(contentItem);
  div.appendChild(br)

  //description
  const descriptionItem = document.createElement('p')
  const description = document.createTextNode(element.description)
  descriptionItem.appendChild(description)
  div.appendChild(descriptionItem)
  div.appendChild(br)
  
  let priceDiv = document.createElement('div')
  priceDiv.style.display = 'flex'
  priceDiv.style.gap = '40px'

  //price
  const priceItem = document.createElement('p')
  const price = document.createTextNode(element.price)
  priceItem.appendChild(price);
  priceDiv.appendChild(priceItem)

  const buttonItem = document.createElement('button')
  buttonItem.textContent = 'Buy item'
  priceDiv.appendChild(buttonItem)

  div.appendChild(priceDiv)

  grid.appendChild(div)
})

