import React, { Component } from 'react';
import logo  from '../images/mnarani logo.jpg'
import{FaAlignRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle =() => {
     this.setState({isOpen:!this.state.isOpen})  
    }
    render() {
        return  <nav className="navbar">
            
            <div className="nav-header">
            <Link to="/">
            <img src= {logo} alt ="Beach Resort"/>
            </Link>
            <div className="menu-icon"onClick={this.handleToggle}>
            <i className={this.state.isOpen?'fas fa-times fa-2x' : 'fas fa-bars fa-2x'}></i>
            
            
            
            
            </div>
            <ul className={this.state.isOpen? "nav-links show-nav":"nav-links" }>
             <li>
                 <Link to="/">Home</Link>
                 <Link to="/rooms">rooms</Link>
                 <Link to="/facilities">Facilities</Link>
                 <Link to="/activities">Activities</Link>
                 <Link to="/gallery">Gallery</Link>
                 <Link to="/about">About</Link>
                 
             </li>
            </ul>

            </div>

        </nav>
        
    }
}
