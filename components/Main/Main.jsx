import React, { useState, useEffect } from 'react'
import Slider from './Slider';
import SectionsBlog from './SectionsBlog';
import marvelBg from '../../static/imgs/marvelBGBlured.jpg'

const Main = () => {
  const sections = [
    { id: 1, title: 'Comics', param: 'comics' },
    { id: 2, title: 'Movies', param: 'series' },
    { id: 3, title: 'Stories', param: 'stories' },
    { id: 4, title: 'Heroes', param: 'characters' }
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
            <SectionsBlog key={e.id} param={e.param} title={e.title} />
          )}
        </div>

      </div>
    </main >

  )
}

export default Main