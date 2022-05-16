import React from "react";
import '../styles/navbar.css'

function NavBar() {
    //do some stuff
    return (     //react components always returns valid jsx
        <nav className="navbar">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Features</li>
                <li>Account</li>
            </ul>
        </nav>
    )
}


export default NavBar;