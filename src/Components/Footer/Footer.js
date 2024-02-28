import React from 'react'
import './footer.css'
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <div className='footerContainer' id='/contact'>
        <div className="footerHeading">
            <h1>Contact Me</h1>
        </div>

        <div className="footerInfo">
            <div className="socialMediaIcons">
                <h3>Find Me At: </h3>
                <div className="socialMediaIconsDiv">
                <SocialIcon className='s1' target='_blank' url="https://www.linkedin.com/in/sourabh-bishnoi/" />
                <SocialIcon className='s2' target='_blank' url="https://twitter.com/sourabhvishnoi7" />
                <SocialIcon className='s3' target='_blank' url="https://www.instagram.com/sourabhbishnoi05/" />
                <SocialIcon className='s4' target='_blank' url="https://www.facebook.com/sourabh.vishnoi.73/" />
                </div>
            </div>

            <div className="websiteCopyright">
                <h3>Developed by @sourabh_bishnoi</h3>
            </div>
        </div>
    </div>
  )
}

export default Footer