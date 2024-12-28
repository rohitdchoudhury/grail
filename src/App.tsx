import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Slider from './components/slider';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import Description from './components/description';
import FashionCard from './components/fashioncard';
import TrendingBox from './components/Trendingbox';
import EssentialsBox from './components/EssentialBox';
import Footer from './components/footer';
import Router from './router';


function App() {
  
  useGSAP(()=>{

  })
  return (
    <Router/>
  );
}

export default App;
