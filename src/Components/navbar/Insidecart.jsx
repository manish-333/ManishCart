import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

const data = [
  {
    id: 1,
    image:
      "https://cdn.shopclues.com/images1/thumbnails/117903/320/320/153593970-117903686-1726813050.jpg",
    actualprice: "1600",
    discountprice: "2000",
    offer: "80%",
  },
  {
    id: 2,
    image:
      "https://cdn.shopclues.com/images1/thumbnails/117903/320/320/153593970-117903686-1726813050.jpg",
    actualprice: "2000",
    discountprice: "2500",
    offer: "80%",
  },
  {
    id: 3,
    image:
      "https://cdn.shopclues.com/images1/thumbnails/117903/320/320/153593970-117903686-1726813050.jpg",
    actualprice: "2400",
    discountprice: "3000",
    offer: "80%",
  },
  {
    id: 4,
    image:
      "https://cdn.shopclues.com/images1/thumbnails/117903/320/320/153593970-117903686-1726813050.jpg",
    actualprice: "3200",
    discountprice: "4000",
    offer: "80%",
  },
];

const Insidecart = () => {
  return (
    <div className="insidecart">
      {data.map((item, index) => {
        return (
          <div key={index} className="cartbox">
            <div>
              <img src={item.image} alt="" />
            </div>

            <div className="cartsecond">
              <div className="icone">
                <FaIndianRupeeSign />

                <p id="actualprice">{item.actualprice}</p>
                <del id="discount">
                  {" "}
                  <FaIndianRupeeSign />
                  {item.discountprice}
                </del>
                <span>{item.offer}</span>
              </div>
              <div className="star">
                <FaStar />

                <FaStar />

                <FaStar />

                <FaStar />
                <FaStarHalfAlt />
              </div>
              <div className="shipping">
                <MdLocalShipping />
                <p>Free Shipping</p>
                <button id="btn">Add to cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Insidecart;
