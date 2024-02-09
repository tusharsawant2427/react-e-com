import React from "react";
import Rating from "./Rating";

const ProductCard = ({ product }) => {

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ml-auto mr-auto">
            <span>
                <img className="p-8 rounded-t-lg max-h-[250px] m-auto" src={(product.image)} alt="product image" />
            </span>
            <div className="px-5 pb-5">
                <a href={`/products/${product.id}`}>
                    <h5 className="text-md font-semibold tracking-tight text-gray-900">{product.title}</h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5 ">
                    {<Rating rating={product.rating.rate} />}
                    <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{product.rating.rate}</p>
                    <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
                    <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{product.rating.count}</p>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-sm text-sm px-2 py-1.5 text-center ">Add to cart</a>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;