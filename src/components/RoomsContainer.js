import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'
import { RoomConsumer } from '../context'
import Loading from  './Loading'


export default function RoomsContainer() {
    return (

        <RoomConsumer>
{
   (value) => {
       const {loading,sortedRooms,rooms}= value
       return(
        <div>
        Hello From Rooms Container
        <RoomsFilter/>
        <RoomsList/>
    </div>
       )
   }
}

        </RoomConsumer>
        
    )
}
