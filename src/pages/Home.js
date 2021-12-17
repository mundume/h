import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';


export const Home = () => {
    return (
        <>
        
        <Hero>
        <Banner title="Experience The Nungwi Magic" subtitle="Welcome, Karibu Mnarani." paragraph="So perfectly located, the only place in Zanzibar where b.">
            <Link to ='/rooms' className="btn-primary">
                Our Rooms
            </Link>
        </Banner>
         </Hero>
         <Services />
         <FeaturedRooms />
         </>
    )
         ;
    
}
