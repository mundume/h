import React, { Component } from 'react';
import { SidebarData } from "./SidebarData"
import { Link } from 'react-router-dom';


import './Navbar.css'


class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index}>
                           
                              
                              <Link to={item.path}
                                    className={item.cName}>
                               
                              <a>{item.title} </a></Link>
                            </li>
                        )
                    })}
                </ul>
                
            </nav>
        )
    }
}

export default Navbar