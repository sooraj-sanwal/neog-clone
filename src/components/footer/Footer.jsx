import React from 'react'
import './footer.scss';
import discord from '../../Assets/Images/img23.svg'
import insta from '../../Assets/Images/img24.svg'
import twitter from '../../Assets/Images/img25.svg'
import youtube from '../../Assets/Images/img26.svg'
import linkedin from '../../Assets/Images/img27.svg'
import letters from '../../Assets/Images/img28.svg'
import facebook from '../../Assets/Images/img29.svg'
import telegram from '../../Assets/Images/img30.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <h2>Join your developer community</h2>
      <button><img src={discord} alt="discord image" />Welcome to Discord</button>
      <div className='socialicon'>
        <a href="https://instagram.com" target="_blank"><img src={insta} alt="insta image" /></a>
        <a href="https://twitter.com" target="_blank"><img src={twitter} alt="twitter image" /></a>
        <a href="https://youtube.com" target="_blank"><img src={youtube} alt="youtube image" /></a>
        <a href="https://linkedin.com" target="_blank"><img src={linkedin} alt="linkedin image" /></a>
        <a href="https://google.com" target="_blank"><img src={letters} alt="letters image" /></a>
        <a href="https://facebook.com" target="_blank"><img src={facebook} alt="facebook image" /></a>
        <a href="https://telegram.org" target="_blank"><img src={telegram} alt="telegram image" /></a>
      </div>
      <div className='footerlink'>
        <ul>
          <li>Terms</li>
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
          <li>Community Guidlines</li>
        </ul>
      </div>
      <footer>
        &copy;neoGcamp. All rights reserved
      </footer>
    </div>
  )
}

export default Footer