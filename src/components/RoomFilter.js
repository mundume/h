import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from "../components/Title"
export default function RoomFilter() {
    const context = useContext(RoomContext)
    console.log(context)
    return (
        <div>
           hello from room filter 
        </div>
    )
}
