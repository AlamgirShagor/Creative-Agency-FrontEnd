import React from 'react';
import './Header.css'
import logo from '../../../images/logos/logo.png'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light pt-3">
            <div className="container">
                <a class="navbar-brand" href="#"><img className="logo" src={logo} alt=""/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link to="/">
                            <span class="nav-link">Home</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/">
                            <span class="nav-link">Our Portfolio</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/">
                            <span class="nav-link">Out Team</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/">
                            <span class="nav-link">Contact Us</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/login">
                            <span class="nav-link btn btn-dark text-white">Login</span>
                        </Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;