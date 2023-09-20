import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo,faBars } from "@fortawesome/free-solid-svg-icons";
const Nav=()=>{
    return(
        
     <nav>
        <input type="checkbox" id="check" ></input>
        <label for="check" className="checkbtn">
        <FontAwesomeIcon icon={faBars} />

        </label>
     <label className="logo">Khan's Hotel</label>
    <ul>
        <li>
            <Link>home</Link>
        </li>
        <li>
            <Link>about</Link>
        </li>
        <li>
            <Link>Services</Link>
        </li>
        <li>
            <Link>Gallery</Link>
        </li>
        <li>
            <Link>Sign In</Link>
        </li>
        <li className="active">
            <Link>Get Started</Link>
        </li>
    </ul>
    
        
            {/* <div><Link to="/">Home</Link> </div>
            <div><Link to="/About">About</Link> </div>
            <div><Link to="/Services">Services</Link> </div>
            <div><Link to="/Gallery">Gallery</Link> </div>
            <div><Link to="/Sing-In">sign In</Link> </div>
            <div className="nav01"><Link to="/Get-started">Get Started</Link> </div>
         */}
     </nav>
    )
}
export default Nav;