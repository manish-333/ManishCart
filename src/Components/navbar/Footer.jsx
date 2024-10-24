import React from 'react';
import { FaWallet } from "react-icons/fa";
import { CiDeliveryTruck, CiWallet } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";



const data = [
  {
    id: 1,
    image: '',
    logo: 'Great Value',
    text: 'Most popular brands with widest range of selection at best prices.',
    icon: <CiWallet />

    // Directly assign the icon component
  },
  {
    id: 2, // Ensure this ID is unique
    image: '',
    logo: 'Fast Delivery',
    text: 'Over 20,000 pincodes serviceable across.',
    icon: <CiDeliveryTruck /> // Example of another icon
  },
  {
    id: 3, // Ensure this ID is unique
    image: '',
    logo: 'Secure Payment',
    text: 'Partnered with Indias most popular and secure payment solutions.',
    icon: <RiSecurePaymentLine />
    // Example of another icon
  },
  {
    id: 4, // Ensure this ID is unique
    image: '',
    logo: 'Fast Delivery',
    text: '365 Days Help Desk',
    icon: <FaHeadphonesSimple />,
    icone:<FaWhatsapp />,

    number:'7065637465'
    // Example of another icon
  }
];

const Footer = () => {
  return (
    <div className='footer'>
      {data.map((item) => (
        <div key={item.id} className="footercart">
          {/* Uncomment this if you have images */}
          {/* <img src={item.image} alt="image" /> */}
          <p id="wallet">{item.icon}</p>
          <p id="ptext">{item.logo}</p>
          <p id="pptext">{item.text}</p>
        <div classNmane="lasticone">
        <span id="whts">{item.icone}</span>
      <span id="number">{item.number}</span>
        </div>
        </div>
      ))}
    </div>
  );
}

export default Footer;
