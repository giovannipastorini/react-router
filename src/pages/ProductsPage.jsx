import { useEffect, useState } from "react"
import ProductsList from "../components/ProductsList"

export default function ProductsPage (){

    const [products, setProducts]=useState([])

    useEffect(
        ()=>{
            //console.log("pagina prodotti caricata");
        const api_url="https://fakestoreapi.com/products";
        fetch(api_url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                
            // qui salvi i dati nello stato
            setProducts(data);
            
        })
        
    }
    ,[])
    //console.log(products);

    return(
        <>
            
            <h1>Prodotti</h1>
           {/*  <div className="container">
                    <div className="row g-3">
                        {
                            products.map(product =>(
                                <div className="col-4" key={product.id}>
                                    <div className="card">
                                        <img id="card-image" src={product.image} alt="" />
                                        <div className="card-body">
                                            <ul className="list-unstyled">
                                                <li><strong>{product.title}</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>    
            </div> */}
            <ProductsList products={products} />
        </>
    )
}