import '../App.css'
import React from 'react'
import {Link} from "react-router-dom"

function Nav(props) {
     return (
            <nav>
                <ul className= "nav-items">
                    <Link to = "/"><li>Rockets</li></Link>
                   <Link to = "/launches"> <li>Launches</li> </Link>
                   <Link to = "/history"> <li>History</li> </Link>
                   
                </ul>
            </nav>
    )
}

export default Nav