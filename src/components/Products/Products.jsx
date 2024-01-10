import Product from "../Product/Product"
import { useEffect, useState } from "react";


function Products() {
  const [products, setProducts]=useState([]);
  const [categories, setCategories]=useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  //fetching products
  useEffect(()=>{fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=>setProducts(json))},[])
  //fetching categories
  useEffect(()=>{fetch('https://fakestoreapi.com/products/categories')
  .then(res=>res.json())
  .then(json=>setCategories(json))},[])
  //fetching categorie's products
  function getCategory(cat){
    fetch(`https://fakestoreapi.com/products/category/${cat}`)
            .then(res=>res.json())
            .then(json=>setProducts(json))
            setActiveCategory(cat);
  }
  return (
    <div className="container mt-8  mx-auto px-4">
    <div className="w-fit mx-auto mb-10">
      <h1 className="text-3xl font-semibold text-center mb-2">Our products</h1>
      <div className="separator"></div>
    </div>
    <div className="flex gap-4 mb-8">
      {categories.map(cat=><button className={`capitalize font-semibold hover:text-purple-800 ${
              activeCategory === cat ? "text-purple-800" : ""
            }`} key={cat} onClick={()=>getCategory(cat)}>{cat}</button>)}
      </div>
    <div className=" grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {
            products.map(product=><Product key={product.id} product={product}/>)
        }


    </div>
    </div>
  )
}

export default Products