import React, { Component } from 'react'
import Title from '../components/Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer, FaPalette} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"The Best Cocktails In Zanzibar",
                info:'The bar and lounge area are set at one end of the expansive wooden deck overlooking the Indian Ocean. Relax and while away your time, sipping your choice of drink from our fine selection of wines, cocktails, and freshly prepared fruit juices, whilst listening to calming music and watching the waves.'

            },
            {
                icon:<FaHiking/>,
                title:"The Best Cocktails In Zanzibar",
                info:'The bar and lounge area are set at one end of the expansive wooden deck overlooking the Indian Ocean. Relax and while away your time, sipping your choice of drink from our fine selection of wines, cocktails, and freshly prepared fruit juices, whilst listening to calming music and watching the waves.'

            },
            {
                icon:<FaShuttleVan/>,
                title:"The Best Cocktails In Zanzibar",
                info:'The bar and lounge area are set at one end of the expansive wooden deck overlooking the Indian Ocean. Relax and while away your time, sipping your choice of drink from our fine selection of wines, cocktails, and freshly prepared fruit juices, whilst listening to calming music and watching the waves.'

            },
            {
                icon:<FaPalette/>,
                title:"The Best Cocktails In Zanzibar",
                info:'The bar and lounge area are set at one end of the expansive wooden deck overlooking the Indian Ocean. Relax and while away your time, sipping your choice of drink from our fine selection of wines, cocktails, and freshly prepared fruit juices, whilst listening to calming music and watching the waves.'

            }
        ]
    }
    render() {
        return (
            <section className="services">
           <Title title="Check Out Our Services" />
           <div className="services-center">
               {this.state.services.map((item,index) => {
                   return <article key={index} className="service">
                       <span>{item.icon}</span>
                       <h6>{item.title}</h6>
                       <p>{item.info}</p>
                        </article>

               })}
           </div>
            </section>
        )
    }
}

