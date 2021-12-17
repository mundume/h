import React, { Component } from "react";
import defaultBcg from "../images/mahaba.jpg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";


export  class SingleRoom extends Component {
    constructor(props) {
        super (props); 
        //console.log(this.props);
        this.state ={
            slug:this.props.match.params.slug,
            defaultBcg
        };
       
        }

        static contextType = RoomContext;

      
      
    
       //componentDidMount() {}
      render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        console.log(room);
        
        return <div>hello from single room page</div>
    
      }
    }