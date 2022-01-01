import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import *as FaIcons from "react-icons/fa"
import *as AiIcons from "react-icons/ai"
import {SidebarData} from './SidebarData'
import './Navbar.css'
import {IconContext} from 'react-icons'


function Navbar() {
  const[sidebar, setSidebar] = useState(false);

  const showSidebar =() => setSidebar(!sidebar); 

  return (
   <>
   <IconContext.Provider value={{color:'#af9a7d'}}>
   <div className='navbar'>
   <Link to="#" className='menu-bars'>
     <FaIcons.FaBars onClick={showSidebar} />
   </Link>
   </div>

   <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}onClick={setSidebar}>
     <ul className='nav-menu items'>
       <li className='navbar-toggle'>
        <Link to="#" className='menu-bars'>
           <AiIcons.AiOutlineClose/> 
         </Link>

       </li>
         {SidebarData.map((item, index)=>{
           return(
             <li key={index} className={item.cName}>
               <Link to ={item.path}>{item.icon}
               <span>{item.title}</span> </Link>
             </li>
           )
         })}
     </ul>

   </nav>
   </IconContext.Provider>
   </>
  )
}

export default Navbar


            