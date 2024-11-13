import './Products.css'
import { AddToCartIcon } from '../Icons/Icons'

export function Products({ products }) {
    return (
        <main className='products'>
            <ul>
                {products.map(product => (
                    <>
                    <li key={product.id}>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                        />
                        <div className='titleContainer'>
                            <h3>{product.title}</h3>
                            <p>${product.price}</p>
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                    </>
                ))}
            </ul>
        </main>
    )
}