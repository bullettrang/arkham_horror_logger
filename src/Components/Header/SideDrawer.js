import React from 'react';
import {Link} from 'react-router-dom';
import './SideDrawer.css';
const SideDrawer =(props)=>{
    return(
        <nav className="side-drawer">
            <ul>
                <li><a href="/api/logout">Logout</a></li>
                <li><Link to="/results">Results</Link></li>
            </ul>
        </nav>
    )

}

export default SideDrawer;