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