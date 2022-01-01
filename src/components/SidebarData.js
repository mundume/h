import React from 'react'
import *as FaIcons from "react-icons/fa"
import *as AiIcons from "react-icons/ai"
import *as IoIcons from "react-icons/io"
import *as MdIcons from "react-icons/md"
import *as FcIcons from "react-icons/fc"

export const SidebarData = [
    {
      title:'Home',
      path: '/',
      icon: <AiIcons.AiFillHome/>,
      cName:'nav-text'
    },

    {
        title:'Rooms',
        path: '/rooms',
        icon: <MdIcons.MdOutlineRoomService/>,
        cName:'nav-text'
      },
      {
        title:'Facilities',
        path: '/facilities',
        icon: <FaIcons.FaClipboardCheck/>,
        cName:'nav-text'
      },
     
      {
        title:'Activities',
        path: '/activities',
        icon: <MdIcons.MdLocalActivity/>,
        cName:'nav-text'
      },
      {
        title:'About',
        path: '/about',
        icon: <FaIcons.FaCloudsmith/>,
        cName:'nav-text'
      },
      {
        title:'Gallery',
        path: '/gallery',
        icon: <MdIcons.MdAddToPhotos/>,
        cName:'nav-text'
      },
]