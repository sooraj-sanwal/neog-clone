import React from 'react'
import './about.scss';
import beginer from '../../../Assets/Images/img10.svg'
import webdev from '../../../Assets/Images/img11.svg'
import learning from '../../../Assets/Images/img12.svg'
import group from '../../../Assets/Images/img13.svg'
import live from '../../../Assets/Images/img14.svg'
import interview from '../../../Assets/Images/img15.svg'

const About = () => {
  return (
    <div className="flex">
    <div className="cardslogo">
        <div className="item">
            <img src= {beginer} alt=""/>
            <h3>Beginner-Friendly</h3>
            <p>You have <b>never written a single line of code.</b>  No problem, we got you covered. Start with <b>levelZero.</b>levelZero of neoG Camp is absolutely beginner-friendly.</p>
        </div>
        <div className="item">
            <img src= {webdev} alt=""/>
            <h3>A-Z of Advanced Fullstack Web Dev</h3>
            <p>After this bootcamp, you’ll be able to create and <b>host an app end to end.</b>  This structured camp will take you from a <b>beginner to an advanced level </b> programmer.</p>
        </div>
        <div className="item">
            <img src= {learning} alt=""/>
            <h3>Project-Based Learning</h3>
            <p>You will <b>learn everything through live projects.</b>  You will create more than 20 projects during this journey. Projects which are <b>fun to share</b>  with your friends and <b>impressive</b>   to your future employer as well.</p>
        </div>
        <div className="item">
            <img src= {group} alt=""/>
            <h3>Dedicated Peer Groups</h3>
            <p>You will have a <b>closed and dedicated classroom</b>  experience. You will have this <b>extraordinary alumni group</b>  as your biggest asset for career building. <b> Make friends, </b>network, find your future colleagues, cofounders, and referrals here.</p>
        </div>
        <div className="item">
            <img src= {live} alt=""/>
            <h3>100+ Hours of Live Teaching</h3>
            <p> <b>No boring recorded videos to learn alone.</b>  You will learn to live with your peers, ask doubts and discuss with your mentor and others. You will also <b>have your team</b>  to discuss lectures and network.</p>
        </div>
        <div className="item">
            <img src= {interview} alt=""/>
            <h3>Interview Readiness</h3>
            <p>You become <b>industry-ready with us.</b>  We have a few sessions reserved for <b>interview preparation. </b> Everything taught to you is industry-relevant and job-oriented too.</p>
        </div>
    </div>
</div>
  )
}

export default About