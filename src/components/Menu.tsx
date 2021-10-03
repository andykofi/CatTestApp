import React from 'react';
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink to={'/'} exact className="nav-link" >
                            <span data-feather="home"></span>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/cats'} className="nav-link " >
                            <span data-feather="home"></span>
                            Random Cats
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/vote'} className="nav-link " >
                            <span data-feather="home"></span>
                            Vote
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/upload'} className="nav-link " >
                            <span data-feather="home"></span>
                            Upload Cat
                        </NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Menu;
