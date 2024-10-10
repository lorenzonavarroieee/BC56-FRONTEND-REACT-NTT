import { Product } from "../types/product";


const grid = document.getElementById('products-id');


export const createProductCard = (product: Product) => {

    let div = document.createElement('div');
    const br = document.createElement('br');
  
    //image
    const imageItem = document.createElement('img')
    imageItem.src = product.thumbnail;
    div.appendChild(imageItem)
  
    const contentItem = document.createElement('p')
    const content = document.createTextNode(product.title);
    contentItem.appendChild(content);
    div.appendChild(contentItem);
    div.appendChild(br)
  
    //description
    const descriptionItem = document.createElement('p')
    const description = document.createTextNode(product.description)
    descriptionItem.appendChild(description)
    div.appendChild(descriptionItem)
    div.appendChild(br)
    
    let priceDiv = document.createElement('div')
    priceDiv.style.display = 'flex'
    priceDiv.style.gap = '40px'
  
    //price
    // const priceItem = document.createElement('p')
    // const price = document.createTextNode(product.price)
    // priceItem.appendChild(price);
    // priceDiv.appendChild(priceItem)
  
    const buttonItem = document.createElement('button')
    buttonItem.textContent = 'Buy item'
    priceDiv.appendChild(buttonItem)
  
    div.appendChild(priceDiv)
  
    grid?.appendChild(div)
}
