import React from 'react'
import './Card.css'
import Link from 'gatsby-link'
import LazyImg from './LazyImg';

const Card = props =>(
    <div id="Card" className="Card">
        <img src={props.image} />
        {/* <h3>{props.title}</h3> */}
        <p>{props.text}</p>
    </div>
)

export default Card
