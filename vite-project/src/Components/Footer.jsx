import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
    <>
    <div className='footer'>
      <div className='icons'>
        <FontAwesomeIcon icon={faFacebook} style={{color:'white'}} />
        <FontAwesomeIcon icon={faTwitter} style={{color:'white'}} />
        <FontAwesomeIcon icon={faInstagram} style={{color:'white'}} />
        <FontAwesomeIcon icon={faGithub}  style={{color:'white'}}/>
      </div>
    </div>

    </>
  )
}
