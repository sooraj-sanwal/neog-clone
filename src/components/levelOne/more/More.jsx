import React from 'react'
import './more.scss';
import bookimg from '../../../Assets/leveloneimage/img19.svg'
import codeimg from '../../../Assets/leveloneimage/img20.svg'
import doubtimg from '../../../Assets/leveloneimage/img21.svg'
import hackathonimg from '../../../Assets/leveloneimage/img22.svg'
import interviewimg from '../../../Assets/leveloneimage/img23.svg'
import teamsimg from '../../../Assets/leveloneimage/img24.svg'
import jobimg from '../../../Assets/leveloneimage/img25.svg'
import insightsimg from '../../../Assets/leveloneimage/img26.svg'

const More = () => {
  return (
    <div className='more'>
      <h1>What's more in levelOne</h1>

      <div className="moregrid">
        <div>
          <img src= {bookimg} alt="" />
          <h3>Book Reading: EJS sessions</h3>
        </div>
        <div>
          <img src= {codeimg} alt="" />
          <h3>Weekly Code Reviews</h3>
        </div>
        <div>
          <img src= {doubtimg} alt="" />
          <h3>Doubt Clearing Sessions</h3>
        </div>
        <div>
          <img src= {hackathonimg} alt="" />
          <h3>neoG Hackathon and Games</h3>
        </div>
        <div>
          <img src= {interviewimg} alt="" />
          <h3>Interview Preparation</h3>
        </div>
        <div>
          <img src= {jobimg} alt="" />
          <h3>Job Oriented Learning</h3>
        </div>
        <div>
          <img src= {teamsimg} alt="" />
          <h3>Exclusive teams to discuss and reflect</h3>
        </div>
        <div>
          <img src= {insightsimg} alt="" />
          <h3>Interview Insights From Experts</h3>
        </div>
      </div>
    </div>
  )
}

export default More