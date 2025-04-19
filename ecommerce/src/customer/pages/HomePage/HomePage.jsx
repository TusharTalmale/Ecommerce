import React from 'react'
import MainCrosal from '../../components/HomeCarosel/MainCrosal'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel.jsx';
import { mens_kurta } from '../../../Data/Men/Mmen_kurta.js';
import { lengha_page1 } from '../../../Data/Women/LenghaCholi.js';
import { mensPantsPage1 } from '../../../Data/pants/men_page1.js';
import { dressPage1 } from '../../../Data/dress/page1.js';





const HomePage = () => {
  return (
    <>
        <MainCrosal/> 
  
   {/* <div className='space-y-10 py-20 flex flex-col justify center px-5 lg:px-10'>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/> 
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={" Saree"}/>  
        <HomeSectionCarosel />   */}
       

    {/* </div> */}
    <div className="space-y-10 py-20">
      <HomeSectionCarosel data={mens_kurta} section={"Men's Kurta"} />
       
        <HomeSectionCarosel data={lengha_page1} section={"Lengha Choli"} />
        <HomeSectionCarosel data={dressPage1} section={"Dress"} />
        {/* <HomeSectionCarosel data={kurtaPage1} section={"Women's Kurtas"} />  */}
        <HomeSectionCarosel data={mensPantsPage1} section={"Men's Pants"} /> 
      </div> 


    </>
  )
}

export default HomePage
