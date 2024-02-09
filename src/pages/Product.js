import React, { useState, useEffect } from 'react'
import Rating from './components/Rating';
import { useParams } from 'react-router-dom';

const Product = () => {
    const params = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        async function fetchData() {
            fetch(`https://fakestoreapi.com/products/${params.id}`)
                .then(res => {
                    res.json().then(data => {
                        console.log(data);
                        setProduct(data);
                    })
                })
                .then(json => {
                    setProduct(null);
                })
        }
        fetchData();
    }, [params.id]);
    return (
        console.log(product),
        (product != null) ? (<div className="container m-auto mt-10">
            <div className="grid-container grid gap-0 lg:grid-cols-[50%_50%] sm:grid-cols-1">
                <div className="w-full max-w-full bg-white border border-gray-200 rounded-lg shadow">
                    <span>
                        <img className="p-8 rounded-t-sm w-[50%] m-auto" src={product.image} alt={product.title} />
                    </span>
                </div>
                <div className="w-full max-w-full bg-white border border-gray-200 rounded-lg shadow">
                    <div className="px-5 pb-5">
                        <a href={`/products/${product.id}`}>
                            <h5 className="text-2xl font-semibold tracking-tight text-gray-900">{product.title}</h5>
                        </a>
                        {product.rating != null && (<div className="flex items-center mt-2.5 mb-5 ">
                            <Rating rating={product.rating.rate} />
                            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{product.rating.rate}</p>
                            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
                            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{product.rating.count}</p>
                        </div>)}

                        <div className="flex items-center mt-2.5 mb-5 ">
                            <p>{product.description}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-gray-900">{product.price}</span>
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-sm text-sm px-2.5 py-2.5 text-center ">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>) : ""

    )
}

export default Product