import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-wrapper">
                <div className="nav-logo"></div>
                <ul className="nav">
                    <li><a className="link" href="/">Home</a></li>
                    <li><a className="link" href="/prod">Product</a></li>
                    <li><a className="link" href="/contact">Contact us</a></li>
                </ul>
                <div className="nav-search">
                    <input className="search" type="text" placeholder="search..." />
                </div>
                <div className="nav-button">
                    <button><a className="link" href="/reg">Sing up</a></button>
                    <button><a className="link" href="/login">Login</a></button>
                </div>
            </div>
        </nav >
    )
}

export default Navbar