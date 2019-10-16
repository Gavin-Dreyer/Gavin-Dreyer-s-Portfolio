import React from 'react'

import personalPic  from '../assets/personalPic.jpg'

const About = () => {
    return (
        <>
            <div className='aboutCon'>
                <img src={personalPic} alt='personalPic' className='personalPic' />
                <p className='aboutText'>Hi! I'm Gavin Dreyer and I am a Califonia based fullstack web developer. The programming languages I am most proficient at include HTML, CSS, and Javascript. Java coming soon{String.fromCharCode(8482)}. Most of my time is spent doing what I love, building Web Apps with React! When I'm not working on a project, you'll most likely find me at the beach or watching Baseball! Go SF Giants! ⚾️
                </p>
            </div>
            
        </>
    )
}

export default About