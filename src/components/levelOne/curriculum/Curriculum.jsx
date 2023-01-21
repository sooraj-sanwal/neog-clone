import React from 'react'
import './curriculum.scss';

const Curriculum = () => {
  return (
    <div className='curriculum'>
      <h1>Curriculum</h1>

      <div className="curriculumgrid">
        <div>
          <h3>Advanced CSS</h3>
          <p>You will learn all the CSS you need to make your apps better with responsive design, flex, grid and positioning, animation and float. You will make your own component library.</p>
        </div>
        <div>
          <h3>Expert React</h3>
          <p>Know everything there is to know about React: useState, useEffect, Context API, children, functional programming, ES6, etc. Everything to establish as you an Expert in React</p>
        </div>
        <div>
          <h3>React Ecosystem</h3>
          <p>After React we get into the ecosytem and cover React Router for multi page SPAs, Redux Toolkit for scalable apps and many more.</p>
        </div>
        <div>
          <h3>ExpressJS and Database</h3>
          <p>You will make full-stack apps with backend to store data. Will learn writing RESTful APIs, ExpressJS, data modeling, ORM and MongoDB (Mongoose), and do Full Stack Authentication as well.</p>
        </div>
        <div>
          <h3>Next Level Dev</h3>
          <p>What will make you an outstanding dev? Clean Coding Practices, TypeScript, Testing, and Tooling. Things which even experienced devs don’t know.</p>
        </div>
        <div>
          <h3>JS for interviews</h3>
          <p>You will be intensively prepared for interviews. Will go deep into the working of JS and gain language understanding.</p>
        </div>
      </div>

    </div>
  )
}

export default Curriculum