import React from 'react'
import MainCrosal from '../../components/HomeCarosel/MainCrosal'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel.jsx';
import { mens_kurta } from '../../../Data/Men/Men_kurta.js';
import Footer from '../../components/Footer/footer.jsx';

const HomePage = () => {
  return (
    <div>
        <MainCrosal/>
  
    <div className='space-y-10 py-20 flex flex-col justify center px-5 lg:px-10'>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/> 
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Saree"}/>  
        <HomeSectionCarosel />  
       

    </div>
    <Footer/>
    </div>
  )
}

export default HomePage
