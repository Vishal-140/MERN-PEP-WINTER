import React from 'react'
import { Link } from 'react-router'

function HomePage() {
  return (
    <div>
        <h1>Welcome!</h1>
        {/* <a href='/about'>About</a> */}
        <Link to="/about">About</Link>
    </div>
  )
}

export default HomePage