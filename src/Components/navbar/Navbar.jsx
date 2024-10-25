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
      // list.style.display = list.style.display === "block" ? "none" : "block";
      if (list.style.display === "block") {
        list.style.display = "none";
      } else {
        list.style.display = "block"; // Use "=" for assignment here
      }
    };

    menubtn.addEventListener("click", toggleMenu);

    // Cleanup the event listener on unmount
    return () => {
      menubtn.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <div className="nav">
      <div className="logo">
        <img alt="Logo" />
      </div>
      
      <ul id="list" style={{ display: 'none' }}>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Service</li>
        <li>Service</li>
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
