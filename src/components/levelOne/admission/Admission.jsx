import React from 'react'
import './admission.scss';
import aid from '../../../Assets/leveloneimage/img27.svg'
import refund from '../../../Assets/leveloneimage/img28.svg'
import why from '../../../Assets/leveloneimage/img29.svg'

const Admission = () => {
  return (
    <>
    <div className='Admission'>
      <h1>Admission Fee</h1>

      <div className="feesflex">
        <div className='rupeeflex'>
          <div>
          <h1>₹ 30,000/- <sub><b>+18% GST*</b></sub></h1>
          </div>
          <div>
          <h4>EMI options are available as well.</h4>
          <p><b>*A convenience fee may be charged by the payment gateway you choose to pay with.</b></p>
          </div>
        </div>


        <div>
        <div className='herotext2'>
          <div className="ex admissionex">
            <span><img src= {aid}alt="" /> <h3>Financial Aid</h3></span>
            <span><img src= {refund}alt="" /> <h3>Refund Policy</h3> </span>
            <span><img src= {why}alt="" /> <h3>Why are we charging</h3> </span>
          </div>
        </div>
        </div>
      </div>
    </div>
     <div className="timing">
     <h1>levelOne Timings</h1>
     <div className="levelonetiming">
       <div>
         <h4>Part-time course</h4>
         <p>15 hours per week</p>
       </div>
       <div>
         <h4>Weekend Lectures</h4>
         <p>Saturday and Sunday</p>
       </div>
       <div className='noborder'>
         <h4>Office hours to solve doubts</h4>
         <p>Weekdays</p>
       </div>
     </div>
     </div>
     </>

  )
}

export default Admission