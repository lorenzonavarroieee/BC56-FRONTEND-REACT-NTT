import { Product } from "./product";

export interface ProductApiResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}