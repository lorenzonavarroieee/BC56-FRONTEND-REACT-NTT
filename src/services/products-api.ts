import { Product } from "../types/product";

export async function getProducts() : Promise<Product[]> {
    try{
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/products`);
        const data = await response.json();
        return data;
    }catch(error){
        throw new Error();
    }
}

export async function searchProduct(name: string): Promise<Product[]>{
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