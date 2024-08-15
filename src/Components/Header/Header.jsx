import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
//     const handleClick = () => {
//         style.display = 'block';
//     }

  return (
    <header>
        <nav className='menubar'>
                <p>Blogr</p>
            <div className='name'>
                <ul>
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
            <div className="loggins">
                <Link to="/details" className='login'>Login</Link>
                <Link to="/details" className='signup'>Sign Up</Link>
            </div>
            </div>
            <input type="checkbox" id="check"/>
            <label for="check" className="checkbtn">
                <span className="material-symbols-outlined">menu</span>
            </label>


            {/* <div className="dropdown">
            <div className='name'>
                <ul>
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
            <div className="loggins">
                <Link to="/details" className='login'>Login</Link>
                <Link to="/details" className='signup'>Sign Up</Link>
            </div>
            </div>
            </div> */}
        </nav>
    </header>
  )
}

export default Header