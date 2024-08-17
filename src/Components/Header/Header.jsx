import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import Burger from '../../images/icon-hamburger.svg'
import Close from '../../images/icon-close.svg'

const Header = () => {
    const closeBtn = document.querySelector('.closebtn');
    const burgerMenu = document.querySelector('.burger');

    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        closeBtn.style.display = 'block';
        burgerMenu.style.display = 'none';
        sidebar.style.display = 'flex';
    }

    const hideSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        closeBtn.style.display = 'none';
        burgerMenu.style.display = 'block';
        sidebar.style.display = 'none';
    }

  return (
    <header>
        <nav className='menubar'>
            <p>Blogr</p>
            <div className='sidebar'>
                <ul>
                    <li><a href='/'>Product</a>
                        <ul>
                            <li><a href='/'>Overview</a></li>
                            <li><a href='/'>Pricing</a></li>
                            <li><a href='/'>Marketplace</a></li>
                            <li><a href='/'>Features</a></li>
                            <li><a href='/'>Integrations</a></li>
                        </ul>
                    </li>
                    <li><a href='/'>Company</a>
                        <ul>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Team</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Careers</a></li>
                        </ul>
                    </li>
                    <li><a href='/'>Connect</a>
                        <ul>
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">Newsletter</a></li>
                            <li><a href="/">LinkedIn</a></li>
                        </ul>
                    </li>
                </ul>
            <div className="loggins">
                <Link to="details" className='login'>Login</Link>
                <Link to="details" className='signup'>Sign Up</Link>
            </div>
            </div>
            
            <div className='menu'>
                <ul>
                    <li><a href='/'>Product</a>
                        <ul>
                            <li><a href='/'>Overview</a></li>
                            <li><a href='/'>Pricing</a></li>
                            <li><a href='/'>Marketplace</a></li>
                            <li><a href='/'>Features</a></li>
                            <li><a href='/'>Integrations</a></li>
                        </ul>
                    </li>
                    <li><a href='/'>Company</a>
                        <ul>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Team</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Careers</a></li>
                        </ul>
                    </li>
                    <li><a href='/'>Connect</a>
                        <ul>
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">Newsletter</a></li>
                            <li><a href="/">LinkedIn</a></li>
                        </ul>
                    </li>
                </ul>
            <div className="loggins">
                <Link to="details" className='login'>Login</Link>
                <Link to="details" className='signup'>Sign Up</Link>
            </div>
            </div>
            
            {/* <div className='burger-menu'> */}
                <img src={ Close } alt="icon-close" className='closebtn' onClick={hideSidebar}/>
                <img src={ Burger } alt="icon-hamburger" className='burger' onClick={showSidebar}/>
            {/* </div> */}
           
        </nav>
    </header>
  )
}

export default Header