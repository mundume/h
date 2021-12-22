import React from 'react'
import { Link } from 'react-router-dom'
import Room from './Room'

export default function RoomList({rooms}) {
    if (rooms.length === 0) {
        return (
           <div className='empty-search'>
             <h3>no rooms found</h3>
             <Link to ='/rooms' className="btn-primary">
                Back to Rooms
            </Link>
           </div>
         
        )
    }
    return (
       <section className='roomslist'>
           <div className='roomslist-center'>
               {
                   rooms.map(item=>{
                    return < Room key = {item.id} room = {item}/>
                     
                    
                   })
               }

           </div>
       </section>
    )
}
