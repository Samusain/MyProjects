import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {

    const showSidebar = () => {
        const closeBtn = document.getElementById("Closebtn");
        const burgerMenu = document.getElementById("Burger");
        const modal = document.getElementById('Modal');
        const dropMenu = document.getElementById('Menu');

        dropMenu.classList.add('dropmenu');
        closeBtn.classList.add('show');
        burgerMenu.classList.add("hide");
        modal.classList.add('open-modal');
    };
    
    const hideSidebar = () => {
        const closeBtn = document.getElementById("Closebtn");
        const burgerMenu = document.getElementById("Burger");
        const modal = document.getElementById('Modal');
        const dropMenu = document.getElementById('Menu');

        dropMenu.classList.remove('dropmenu');
        closeBtn.classList.remove('show');
        burgerMenu.classList.remove("hide");
        modal.classList.remove('open-modal');
    };


    return (
        <header>
            <nav className="menubar">
                <h1>Blogr</h1>
                <div className="menu" id="Menu">
                    <ul>
                        <li>
                            <a to="*">Product</a>
                            <ul>
                                <li>
                                    <a to="*">Overview</a>
                                </li>
                                <li>
                                    <a to="details">Pricing</a>
                                </li>
                                <li>
                                    <a to="details">Marketplace</a>
                                </li>
                                <li>
                                    <a to="details">Features</a>
                                </li>
                                <li>
                                    <a to="details">Integrations</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a to="details" >Company</a>
                            <ul>
                                <li>
                                    <a to="details">About</a>
                                </li>
                                <li>
                                    <a to="details">Team</a>
                                </li>
                                <li>
                                    <a to="details">Blog</a>
                                </li>
                                <li>
                                    <a to="details">Careers</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a to="details">Connect</a>
                            <ul>
                                <li>
                                    <a to="details">Contact</a>
                                </li>
                                <li>
                                    <a to="details">Newsletter</a>
                                </li>
                                <li>
                                    <a to="details">LinkedIn</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="loggins">
                        <Link to="details" className="login">Login</Link>
                        <Link to="details" className="signup">Sign Up</Link>
                    </div>
                </div>
                <div className='burger-menu'>
                    <FiMenu id="Burger" className="burger" onClick={showSidebar}/>
                    <IoCloseSharp id="Closebtn" className="closebtn" onClick={hideSidebar}/>
                </div>
                <span className="modal" id='Modal' onClick={hideSidebar}></span>

            </nav>
        </header>
    );
};

export default Header;
