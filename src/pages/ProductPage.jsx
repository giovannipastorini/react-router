import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import ProductCard from "../components/ProductCard";

/* import ProductCard from ""; */

export default function ProductPage(){

    const { id } = useParams();
    //console.log(id);
    const api_url = `https://fakestoreapi.com/products/${id}`;
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(api_url)
        .then(res => res.json())
        .then(data => {

            console.log(data);
            if(data.error){
            console.log('Take the user back');
            navigate('/not-found');
            return;
            }
            
            setProduct(data);
        })
        .catch(err => {
            console.error(err)
            console.log('Take the user back');
            navigate('/not-found');
        });
    }, [navigate, id])

    return(
        <>
        <div className="col-4 mx-auto my-5">
            <ProductCard product={product}/>
        </div>
        </>
    )
}