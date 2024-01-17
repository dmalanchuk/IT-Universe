import React from 'react'

const Navbar = ({ searchValue, onChangeSearchValue }) => {

    console.log(searchValue);
    return (
        <nav className="navbar">
            <div className="navbar-wrapper">
                <div className="nav-logo">i<span>Team</span></div>
                <ul className="nav">
                    <li><a className="link" href="/prod">Product</a></li>
                    <li><a className="link" href="/contact">Contact us</a></li>
                    <li><a className="link" href="/">LOGOUT</a></li>
                </ul>
            </div>
        </nav >
    )
}

export default Navbar