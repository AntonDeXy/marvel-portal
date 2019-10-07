import React, { useState, useEffect } from 'react'
import Slider from './Slider';
import SectionsBlog from './SectionsBlog';
import marvelBg from '../../static/imgs/marvelBGBlured.jpg'

const Main = () => {
  const sections = [
    { id: 1, title: 'Comics' },
    { id: 1, title: 'Movies' },
    { id: 1, title: 'Heroes' }
  ]

  return (
    <main>
      <Slider />
      <div className="moreInfo">
        <h3>MoreInfo</h3>
      </div>
      <div className="section">
        <img className='marvelBg' src={marvelBg} alt="" />
        <div className="wrapper">
          {sections.map(e =>
            <SectionsBlog key={e.id} title={e.title} />
          )}
        </div>

      </div>
    </main >

  )
}

export default Main