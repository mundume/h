import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'



export const Rooms = () => {
   return <Hero hero="roomsHero">
       <Banner title="Check Out Our Rooms!" subtitle="Your Accomodation Options Thoughtful!">
           <Link to = '/' className="btn-primary">
               Get Back To Home
           </Link>

       </Banner>
    
    </Hero>;
}
