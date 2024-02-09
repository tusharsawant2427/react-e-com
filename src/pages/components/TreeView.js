import React, { useEffect, useState } from "react";

function TreeView() {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    async function fetchData() {
      fetch('https://fakestoreapi.com/products/categories')
        .then(res => {
          res.json().then(data => {
            setCategories(data);
          })
        })
        .then(json => {
          setCategories(null);
        })
    }
    fetchData();
  }, []);


  useEffect(() => {
    const toggler = document.getElementsByClassName("caret");
    const handleClick = (event) => {
      event.target.parentElement.querySelector(".hidden").classList.toggle("block");
      event.target.classList.toggle("caret-down");
    };

    for (let i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", handleClick);
    }

    return () => {
      for (let i = 0; i < toggler.length; i++) {
        toggler[i].removeEventListener("click", handleClick);
      }
    };
  }, categories);

  return (
    <ul id="products-sidebar">
      {categories != null && categories.map((category, index) => (
        <li key={index}>
          <span className="caret">{category}</span>
          <ul className="hidden">
            <li className='ml-5'>Water</li>
            <li className='ml-5'>Coffee</li>
          </ul>
        </li>
      ))}
    </ul>

  );
}

export default TreeView;
