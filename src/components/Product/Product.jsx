import { MdAddShoppingCart } from "react-icons/md";

function Product() {
  return (
    <div className="">
        <img src="./mouse.jpg" alt="" />
        <div>
            <div>
                <h2>title</h2>
                <h2>price</h2>
            </div>
            <p>description</p>
            <MdAddShoppingCart />

            
        </div>

    </div>
  )
}

export default Product