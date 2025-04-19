import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import HomeSectionCard from '../HomeSectionCard/HomeSectionCard.jsx';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import { mens_kurta } from '../../../Data/Men/Mmen_kurta.js';

const HomeSectionCarosel = ({data =[],sectionName}) => {
  // Start with 0 for the first page of items
  const [startIndex, setStartIndex] = useState(0);
  
  // Define how many items to show at a time (e.g., 5 items)
  const itemsPerPage = 5;

  // Calculate end index based on the start index and number of items per page
  const endIndex = startIndex + itemsPerPage;
  
  // Slice the data dynamically based on startIndex and itemsPerPage
  const visibleItems = data.slice(startIndex, endIndex).map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));

  // Update start index when clicking next/prev, while checking bounds
  const handleNext = () => {
    if (endIndex < data.length) {
      setStartIndex(prev => prev + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - itemsPerPage);
    }
  };

  // The responsive config can remain the same, but note that visibleItems is updated dynamically
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: itemsPerPage },
  };

  return (
    <div className=" border ">
        <h2  className="text-2xl font-extrabold text-gray-900 py-3">{sectionName}</h2>
      <div className="relative p-4 border">
        
        <AliceCarousel
          items={visibleItems}
          disableButtonsControls
          mouseTracking
          infinite={false} 
          responsive={responsive}
          disableDotsControls
          animationType="fadeout"
          animationDuration={3000}
        />
        {endIndex < data.length && (
          <Button
            onClick={handleNext}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: 'absolute',
              top: '8rem',
              right: '0rem',
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white"
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
          </Button>
        )}
        {startIndex > 0 && (
          <Button
            onClick={handlePrev}
            variant="contained"
            className="z-50 bg-[]"
            sx={{
              position: 'absolute',
              top: '8rem',
              left: '0rem',
              transform: "translateX(-50%) rotate(-90deg)",
             
            }}
             color="white"
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
