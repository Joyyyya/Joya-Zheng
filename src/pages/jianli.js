import React from 'react'
import Link from 'gatsby-link'
import './jianli.css'

const jianli = () => (
  <div className="content">
    <h1>Hi from the second page</h1>
    <p>Welcome to jianli</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default jianli
