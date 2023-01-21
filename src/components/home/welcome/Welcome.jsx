import React from 'react'
import { Link } from 'react-router-dom';

import './welcome.scss';

const Welcome = () => {
  return (
    <>
      <h1 className='welcomeheading'>Welcome to neoG Camp</h1>
      <div className='welcomediv'>
        <div>
          <p>Step 1: Free and open for all</p>
          <h1>levelZero</h1>
          <ul>
            <li>To enroll for levelOne, completing till mark9 of levelZero is a MUST.</li>
            <li>An intermediate level, 6 months of structured learning.</li>
            <li>Live classes on Zoom.</li>
            <li>Create multiple apps to showcase your learning.</li>
            <li>Learn Advanced React, React Ecosystem, ExpressJS + Database, Auth and more.</li>
            <li>Get interview-ready with advanced JS, CSS, and Typescript.</li>
          </ul>
          <div className='btn'>
            <button> <Link to={"/levelZero"}>Learn More --&gt;</Link></button>
          </div>
        </div>
        <div>
          <p>Step 2: Closed focused group</p>
          <h1>levelOne</h1>
          <ul>
            <li>To enroll for levelOne, completing till mark9 of levelZero is a MUST.</li>
            <li>An intermediate level, 6 months of structured learning.</li>
            <li>Live classes on Zoom.</li>
            <li>Create multiple apps to showcase your learning.</li>
            <li>Learn Advanced React, React Ecosystem, ExpressJS + Database, Auth and more.</li>
            <li>Get interview-ready with advanced JS, CSS, and Typescript.</li>
          </ul>
          <div className='btn'>
            <button><Link to={"/levelone"}>Learn More --&gt;</Link></button>
          </div>
        </div>
        <div>
          <p>Step 3: Job placement Assistance*</p>
          <h1>Get Placed</h1>
          <ul>
            <li>To enroll for levelOne, completing till mark9 of levelZero is a MUST.</li>
            <li>An intermediate level, 6 months of structured learning.</li>
            <li>Live classes on Zoom.</li>
            <li>Create multiple apps to showcase your learning.</li>
            <li>Learn Advanced React, React Ecosystem, ExpressJS + Database, Auth and more.</li>
            <li>Get interview-ready with advanced JS, CSS, and Typescript.</li>
          </ul>
          <div className='btn'>
            <button><Link to={"/levelZero"}>Learn More --&gt;</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome