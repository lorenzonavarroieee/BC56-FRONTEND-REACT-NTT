import { Product } from '../../entities/product'
import './Card.css'

interface CardProps{
    product: Product;
    onPress : () => void
}

export default function Card({product,onPress}: CardProps){
    return(
        <div className="card-container">
            <div className="card">
                <img src={product.thumbnail} alt='thumbnail' />
                <div className='content'>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                    <div className='buy-section'>
                        <button onClick={onPress}>Buy item!</button>
                    </div>

                </div>

            </div>
        </div>

    )
}