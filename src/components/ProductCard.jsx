export default function ProductCard({product, children}){

    return(
        <div className="card">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.category}</p>
                  <p className="card-text"><span>prezzo: </span>{product.price}</p>
                  {/* <Link to={`/characters/${product.id}`}>View More</Link> */}
                  {children}
                </div>
        </div>
    )
}