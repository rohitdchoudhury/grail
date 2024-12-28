import React from 'react'
import Navbar from '../../components/navbar';
import Slider from '../../components/slider';
import Description from '../../components/description';
import FashionCard from '../../components/fashioncard';
import TrendingBox from '../../components/Trendingbox';
import EssentialsBox from '../../components/EssentialBox';
import Footer from '../../components/footer';

function Home() {
  return (
    <div >
      <Navbar/>
      <Slider/>
      <Description/>
      <FashionCard/>
      <TrendingBox/>
      <EssentialsBox/>
      <Footer/>
    </div>
  )
}

export default Home;