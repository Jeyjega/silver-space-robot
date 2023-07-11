import React from 'react';
import css from './Header.css';
import { AiOutlineUser , AiOutlineMenu} from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

function Header() {
    return (
      <div className="Header-Container">
      <div className='tittle'>
        <h4 className='high'>Packup</h4>
      </div>

      <div className="Header-right">
        <div className='menu'>
            <ul className='menu'>
                <li><b>Home</b></li>
                <li><b>Trending</b></li>
                <li><b>Categories</b></li>
                </ul>
              
        </div>
        <AiOutlineUser className='icon'></AiOutlineUser>
                  <FiShoppingCart className='icon'></FiShoppingCart>
                  {/* <AiOutlineMenu className='icon'></AiOutlineMenu> */}
             

        

      </div>
        
        
      </div>
    );
  }
  
  export default Header;
  