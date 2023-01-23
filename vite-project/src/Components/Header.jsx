import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'



export default function Header() {
    const [showLink,SetLink]=useState(false);

    const show = () =>{
        SetLink(!showLink)
    }
    return (
        <header>
            <nav className='rel'>
                <Link to="/">
                    <img src="/public/Images/logo.jpg"></img>
                </Link>
                <ul className='abs' id={showLink ? 'open' : 'close'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/store'>Store</Link></li>
                    <li><Link to='/profil'>Profil</Link></li>
                    <li><Link to='/logout'>Log out</Link></li>
                    <button onClick={show}><FontAwesomeIcon icon={faBars} style={{color:"white"}} /></button>
                </ul>
              
          
            </nav>
        </header>
    )
}
