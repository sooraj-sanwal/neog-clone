import React from 'react'
import './levelone.scss';
import heroimg from '../../../Assets/leveloneimage/img01.svg'
import heroimg2 from '../../../Assets/leveloneimage/img02.svg'
import heroimg3 from '../../../Assets/leveloneimage/img03.svg'
import heroimg4 from '../../../Assets/leveloneimage/img04.svg'
import heroimg5 from '../../../Assets/leveloneimage/img05.svg'
import heroimg6 from '../../../Assets/leveloneimage/img06.svg'
import heroimg7 from '../../../Assets/leveloneimage/img07.svg'

const LevelOne = () => {
  return (
    <>
      <div className='levelzerohero'>

        <div className='herotext'>
          <h1>levelOne</h1>
          <h2 className='leveloneh2'>Never found a structured course for web-dev?</h2>
          <h2 className='leveloneh2'>Tired of tutorial hell?</h2>
          <p>Don’t worry, levelOne is 6 months of structured learning.</p>
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
            <span><img src= {heroimg3}alt="" />You just need to commit your time to become a super dev. </span>
            <span><img src= {heroimg3}alt="" />Get trained in industry-level coding while creating projects.</span>
            <span><img src= {heroimg3}alt="" />Develop lifetime habit of focused action-based learning.</span>
          </div>
        </div>
      </div>

      <div className="hero2 subsection">

        <div>
          <img src={heroimg4} alt="" />
        </div>
        <div className='herotext2'>
          <div className="ex">
            <span><img src= {heroimg3}alt="" />You will have a dedicated and hardworking peer  group for life.</span>
            <span><img src= {heroimg3}alt="" />  You will learn to clear interview and keep excelling at your job.</span>
            <span><img src= {heroimg3}alt="" /> At last, you will bring out that GENIUS IN YOU. </span>
          </div>
        </div>
      </div>

<div className="levelzerogrid">
  <div>
<img src= {heroimg5} alt="" />
<h3>Learn directly from professionals</h3>

  </div>
  <div>
  <img src= {heroimg6} alt="" />
  <h3>Build industry-standard projects</h3>
  </div>
  <div>
  <img src= {heroimg7} alt="" />
  <h3>Get Hired!</h3>
  </div>
</div>

{/* apply for levelone section */}

<div className='application'>
      <h1>Apply for levelOne</h1>

      <p>Some important pointers to keep in mind before starting with the admission process on portal:</p>

      <div className='herotext2 applicationhero'>
          <div className="ex">
            <span><img src= {heroimg3}alt="" />Join TeamTanay Discord Community (Mandatory) - <a href="https://discord.com/">Discord</a>.</span>
            <span><img src= {heroimg3}alt="" /> Join TeamTanay Telegram channel for important announcements and updates - <a href="https://telegram.org">Telegram</a>.</span>
            <span><img src= {heroimg3}alt="" />There is only one route to get into levelZero i.e. complete till mark9 of mark15 and then start with the admission process on the portal. (No intermediate/experienced route)</span>
            <span><img src= {heroimg3}alt="" />You can check the roadmap for the camp here - <a href="https://neog.camp/roadmap">Roadmap</a></span>
          </div>
        </div>

        <div className="admissionportal">
          <div>
          <h2>neoG Camp 2023 Admission Portal</h2>
          <p>Admission for neoG Camp 2023 is open now. Please go to the portal and submit your portfolio</p>
          </div>
          <div className='btnadmission'>
          <button>Admission Portal</button>
          </div>
        </div>

    </div>

    </>
  )
}

export default LevelOne