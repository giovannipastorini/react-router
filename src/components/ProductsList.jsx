import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"

export default function CharactersList({products}){

    return(
        <div className="container">
        <div className="row row-cols-1 row-cols-md-3  row-cols-lg-4 g-4">
          {products.map(product => (
            <div className="col" key={product.id}>
                <ProductCard product={product}>
                    <Link to={`/products/${product.id}`}>View More</Link>
                </ProductCard>
            </div>
          ))}
        </div>
      </div>
    )
}