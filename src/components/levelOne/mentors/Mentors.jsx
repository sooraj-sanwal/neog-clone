import React from 'react'
import './mentors.scss';
import tanayimg from '../../../Assets/leveloneimage/img09.png'
import sushilimg from '../../../Assets/leveloneimage/img10.jpg'
import akankshaimg from '../../../Assets/leveloneimage/img11.jpg'
import vikramimg from '../../../Assets/leveloneimage/img12.jpg'
import rachitimg from '../../../Assets/leveloneimage/img13.png'
import pavithraimg from '../../../Assets/leveloneimage/img14.jpg'
import rajatimg from '../../../Assets/leveloneimage/img15.jpg'
import manjulaimg from '../../../Assets/leveloneimage/img16.jpg'
import sukantimg from '../../../Assets/leveloneimage/img17.png'
import kushagraimg from '../../../Assets/leveloneimage/img18.jpg'

const Mentors = () => {
  return (
    <>
    <div className='mentors'>
      <h1>Your Mentors</h1>

      <div className="gridmentor-row1">
        <div>
          <img src={tanayimg} alt="" />
          
          <h2>Tanay Pratap</h2>
          <p>CEO @invact | Ex Sr. SDE at Microsoft</p>
          <h4><b>React Echosystem and JavaScript</b></h4>
        </div>
        <div>
          <img src={sushilimg} alt="" />
          <h2>Sushil Tripathi</h2>
          <p>Senior Software Engineer at Microsoft</p>
          <h4><b>Data Structures and Algorithms using JavaScript</b></h4>
        </div>
        <div>
          <img src={akankshaimg} alt="" />
          <h2>Akanksha Choudhary</h2>
          <p>TechLead at neoG Camp</p>
          <h4><b>Cracking the JS interviews</b></h4>
        </div>

      </div>

      <div className='gridmentor-row2'  >
        <div>
          <img src={vikramimg} alt="" />
          <h2>Vikram Santhalia</h2>
          <p>Senior UX Engineer at Google</p>
          <h4><b>Intro to Angular and CSS Animations in Depth</b></h4>
        </div>
        <div>
          <img src={rachitimg} alt="" />
          <h2>Rachit Gulati</h2>
          <p>Senior Software Engineer at LinkedIn</p>
          <h4><b>Cracking Hackathon</b></h4>
        </div>

      </div>
    </div>
    <div className='mentors'>
      <h1>Expert Insights</h1>

      <div className="gridmentor-row1">
        <div>
          <img src={pavithraimg} alt="" />
          <h2>Pavithra Kodmad</h2>
          <p>Design systems developer at GitHub</p>
          <h4><b>Web Performance</b></h4>
        </div>
        <div>
          <img src={rajatimg} alt="" />
          <h2>Rajat Kumar</h2>
          <p>CTO and Co-founder, Shaztra</p>
          <h4><b>Understanding bundlers better by building your own</b></h4>
        </div>
        <div>
          <img src={manjulaimg} alt="" />
          <h2>Manjula Dube</h2>
          <p>IT Delivery Manager at Vanguard | Organizer at React India & JSConf India | Founder Geekabyte</p>
          <h4><b>Web Accessibility 101</b></h4>
        </div>

      </div>

      <div className='gridmentor-row2'  >
        <div>
          <img src={sukantimg} alt="" />
          <h2>Sukant Saxena</h2>
          <p>People Partner, SquadStack | Ex-Hiring Manager(Product and Tech) @Unacademy</p>
          <h4><b>How to tackle HR interviews</b></h4>
        </div>
        <div>
          <img src={kushagraimg} alt="" />
          <h2>Kushagra Gour</h2>
          <p>Frontend Lead at PushOwl</p>
          <h4><b>Knowing CSS Best Practices</b></h4>
        </div>

      </div>
    </div>
    <div className='guestlecture'>
      <p>*tentative guest lectures for camp'23</p>
    </div>
    </>
  )
}

export default Mentors