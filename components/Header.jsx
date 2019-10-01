import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <h1>Marvel</h1>
        </div>
        <div className="menu">
          <h3>General</h3>
          <h3>Movies</h3>
          <h3>Films</h3>
          <h3>Comics</h3>
        </div>
      </div>
    </header>
  )
}

export default Header
