import React from 'react';
import  { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <React.Fragment>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/registration">Registration</Link>
                </li>
            </ul>
        </React.Fragment>

    );
}

export default Header;