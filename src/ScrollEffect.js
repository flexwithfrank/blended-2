import React, { useState } from 'react';
import './App.css';

function ScrollEffect() {
   const [state, setstate] = useState(false);

  const changeClass = () => {
    const scrollValue = document.documentElement.scrollTop;

    if(scrollValue > 200)
    {
      setstate(true);
    }
    else{
      setstate(false);
    }
      
  }
  window.addEventListener('scroll', changeClass);

  return (
    <div className="App">
      <h1 className={ state ? "blue" : "" }>Hello, World</h1>
    </div>
  )
}

export default ScrollEffect;