import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from "../components/Title"
export default function RoomFilter() {
    const context = useContext(RoomContext)
    const {
        handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets
    }=context
    return (
        <section className='filter-container'>
           <Title title='Search Rooms'/>
           <form className='filter-form'>
               
               <div className='form-group'>
                   <label htmlFor='type' className='form-group'>room type</label>
                   <select
                    name='type' 
                    id='type' 
                    value={type} 
                    className='form-control'
                     onChange={handleChange}/>

                </div>
                
           </form>
        </section>

    )
}
