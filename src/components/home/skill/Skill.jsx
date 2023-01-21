import React from 'react'
import './skill.scss';
import webstack from '../../../Assets/Images/img16.svg'
import echosys from '../../../Assets/Images/img17.svg'
import expressjs from '../../../Assets/Images/img18.svg'
import advcss from '../../../Assets/Images/img19.svg'
import codingstd from '../../../Assets/Images/img20.svg'
import interview from '../../../Assets/Images/img21.svg'

const Skill = () => {
  return (
    <>
    <h1 className='skillheading'>What are the skills covered?</h1>
    <div className="flex">
    <div className="cardslogo">
        <div className="item">
            <img src= {webstack} alt=""/>
            <h3>HTML + CSS + VanillaJS</h3>
            <p>You start with basics with us in levelZero. Does not matter if you are a beginner or intermediate it is always good to have a strong understanding.</p>
        </div>
        <div className="item">
            <img src= {echosys} alt=""/>
            <h3>React Ecosystem</h3>
            <p>You will learn Redux, Flux Architecture and React Router. You will learn React ecosystem and how everything works.</p>
        </div>
        <div className="item">
            <img src= {expressjs} alt=""/>
            <h3>ExpressJS + DB</h3>
            <p>You will make full-stack apps and with a back end to store data or interact with the server. You will also learn Authentication.</p>
        </div>
        <div className="item">
            <img src= {advcss} alt=""/>
            <h3>Advanced CSS</h3>
            <p>You will create your component library, become an intermediate-level CSS developer. You will be prepared for CSS interviews.</p>
        </div>
        <div className="item">
            <img src= {codingstd} alt=""/>
            <h3>Industry-Standard Coding</h3>
            <p>You will learn to write production-level code for humans to understand. Develop an understanding of comments, correct variable names, Typescript, and type system.</p>
        </div>
        <div className="item">
            <img src= {interview} alt=""/>
            <h3>Javascript for Interviews</h3>
            <p>You will discover the mysterious world of JS interviews based on the understanding of JS, CSS, and Typescript. You will learn what is not taught to us but is asked in interviews.</p>
        </div>
    </div>
</div>
</>
  )
}

export default Skill