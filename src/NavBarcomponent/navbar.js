import React from "react";
import { Outlet,Link } from "react-router-dom";


function Navbar(){
 
    return(
    <>
    <nav>
        <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>  
            </li>
        </ul>
    </nav>
    <Outlet />
    </>
    )
}

export default Navbar;