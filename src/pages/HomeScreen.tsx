import { ChangeEvent, useEffect, useState } from "react";
import './HomeScreen.css'
import { Product } from "../entities/product";
import { limitAndSkipProducts, searchProductByName } from "../services/products/product-service";
import Card from "../components/Card/Card";
import TextInputComponent from "../components/TextField/TextField";
import { Category } from "../entities/category";
import { getCategories } from "../services/categories/category-service";

function HomeScreen(){
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [page, setPage] = useState<number>(0);

    const fetchProducts = async () => {
        try{ 
            const data = await limitAndSkipProducts(30, page * 30);
            setProducts(data.products);
        }catch(error){
            throw new Error();
        }
    }

    const fetchCategories = async () => {
        try {
            const data = await getCategories();
            const filtered = data.filter((item) => item.slug);
            setCategories(filtered);
        }catch(error) {
            throw new Error();
        }
    }

    const searchProduct = async(e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target.value;
        try{
            const query = await searchProductByName(target);
            if(query){
                setProducts(query.products);
            }
        }catch(error){
            throw new Error();
        }
        
    }

    // const buyItem = () => {}

    // const handleChangeByCategory = async() => {}

    
    const handleSetNextPage = () => {
        setPage(prev => prev + 1);
    }

    const handleSetPrevPage = () => {
        setPage(prev => prev - 1);
    }

    useEffect(() => {
        fetchProducts();
    },[page])

    useEffect(() => {
        fetchCategories();
    },[])

    return(
        <div>
            <div>
                {/* <TextInputComponent placeholder="Search your product" onKeyPress={() => {}} /> */}
                <form>
                    <input type="text" placeholder="Search your product here" onChange={searchProduct}/>
                </form>
                <button onClick={handleSetPrevPage}>Prev Page</button>
                <button onClick={handleSetNextPage}>Next Page</button>
            </div>
            
            <main className="product-grid">
                <div className="align-items">
                    <div className="products-grid">
                        {products && products.map((product) => <Card key={product.id} product={product} onPress={() => {}}/> )}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HomeScreen;