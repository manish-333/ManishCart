import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './components/Home';
// import Contact from './components/Contact';
// import Apply from './components/Apply';
import Navbar from './Components/navbar/Navbar';
import Maincart from './Components/Maincart';
import Insidecart from './Components/navbar/Insidecart';
import Nextcart from './Components/navbar/Nextcart';
import Telicart from './Components/navbar/Telicart';
import Footwear from './Components/navbar/Footwear';
import Footwearmain from './Components/navbar/footwearmain';
import Sport from './Components/navbar/Sport';
import SportsHelth from './Components/navbar/SportsHelth';
function App() {
  return (
   
   <>

<Navbar />
<Maincart />
<Insidecart />
<Nextcart />
<Telicart />
<Footwear />
<Footwearmain />
<Sport />
<SportsHelth />


   </>
  );
}

export default App;
