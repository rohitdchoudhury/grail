import React from 'react'
import Navbar from '../../components/navbar';
import Searchbar from '../../components/searchbar';
import Cards from '../../components/cards';
import Cards01 from '../../components/cards01';
import Cards02 from '../../components/cards02';
import Footer from '../../components/footer';


function Products() {
  return (
    <div >
      <Navbar/>
      <Searchbar/>
      <Cards/>
      <Cards01/>
      <Cards02/>
      <Footer/>
      
    </div>
  )
}

export default Products;