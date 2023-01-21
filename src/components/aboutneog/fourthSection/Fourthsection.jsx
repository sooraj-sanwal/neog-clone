import React from 'react'
import './fourthsection.scss';
import card1 from '../../../Assets/AboutImages/img4.jpeg'
import card2 from '../../../Assets/AboutImages/img5.jpeg'
import card3 from '../../../Assets/AboutImages/img6.jpg'
const Fourthsection = () => {
  return (
    <>
      <h1 className='heading'>Try our specials</h1>
      <div className='fourthdiv'>
        <div>
          <img src= {card1}alt="" />
          <h3>why are we changing the <br /> interview training timelines?</h3>
          <p>In neoG'22, we will be doing interview sessions differently.</p>
            <button> Read Now</button>
        </div>
        <div>
        <img src= {card2}alt="" />
          <h3>why I don't want you to be a <br /> full-stack developer?</h3>
          <p>In neoG'22, I won't push you to be a full-stack developer.</p>
            <button> Read Now</button>
        </div>
        <div>
        <img src= {card3}alt="" />
          <h3>why is neoG Camp 6 months <br /> now?</h3>
          <p>What's changing in neoG'22? Are we going to teach something new?</p>
            <button> Read Now</button>
        </div>
      </div>
    </>
  )
}

export default Fourthsection