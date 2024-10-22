import React from 'react'
import { FcLike } from "react-icons/fc";
import { IoBagOutline } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";


const Navbar = () => {
  return (
    <div className="nav">
        <div className="logo">LOGO</div>
        
       <ul>
        <li>Home</li>
        <li>About</li>
        <li>Servise</li>
        <li>Servise</li>
        <li>Servise</li>
        <li>Servise</li>

       </ul>
       <div className="icone">

        <div className="profile">
        <GrUserManager />
        <p>Profile</p>
        </div>
    
        <div className="profile">
        <FcLike />
        <p>Wishlist</p>
        </div>
        <div className="profile">
        <IoBagOutline />
        <p>Bag</p>
        </div>
       

     
       </div>
        </div>
  )
}

export default Navbar