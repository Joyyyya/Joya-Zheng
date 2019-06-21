import React from 'react'
import Link from 'gatsby-link'
import './about.css'


const about = () => (
  <div>
    <div className="content">
    <h1>Hi from the second page</h1>
    <p>Welcome to about</p>
    <Link to="/">Go back to the homepage</Link>
    </div>
  </div>
)

export default about
