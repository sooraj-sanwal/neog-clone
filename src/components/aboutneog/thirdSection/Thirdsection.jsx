import React from 'react'
import './thirdsection.scss';
import neoimg from '../../../Assets/AboutImages/img2.svg'

const Thirdsection = () => {
  return (
    <div className='thirdsection'>
      <h1 >neoG's Letters</h1>
      <div className='neoletter'>
        <div className='lettertext'>
          <h1>Do you want to know what's
            cooking at neoG?</h1>
          <p>Be the first to recieve crucial updates and resources curated by the team at neoG.</p>
          <button>Subscribe to our newsletter</button>
        </div>
        <div>
          <img src= {neoimg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Thirdsection