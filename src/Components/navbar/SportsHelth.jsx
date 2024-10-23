import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const data = [
  {
    id: 1,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kit/i/3/w/unfilled-heavy-premium-2-ft-black-srf-punching-bag-hand-wrap-original-imagjt784bnfwh9d.jpeg?q=70",
    name: "LYCAN 2Ft Unfilled Heavy Black Boxing Bag with Steel Ch...",
    price: "₹448 ",
    offer: "₹99955% off",
    delivery: "free delivery",
  },
  {
    id: 2,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kit/i/3/w/unfilled-heavy-premium-2-ft-black-srf-punching-bag-hand-wrap-original-imagjt784bnfwh9d.jpeg?q=70",
    name: "LYCAN 2Ft Unfilled Heavy Black Boxing Bag with Steel Ch...",
    price: "₹448 ",
    offer: "₹99955% off",
    delivery: "free delivery",
  },
  {
    id: 3,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kit/i/3/w/unfilled-heavy-premium-2-ft-black-srf-punching-bag-hand-wrap-original-imagjt784bnfwh9d.jpeg?q=70",
    name: "LYCAN 2Ft Unfilled Heavy Black Boxing Bag with Steel Ch...",
    price: "₹448 ",
    offer: "₹99955% off",
    delivery: "free delivery",
  },
{
    id: 4,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kit/i/3/w/unfilled-heavy-premium-2-ft-black-srf-punching-bag-hand-wrap-original-imagjt784bnfwh9d.jpeg?q=70",
    name: "LYCAN 2Ft Unfilled Heavy Black Boxing Bag with Steel Ch...",
    price: "₹448 ",
    offer: "₹99955% off",
    delivery: "free delivery",
  },
  
];

const SportsHelth = () => {
  return (
    <div className="SportsHelth">
      {data.map((item) => (
        <div key={item.id} className="shelth">
          <img src={item.image} alt="Sports health item" />
          <div className="contanthelth">
            <p>{item.name}</p>
            <div className="itemprice">
              <p>{item.price}</p>
              <p>{item.offer}</p>
            </div>
            <p id="startv">
              <FaStar />
              <FaStar />

              <FaStar />

              <FaStar />
              <FaRegStarHalfStroke />
            </p>
          </div>
          <div className="lastbtn">
            <p>
              {item.delivery} </p>
              <p><button id="btn">Add to cart</button></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SportsHelth;
