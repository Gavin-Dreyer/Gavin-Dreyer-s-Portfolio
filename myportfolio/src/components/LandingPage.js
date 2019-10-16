import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'

import personalPic  from '../assets/personalPic.jpg'
 


const LandingPage = () => {
    return(
        <div>
            <div className='personalCon'>
                <div className='flexCon'>
                    <img src={personalPic} alt='personalPic' className='personalPic' />
                    <a href='https://github.com/gavin-dreyer'><FaGithubSquare className='githubIcon' /></a>
                    <p>Welcome to my Website 😃</p>
                </div>
            </div>
        </div>
        
    )
}

export default LandingPage