import React, { useRef, useState } from 'react';
import Particles from 'react-particles-js';
import './ToggleButton.css';

const particlesOptions = {
  "particles": {
    "number": {
      "value": 8,
      "density": {
        "enable": false,
        "value_area": 550
      }
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 0,
        "color": "#ffd700"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "https://dl.airtable.com/.attachments/aab71d79b82e6a71db8bfa9c6be8bdfb/e6c0ff3d/hippo.png",
        "width": 100,
        "height": 100
      }
    },
    "size": {
      "value": 30,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 400,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      }

    },
    "modes": {
      "repulse": {
        "distance": 175,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
}

const ToggleButton = () => {

  const sliderParentRef = useRef()
  const sliderRef = useRef();
  const [message, setMessage] = useState('On')
  const [isToggleOn, setIsToggleOn] = useState(false)

  const handleClick = () => {
    if (isToggleOn) {
      setMessage('On')
    } else {
      setMessage('Off')
    }
    setIsToggleOn(!isToggleOn)
    sliderParentRef.current.classList.toggle('round-parent')
    sliderRef.current.classList.toggle('round')
  }

  return (
    <div className="toggle-div-2-parent">
      {isToggleOn && <Particles className='particles' params={particlesOptions} />}
      <div className="toggle-div-2" ref={sliderParentRef} onClick={() => handleClick()}>
        <span className="slider" ref={sliderRef} ></span>
      </div>
      <h4 className="switchLabel22">Turn Animation {message}</h4>
    </div>
  )
}

export default ToggleButton
