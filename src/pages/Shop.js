import React, { useState, useEffect } from "react";
import "../css/treeview-sidebar.css";
import TreeView from "./components/TreeView";
import ProductCard from "./components/ProductCard";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData(limit = 12) {
      fetch('https://fakestoreapi.com/products?limit=' + limit)
        .then(res => {
          res.json().then(data => {
            setProducts(data);
          })
        })
        .then(json => {
          setProducts(null);
        })
    }
    fetchData();
  }, []);


  return (
    <div className="container m-auto mt-10">
      <div className="grid-container grid gap-6 lg:grid-cols-[20%_80%] sm:grid-cols-1">
        <div>
          <span>Categories</span>
          <TreeView />
        </div>
        <div>
          <div className="grid-container grid gap-6 lg:grid-cols-[20%_20%_20%_40%] sm:grid-cols-[30%_30%_20%] mb-10">
            <div className="">
              <label for="sorting" class="block mb-2 text-sm font-medium text-gray-900">Sorting</label>
              <select id="sorting" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5">
                <option value="ASC" selected>ASC</option>
                <option value="DESC">DESC</option>
              </select>
            </div>
            <div className="">
              <label for="showing" class="block mb-2 text-sm font-medium text-gray-900">Showing</label>
              <select id="showing" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5">
                <option value="8" selected>8</option>
                <option value="12" selected>12</option>
                <option value="16" selected>16</option>
                <option value="all" selected>All</option>
              </select>
            </div>
            <div className="md:mt-10 relative"> 
              <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-sm text-sm px-2 py-2.5 absolute inset-x-0 bottom-0">Apply</button>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-4">
            {products != null && products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Shop;
