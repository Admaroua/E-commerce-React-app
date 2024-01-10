import { MdAddShoppingCart } from "react-icons/md";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Product({product}) {
  return (
    <Link to={`products/${product.id}`} className="bg-white p-4 rounded shadow-md transition duration-300 transform hover:scale-105">
       <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4"/>
        <div>
            <div>
                <h2 className=" font-semibold my-2 overflow-hidden whitespace-nowrap overflow-ellipsis">{product.title}</h2>
                <p className="text-gray-600 text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">{product.description}</p>
            </div>
           
            <div  className="flex items-center w-full justify-between mt-6" >
              <h2 className="text-lg text-gray-800 font-bold" >{product.price} $</h2>
              <button className="flex justify-center items-center gap-2 bg-purple-800 text-white p-2 rounded hover:bg-purple-900 focus:outline-none focus:ring focus:border-blue-300">
                  <MdAddShoppingCart className="text-lg" />
              </button>
            </div>
        </div>

    </Link>
  )
}
Product.propTypes = {
    product: PropTypes.shape({
    image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  };
export default Product