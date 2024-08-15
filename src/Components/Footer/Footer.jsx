import React from 'react'
import './Footer.css'
import Logo from '../../images/logo.svg'

const Footer = () => {
  return (
    <footer>
  <div className="footer">
    <ul>
      <p><img src={ Logo } alt="logo"/></p>
        <li><a href='#'>Product</a>
            <ul>
                <li><a href='#'>Overview</a></li>
                <li><a href='#'>Pricing</a></li>
                <li><a href='#'>Marketplace</a></li>
                <li><a href='#'>Features</a></li>
                <li><a href='#'>Integrations</a></li>
            </ul>
        </li>
        <li><a href='#'>Company</a>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
        </li>
        <li><a href='#'>Connect</a>
            <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Newsletter</a></li>
                <li><a href="#">LinkedIn</a></li>
            </ul>
        </li>
    </ul>
  </div>
  <div className="attribution">
    <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</p> 
    <p>Coded by <a href="#">Samolino</a>.</p>
  </div>
</footer>
  )
}

export default Footer