import React from 'react'
import { Link } from 'react-router-dom';
import './carosal.scss'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carimg1 from '../../../Assets/Images/img07.svg'
import carimg2 from '../../../Assets/Images/img08.svg'
import carimg3 from '../../../Assets/Images/img09.svg'

const Carosal = () => {
  return (

    <Carousel
      infiniteLoop
      autoPlay
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      <div className='image'>
        <div className='text'>
          <h1>Experience the joy <br />of creating.</h1>
          <p>Our structured course also has job placement assistence.</p>
          <button className='carosoulbtn'><Link to={"/levelZero"}>Know more</Link></button>
        </div>
        <div className='img'>
          <img src={carimg1} alt="caroneimg" />
        </div>
      </div>
      <div className='image'>
        <div className='text'>
          <h1>Get trained for job <br /> interviews.</h1>
          <p>Our structured course also has job placement assistence.</p>
          <button className='carosoulbtn'>Know more</button>
        </div>
        <div className='img'>
          <img src={carimg2} alt="caroneimg" />
        </div>
      </div>
      <div className='image'>
        <div className='text'>
          <h1>Sign up for your <br /> success.</h1>
          <p>Our structured course also has job placement assistence.</p>
          <button className='carosoulbtn'>Apply now!</button>
        </div>
        <div className='img'>
          <img src={carimg3} alt="caroneimg" />
        </div>
      </div>
    </Carousel>

  )
}

export default Carosal