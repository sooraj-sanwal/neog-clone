import React from 'react'
import './yourteacher.scss';
import tanayimg from '../../../Assets/levelzeroimage/img8.jpg'
import insta from '../../../Assets/Images/img24.svg'
import twitter from '../../../Assets/Images/img25.svg'
import youtube from '../../../Assets/Images/img26.svg'
import linkedin from '../../../Assets/Images/img27.svg'
import facebook from '../../../Assets/Images/img29.svg'
import telegram from '../../../Assets/Images/img30.svg'

const YourTeacher = () => {
  return (
    <div className='teacher'>
      <h1>Your Teacher</h1>

      <div className="teacherflex">
        <div>
          <img src= {tanayimg} alt=""className='tnayimg' />
        </div>
        <div className='abttanay'>
          <h1>Tanay Pratap</h1>
          <h3>CEO @invact | Ex Sr. SDE at Microsoft</h3>
          <p>Tanay who previously worked at Microsoft as a Sr. SDE who led the migration of the <b>Microsoft</b>  Teams Communication Platform from Angular to React growing users from <b>17M to 100M+</b> , is now fully <b>committed to make education accessible for everyone.</b> </p>

          <p>He has been teaching and mentoring, via different channels all over India <b>since 2014.</b> A staunch promoter of <b>job-oriented programming and action-based learning .</b> He spends his time on the internet with the sole purpose of helping land better jobs.</p>

          <p> <b>A CEO by day & a teacher by night. </b> Know more about this batman below <br /> 👇</p>

          <div className='teachericon'>
        <a href="https://instagram.com" target="_blank"><img src={insta} alt="insta image" /></a>
        <a href="https://twitter.com" target="_blank"><img src={twitter} alt="twitter image" /></a>
        <a href="https://youtube.com" target="_blank"><img src={youtube} alt="youtube image" /></a>
        <a href="https://linkedin.com" target="_blank"><img src={linkedin} alt="linkedin image" /></a>
        <a href="https://facebook.com" target="_blank"><img src={facebook} alt="facebook image" /></a>
        <a href="https://telegram.org" target="_blank"><img src={telegram} alt="telegram image" /></a>
      </div>

        </div>
      </div>
    </div>
  )
}

export default YourTeacher