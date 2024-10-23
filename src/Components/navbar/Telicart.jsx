import React from 'react';
import { FaRupeeSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";



const data = [
  {
    id: 1,
    image: 'https://assets.sangeethamobiles.com/product_img/16314/1712572187_lqh.jpg',
    name: 'Xiaomi Smart TV X Series GTV 43 (108 cm)',
    price: '₹22999.00',
    delivery: 'Free delivery'
  },
  {
    id: 1,
    image: 'https://assets.sangeethamobiles.com/product_img/16314/1712572187_lqh.jpg',
    name: 'Xiaomi Smart TV X Series GTV 43 (108 cm)',
    price: '₹22999.00',
    delivery: 'Free delivery'
  },
  {
    id: 1,
    image: 'https://assets.sangeethamobiles.com/product_img/16314/1712572187_lqh.jpg',
    name: 'Xiaomi Smart TV X Series GTV 43 (108 cm)',
    price: '₹22999.00',
    delivery: 'Free delivery'
  },
  {
    id: 1,
    image: 'https://assets.sangeethamobiles.com/product_img/16314/1712572187_lqh.jpg',
    name: 'Xiaomi Smart TV X Series GTV 43 (108 cm)',
    price: '₹22999.00',
    delivery: 'Free delivery'
  },
];

const Telicart = () => {
  return (
    <div className='Television'>
     
        {data.map((item) => (
          <div key={item.id} className="telecart">
            <img src={item.image} alt="Television" />
            <div className="content">
              <p>{item.name}</p>
              <p>{item.price}</p>
            <p id="startv">  <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke /></p>

    


              <p id="delivery">{item.delivery} <button id="btncart">ADD TO CART</button></p>
            </div>
          </div>
        ))}
   
    </div>
  );
};

export default Telicart;
