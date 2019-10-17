import React, { useRef, useEffect } from 'react'
import {TweenMax, Linear} from 'gsap'

const About = () => {
    let textElement = useRef(null)
    let picElement = useRef(null)

    useEffect(() => {
        TweenMax.from(
            textElement,
            1,
            {x:0, y:300, opacity:0, scale:0.5},
        )
        TweenMax.from(
            picElement,
            2,
            {x:0, y:-300, opacity:0, scale:0.5},
        )
    })
    return (
        <>
            <div className='aboutCon'>
                <div 
                ref={element => {picElement = element}}
                className='personalPic'></div>
                <p 
                ref={element => {textElement = element}}
                className='aboutText'>
                    Hi! I'm Gavin Dreyer and I am a Califonia based fullstack web developer. The programming languages I am most proficient at include HTML, CSS, and Javascript. Java coming soon{String.fromCharCode(8482)}. Most of my time is spent doing what I love, building Web Apps with React! When I'm not working on a project, you'll most likely find me at the beach or watching Baseball! Go SF Giants! ⚾️
                </p>
            </div>
            
        </>
    )
}

export default About