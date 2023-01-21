import React from 'react'
import './levelzerohero.scss';
import heroimg from '../../../Assets/levelzeroimage/img1.svg'
import heroimg2 from '../../../Assets/levelzeroimage/img2.svg'
import heroimg3 from '../../../Assets/levelzeroimage/img3.svg'
import heroimg4 from '../../../Assets/levelzeroimage/img4.svg'
import heroimg5 from '../../../Assets/levelzeroimage/img5.svg'
import heroimg6 from '../../../Assets/levelzeroimage/img6.svg'
import heroimg7 from '../../../Assets/levelzeroimage/img7.svg'

const LevelZeroHero = () => {
  return (
    <>
      <div className='levelzerohero' id='levelzero'>

        <div className='herotext'>
          <h1>levelZero</h1>
          <h4>Never programmed ever?</h4>
          <h4>Never written a single line of code?</h4>
          <h4>Start with levelZero. The best course for beginners!</h4>
          <button>Start Learning for FREE</button>
        </div>

        <div>
          <img src={heroimg} alt="" />
        </div>

      </div>

      <div className="hero2">

        <div>
          <img src={heroimg2} alt="" />
        </div>
        <div className='herotext2'>
          <div className="ex">
            <span><img src= {heroimg3}alt="" />You just need:  A Laptop, the internet, and literacy in English </span>
            <span><img src= {heroimg3}alt="" />Learn actively and grow with the community. Let your  21k+ community help you</span>
            <span><img src= {heroimg3}alt="" /> From anywhere in the world:  100% online course</span>
          </div>
        </div>
      </div>

      <div className="hero2 subsection">

        <div>
          <img src={heroimg4} alt="" />
        </div>
        <div className='herotext2'>
          <div className="ex">
            <span><img src= {heroimg3}alt="" />Impress your Friends and Family by sharing your fun projects and stay motivated</span>
            <span><img src= {heroimg3}alt="" />  Test if you like coding or not</span>
            <span><img src= {heroimg3}alt="" />Do all this for FREE </span>
          </div>
        </div>
      </div>

<div className="levelzerogrid">
  <div>
<img src= {heroimg5} alt="" />
<h4>Get started from zero with levelZero Classes</h4>

  </div>
  <div>
  <img src= {heroimg6} alt="" />
  <h4>Build fun mini-apps, host them online and share with your social circle</h4>
  </div>
  <div>
  <img src= {heroimg7} alt="" />
  <h4>Submit your apps to qualify for level1</h4>
  </div>
</div>

    </>
  )
}

export default LevelZeroHero