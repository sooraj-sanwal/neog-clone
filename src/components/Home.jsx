import React from 'react'
import Welcome from './home/welcome/Welcome'
import Carosal from './home/carosal/Carosal'
import About from './home/about/About'
import Skill from './home/skill/Skill'

const Home = () => {
    return (
        <div>
            <Welcome/>
            <Carosal />
            <About />
            <Skill />
        </div>
    )
}

export default Home