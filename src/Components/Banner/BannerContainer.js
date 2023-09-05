import React, { useState } from 'react';
import Banner from './Banner'

const BannerContainer = () => {

    const [index, setIndex] = useState(0); 
    const length = 3;
  
    const handlePrevious = () => {
      setIndex(index > 0 ? index - 1 : length);
    };
  
    const handleNext = () => {
      setIndex(index >= length ? 0 : index + 1);
    };

    return (
        <Banner 
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        index={index}/>
        );
};

export default BannerContainer;