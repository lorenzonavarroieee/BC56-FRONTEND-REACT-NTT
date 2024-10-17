import { Product } from "../../entities/product";
import { ProductApiResponse } from "../../utils/api-response";



export async function getProducts() : Promise<ProductApiResponse> {
    try{
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/products`);
        const data = await response.json();
        return data;
    }catch(error){
        throw new Error();
    }
}

export async function searchProductByName(name: string): Promise<ProductApiResponse>{
    try{
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/products/search?q=${name}`);
        const data = await response.json();
        return data;
    }catch(error){
        throw new Error();
    }
}

export async function searchProductById(id: string): Promise<Product>{
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/products/${id}`);
        const data = await response.json();
        return data;
    }catch(error){
        throw new Error();
    }
}

export async function limitAndSkipProducts(limit: number, skip: number): Promise<ProductApiResponse>{
    try{
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/products?limit=${limit}&skip=${skip}&select=title,price,description,category,price,rating,thumbnail`);
        const data = await response.json();
        return data;
    }catch(error){
        throw new Error();
    }
}

export async function addNewProduct(product: Product): Promise<Product>{
    try{
        const payload = await fetch(`${import.meta.env.VITE_BASE_URL}/products/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: product.title,
                description: product.description,
                category: product.category,
                price: product.price,
                rating: product.rating,
                stock: product.stock,
                thumbnail: product.thumbnail
            })
        });

        const data = await payload.json();
        return data;
    }catch(error){
        throw new Error();
    }
}

export async function deleteProduct(id: number){
    try {
        const payload = await fetch(`${import.meta.env.VITE_BASE_URL}/products/${id}`,{
            method: 'DELETE'
        });
        const data = await payload.json();
        return data;
    }catch(error){
        throw new Error();
    }
}