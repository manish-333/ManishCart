import React from 'react';

const data = [
  {
    id: 1,
    image: 'https://rukminim2.flixcart.com/image/1200/1200/xif0q/shoe/j/l/c/14-baxb937-14-baxxico-navy-original-imah2w5kjvgmadps.jpeg?q=70&crop=false',
    name:'Baxxico',
    detail:'Mens Latest Casual Party Wear Slip-on Shoes Party Wear For Men' ,
    price:'1,349'
  },
  {
    id: 1,
    image: 'https://rukminim2.flixcart.com/image/1200/1200/xif0q/shoe/j/l/c/14-baxb937-14-baxxico-navy-original-imah2w5kjvgmadps.jpeg?q=70&crop=false',
    name:'Baxxico',
    detail:'Mens Latest Casual Party Wear Slip-on Shoes Party Wear For Men' ,
    price:'1,349'
  },
  {
    id: 1,
    image: 'https://rukminim2.flixcart.com/image/1200/1200/xif0q/shoe/j/l/c/14-baxb937-14-baxxico-navy-original-imah2w5kjvgmadps.jpeg?q=70&crop=false',
    name:'Baxxico',
    detail:'Mens Latest Casual Party Wear Slip-on Shoes Party Wear For Men' ,
    price:'1,349'
  },
  {
    id: 1,
    image: 'https://rukminim2.flixcart.com/image/1200/1200/xif0q/shoe/j/l/c/14-baxb937-14-baxxico-navy-original-imah2w5kjvgmadps.jpeg?q=70&crop=false',
    name:'Baxxico',
    detail:'Mens Latest Casual Party Wear Slip-on Shoes Party Wear For Men' ,
    price:'1,349'
  },
  

];

const Footwearmain = () => {
  return (
    <div className="footmain">
      {data.map((item) => (
        <div key={item.id} className="maiinside">
          <img src={item.image} alt="" />

          <div className="contantdata">
            <p>{item.name}</p>
            <p>{item.detail}</p>
            <p  id="sbtn">{item.price}             <button id="btn">Add to cart</button>
            </p>

          </div>

        </div>
       
      ))}
    </div>
  );
};

export default Footwearmain;
