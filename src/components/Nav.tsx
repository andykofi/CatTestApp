import React, {useEffect, useState} from 'react';

const Nav = () => {
    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">The Cat App</a>

            <ul className="navbar-nav px-3">
                <li>
                    <a href="" className="p-2 text-white text-decoration-none">View Cats</a>
                </li>

            </ul>
        </nav>
    );
};

export default Nav;
