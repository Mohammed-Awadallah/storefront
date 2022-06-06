import React from 'react';
import './App.scss';
import Header from './components/header'; 
import Footer from './components/footer'; 
import Categories from './components/storefront/categories';
import Products from './components/storefront/products';
 // eslint-disable-next-line
export default(props) => {
  return (
    <>
      <Header/>
      <Categories />
      <Products />
      <Footer/>
    </>
  );
};