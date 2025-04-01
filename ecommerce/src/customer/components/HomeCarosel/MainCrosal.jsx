import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from '../../pages/HomePage/MainCarosalData';

const MainCrosal = () => {
    const items = MainCarouselData.map((item, index) => (
        <img 
            // ✅ Correct usage of index
            className='cursor-pointer' 
            role='presentation' 
            src={item.image} 
            alt={`carousel-item-${index}`} 
        />
    ));

    return <AliceCarousel 
    items={items} 
    disableButtonsControls
    infinite
    autoPlay
    autoPlayInterval={1000}
    />;
};

export default MainCrosal;
