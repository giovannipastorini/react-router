import { useEffect, useState } from "react"

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
            
            <div className="container">
                <h1>Prodotti</h1>
                <div className="products-list">
                    <div className="row">
                    </div>
                    
                        {
                            products.map(product =>(
                                <div className="col-4" key={product.id}>
                                    <div className="card">
                                        <p>{product.title}</p>
                                    </div>
                                </div>
                                
                            ))
                        }
                    
                </div>
            </div>
        </>
    )
}