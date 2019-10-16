import React, { useRef, useEffect } from 'react'
import {TweenMax, Linear} from 'gsap';
import { FaGithubSquare } from 'react-icons/fa'



const LandingPage = () => {
    let logoElement = useRef(null) 
    let textElement = useRef(null)

    useEffect(() => {
        console.log(logoElement)
        TweenMax.from(
            logoElement,
            2,
            {x:300, opacity:0, scale:0.5},
        )
        TweenMax.from(
            textElement,
            2,
            {x:-300, opacity:0, scale:0.5},
        )
    }, []);

    function scaleUp() {
        TweenMax.to(logoElement, 1, {
            scale: 1.25,
            ease: Linear.ease
        });
    }

    function scaleDown() {
        TweenMax.to(logoElement, 1, {
            scale: 0.75
        });
    }

    return(
        <div>
            <div className='personalCon'>
                <div className='flexCon'>
                    <a href='https://github.com/gavin-dreyer'
                    onMouseEnter={scaleUp} 
                    onMouseLeave={scaleDown}
                    ref={element => {logoElement = element}} 
                    ><FaGithubSquare className='githubIcon' /></a>
                    <p
                    ref={element => {textElement = element}}>Welcome to my Website 😃</p>
                </div>
            </div>
        </div>
        
    )
}

export default LandingPage