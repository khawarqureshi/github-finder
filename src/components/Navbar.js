import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Navbar.css'


 const Navbar = ({icon, title}) => {
        return (
            <nav className = "navbar bg-primary"  style = {{marginBottom : "10px"}}>
                <h2>
                 <i className = {icon} /> {title}
                </h2>
                {/* we should not use a tag for routing as it will reload and clear the state */}
              {/*   <ul>
                    <li>
                        <a href ='/' >Home</a>
                    </li>
                    <li>
                        <a href ='/about'>About</a>
                    </li>
                </ul> */}
                <div className ='routeStyle'>
                 <ul >
                    <li className ='liStyle' style = {{listStyleType : 'none', color : 'black'}} >
                        <Link style = {{color:'black', textDecoration:'none'}} to ='/' ><strong>Home</strong></Link>
                    </li>
                    <li className ='liStyle' style = {{listStyleType : 'none'}}>
                        <Link style = {{color:'black', textDecoration:'none'}} to ='/about'><strong>About</strong></Link>
                    </li>
                </ul>
                </div>
            </nav>
        )
}
Navbar.defaultProps = {
    title : "Github Finder", 
    icon : "fa fa-github" 
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
