import React from 'react';

const data = [
  {
    id: 1,
    image: 'https://img.freepik.com/free-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150321996.jpg?t=st=1729571938~exp=1729575538~hmac=e658ff67d22fe99fa8ce1f8c2802fa41457f001e9b5cea9b34519b1dcb112437&w=1060'
  }
  // {
  //   id:2,
  //   image:'https://img.freepik.com/free-psd/modern-sales-banner-template_23-2148995448.jpg?ga=GA1.1.628132343.1721162054&semt=ais_hybrid'
  // }
];

const Maincart = () => {
  return (
    <div className="maincart">
      {data.map(item => (
        <div key={item.id}>
          <img src={item.image} alt="Main cart item" />
        </div>
      ))}
    </div>
  );
};

export default Maincart;
