import { useEffect, useState } from "react";
import './HomeScreen.css'
import { Product } from "../entities/product";
import { limitAndSkipProducts } from "../services/products/product-service";
import Card from "../components/Card/Card";
import TextInputComponent from "../components/TextField/TextField";

function HomeScreen(){
    const [products, setProducts] = useState<Product[]>([]);
    

    const [page, setPage] = useState<number>(0);

    const fetchProducts = async () => {
        try{ 
            const data = await limitAndSkipProducts(30, page * 30);
            setProducts(data.products);
        }catch(error){
            throw new Error();
        }

    }

    const searchProduct = () => {}

    const buyItem = () => {}

    
    const handleSetPage = () => {
        setPage(prev => prev + 1);
    }

    useEffect(() => {
        fetchProducts();
    },[page])

    return(
        <div>
            <div>
                <TextInputComponent placeholder="Search your product" onKeyPress={searchProduct} />
                <button onClick={handleSetPage}>Next Page</button>
            </div>
            <div className="align-items">
                <div className="products-grid">
                    {products && products.map((product) => <Card key={product.id} product={product} onPress={buyItem}/> )}
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;