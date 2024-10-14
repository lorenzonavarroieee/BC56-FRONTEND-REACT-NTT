import { Product } from "../entities/product";

export interface ProductApiResponse{
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}