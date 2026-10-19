import './index.css'
import { Link }  from "react-router-dom";
import { useState } from "react";
import SignupForm from "./SignupForm";
import { useCart } from "./CartContext";
import { FaHome } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import image1 from './images/image1.avif';
function Navbar() {
  const [showSignup, setShowSignup] = useState(false);
   const [showMenu, setShowMenu] = useState(false);
   const { totalQuantity } = useCart();
  return (
    <>
    <nav className="flex items-center justify-between gap-4 bg-white px-6 py-4 shadow-md">
    

      <ul className="flex space-x-6">
        <li className="flex flex-row items-end gap-2 text-gray-700 font-medium hover:text-blue-600 transition-colors">
          <Link to="/" className=" flex text-gray-700 font-medium hover:text-blue-600 transition-colors ">
          <FaHome className="self-center"/>
          <span className="text-lg">Home</span></Link>
        </li>

        <li className="flex items-center gap-2 text-gray-700 font-medium hover:text-blue-600 transition-colors">
          <Link to="/#menu" className=" flex text-gray-700 font-medium hover:text-blue-600 transition-colors">
          < FaUtensils className="self-center"/>
          <span>Menu</span>
          </Link>
        </li>
 <li className="flex items-center gap-2 text-gray-700 font-medium hover:text-blue-600 transition-colors">
  <Link to="/cart"
    className="flex items-center gap-2"
  >
    <FaShoppingCart className="self-center" />
    <span>Cart</span>

    {totalQuantity > 0 && (
      <span className="bg-blue-600 text-white text-xs font-bold rounded-full min-w-5 h-5 px-1 flex items-center justify-center">
        {totalQuantity}
      </span>
    )}
  </Link>
</li>
       

        <li className="flex items-center gap-2 text-gray-700 font-medium hover:text-blue-600 transition-colors">
          <Link to="/"  onClick={(e) => {
            e.preventDefault();
            setShowSignup(true);
          } }
        className=" flex text-gray-700 font-medium hover:text-blue-600 transition-colors">
         <SiGnuprivacyguard className="self-center"/>
          <span>SignIn</span>
          </Link>
        </li>
      </ul>
      <div className="relative gap-2 w-full max-w-md flex">
       <FaSearch className="<FaSearch absolute mx-60 left-3 top-1/2 -translate-y-1/2  text-gray-500 text-lg pointer-events-none"/>
       <input type="text" placeholder="Search..." className="w-full p1-10 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus :ring-blue-500"/>
      </div>
      <div className="relative w-full max-w-md flex">
        < MdDashboardCustomize className="self-center"/>
      <div className="relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center px-4 py-2 text-gray-700
                     font-medium rounded-md hover:bg-gray-100"
        >
          <span className="text-lg text-black">dashboard</span>
        </button>

        {showMenu && (
          <div className="absolute right-0 top-full mt-2 w-48
                          bg-white border border-gray-200 rounded-lg
                          shadow-lg z-50 overflow-hidden">

            <Link
              to="/kitchen"
              onClick={() => setShowMenu(false)}
              className="block px-4 py-3 text-gray-700
                         hover:bg-gray-100 hover:text-blue-600"
            >
              Kitchen
            </Link>

            <Link
              to="/delivery-details"
              onClick={() => setShowMenu(false)}
              className="block px-4 py-3 text-gray-700
                         hover:bg-gray-100 hover:text-blue-600"
            >
              Delivery Details
            </Link>
          </div>
        )}
      </div>
       
        </div>
       
    </nav>
       {showSignup && (
        <SignupForm onClose={() => setShowSignup(false)} />
      )} 

    <div className="relative w-full ">
    <img src={image1} alt="images" className=" w-full h-100 object-cover border rounded-xl rounded-bl-none rounded-br-none" />
    <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg p-4 text-center text-white">
      <h2 id="home"className=" scroll-mt-24 text-lg md:text-4xl font-sans">Meraki Restaurants & Bars</h2>
      <p className="text-lg md:text-4xl text-black-400"> Welcome To Our Place</p>

      <ul className=" flex flex-cols space-x-8 justify-evenly px-3 py-3">
        <li className="text-lg text-white font-bold">Delicious foods</li>
        <li className="text-lg text-white font-bold">Fast Services</li>
        <li className="text-lg text-white font-bold">Great Hospitality</li>
        <li className="text-lg text-white font-bold">Faster Ordering</li>
      </ul>
    </div>
    </div>
    </>
    

    

  );

}

export default Navbar;