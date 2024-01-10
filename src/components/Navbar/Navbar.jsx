import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom"; 

function Navbar() {
  return (
    <div className='fixed top-0 h-16 w-full z-50 shadow-sm bg-white flex justify-between items-center px-8 md:px-14'>
      <Link to="/" className='text-2xl font-bold'>LOGO</Link>
      <Link to="/cart">
        <PiShoppingCartSimpleBold className='w-8 h-8 md:w-8 md:h-8' />
      </Link>
    </div>
  );
}

export default Navbar;
