import React, { useRef, useState } from 'react';
import './ToggleButton.css';

const ToggleButton = ({ handleClick }) => {

  const sliderParentRef = useRef()
  const sliderRef = useRef();

  const handleClick2 = () => {
    sliderParentRef.current.classList.toggle('round-parent')
    sliderRef.current.classList.toggle('round')
    handleClick()
  }

  return (
    <div className="toggle-div-2-parent">
      <div className="toggle-div-2" ref={sliderParentRef} onClick={() => handleClick2()}>
        <span className="slider" ref={sliderRef} ></span>
      </div>
    </div>
  )
}

export default ToggleButton
