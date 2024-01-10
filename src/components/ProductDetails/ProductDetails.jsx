import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MdAddShoppingCart } from "react-icons/md";

function ProductDetails() {
    const params=useParams()
    const [product, setProduct]=useState({})
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
    },[params.id])
  return (
    <div className="relative flex gap-4 items-start w-[80%]  shadow-sm rounded-md mx-auto mt-48 p-4 bg-slate-50 ">
        <div className="basis-1/4">
          <img src={product.image} alt={product.title} className="w-[300px] h-[300px]"/>
        </div>
       <div className="basis-3/4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold my-2 w-[87%]">{product.title}</h2>
                <h2 className="text-2xl text-gray-800 font-bold" >{product.price} $</h2>
                        
            </div>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <button className="absolute right-3 bottom-0 flex justify-center items-center gap-2 my-4 bg-purple-800 text-white p-2 rounded hover:bg-purple-900 focus:outline-none focus:ring focus:border-blue-300">
                  Add to cart<MdAddShoppingCart className="text-lg" />
            </button>
       </div>
        
            
            
            
              
              
            
        </div>

    
  )
}

export default ProductDetails