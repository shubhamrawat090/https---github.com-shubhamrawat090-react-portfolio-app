import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { useState } from 'react'



const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a
                title="Home"
                href="/#"
                className={activeNav === '#' ? 'active' : ''}
                onClick={() => setActiveNav('#')}
            ><AiOutlineHome /></a>
            <a
                title="About"
                href="#about"
                className={activeNav === '#about' ? 'active' : ''}
                onClick={() => setActiveNav('#about')}
            ><AiOutlineUser /></a>
            <a
                title="Experience"
                href="#experience"
                className={activeNav === '#experience' ? 'active' : ''}
                onClick={() => setActiveNav('#experience')}
            ><BiBook /></a>
            <a
                title="Services"
                href="#services"
                className={activeNav === '#services' ? 'active' : ''}
                onClick={() => setActiveNav('#services')}
            ><RiServiceLine /></a>
            <a
                title="Contact"
                href="#contact"
                className={activeNav === '#contact' ? 'active' : ''}
                onClick={() => setActiveNav('#contact')}
            ><BiMessageSquareDetail /></a>
        </nav>
    )
}

export default Nav