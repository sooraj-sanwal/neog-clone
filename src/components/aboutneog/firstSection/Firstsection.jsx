import React from 'react'
import './firstsection.scss';
import quote from '../../../Assets/AboutImages/img1.svg'
import img2 from '../../../Assets/AboutImages/img2.svg'

const Firstsection = () => {
  return (
    <>
      <img src={quote} alt=""  className='quoteimg'/>
      <div className='firstsection'>
        <div>
          <h3>Get so good that your work becomes your certificate. Your masterpiece becomes your credentials.</h3>
          <h3>Creation over Certification. Craftsmanship over Credentials.</h3>
          <h3>Something to internalize for life.</h3>
          <p><b>Tanay Pratap</b>  </p>
          <p>Mentor at neoG Camp</p>
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
      </div>
    </>
  )
}

export default Firstsection