import React from 'react'
import Admission from './levelOne/admission/Admission'
import Curriculum from './levelOne/curriculum/Curriculum'
import LevelOne from './levelOne/levelone/LevelOne'
import Mentors from './levelOne/mentors/Mentors'
import More from './levelOne/more/More'
const NeogLevelOne = () => {
    return (
        <div>
            <LevelOne />
            <Curriculum />
            <Mentors />
            <More />
            <Admission />
        </div>
    )
}

export default NeogLevelOne