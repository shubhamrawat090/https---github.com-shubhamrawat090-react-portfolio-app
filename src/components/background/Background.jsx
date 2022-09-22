import React from 'react'
import { DiReact } from 'react-icons/di'
import { SiAngular } from 'react-icons/si'
import { FaHtml5, FaJava } from 'react-icons/fa'
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io5'
import './background.css'

const Background = () => {
    return (
        <div className="animation-area">
            <ul className="box-area">
                <li><FaJava color='#ff7675' size={50} /></li>
                <li><FaHtml5 color='#e17055' size={50} /></li>
                <li><SiAngular color='#d63031' size={50} /></li>
                <li><DiReact color='#00cec9' size={50} /></li>
                <li><IoLogoJavascript color='#F0DB4F' size={50} /></li>
                <li><IoLogoCss3 color='#0984e3' size={50} /></li>
            </ul>
        </div>
    )
}

export default Background