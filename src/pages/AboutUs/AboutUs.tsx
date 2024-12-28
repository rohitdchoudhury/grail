import React from 'react'
import Navbar from '../../components/navbar'
import Grailtech from '../../components/grailtech'
import Description2 from '../../components/description2'
import VisionSection from '../../components/visionsection'
import DesignPrincipleCard from '../../components/designprinciple'
import ProductionSection from '../../components/production'
import EngineeringSection from '../../components/engineeringsection'
import StoreProductSection from '../../components/click'
import Footer from '../../components/footer'

function AboutUs() {
  return (
    <div>
      <Navbar/>
      <Grailtech/>
      <Description2/>
      <VisionSection/>
      <DesignPrincipleCard/>
      <ProductionSection/>
      <EngineeringSection/>
      <StoreProductSection/>
      <Footer/>
      
    </div>
  )
}

export default AboutUs