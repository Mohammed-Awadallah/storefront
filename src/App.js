import React from 'react';
import './App.scss';
import Header from './components/header'; 
import Footer from './components/footer'; 
import StoreFront from './components/storefront/storefront';
// import Cart from './components/cart/cart';
// import { Routes, Route } from "react-router-dom";


 // eslint-disable-next-line
export default(props) => {

  return (
    <>
      <Header/>
      <StoreFront/>
     {/* <Routes>
        {/* <Route path="/" element={<StoreFront />} /> */}
        {/* <Route path="/cart" element={<Cart />} />
     </Routes> */} 
      <Footer/>
    </>
  );
};