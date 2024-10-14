import { Category } from "../../entities/category";
import { ProductApiResponse } from "../../utils/api-response";


export async function getCategories(): Promise<Category[]>{
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/products/categories`);
        const data = await response.json();
        return data;
    }catch(error){
        throw new Error();
    }
}

// export async function getCategoriesList(){}

export async function getProductsByCategory(name: string): Promise<ProductApiResponse>{
    try{
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/products/category/${name}`);
        const data = await response.json();
        return data;
    }catch(error){
        throw new Error();
    }
}