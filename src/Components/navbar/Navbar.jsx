import React, { useEffect } from 'react';
import { FcLike } from "react-icons/fc";
import { IoBagOutline } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  useEffect(() => {
    const list = document.querySelector('#list');
    const menubtn = document.querySelector('#menubtn');

    const toggleMenu = () => {
      if (list.style.display === "block") {
        list.style.display = "none";
      } else {
        list.style.display = "block"; 
      }
    };

    menubtn.addEventListener("click", toggleMenu);

    return () => {
      menubtn.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <div className="nav">
      <div className="logo">
      </div>
      
      <ul id="list" >
        <li>HOME</li>
        <li>ABOUT</li>
        <li>Men</li>
        <li>WOMAN</li>
        <li>BEAUTY</li>
        <li>Service</li>
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
        <div id="menubtn"> <IoMenuSharp /></div>
      </div>
    </div>
  );
};

export default Navbar;
