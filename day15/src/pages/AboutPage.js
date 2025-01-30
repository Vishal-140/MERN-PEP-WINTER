import React from 'react'
import { Link } from 'react-router'

function AboutPage() {
  return (
    <div>
        <h1>About Page </h1>
        {/* <a href='/'>Home</a> */}
        <Link to="/">Home</Link>
    </div>
  )
}

export default AboutPage