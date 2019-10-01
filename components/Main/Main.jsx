import React from 'react'
import Slider from './Slider';
import SectionsBlog from './SectionsBlog';
import marvelBg from '../../static/imgs/marvelBG.jpg'

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
          {sections.map(section =>
            <SectionsBlog key={section.id} title={section.title} />
          )}
        </div>

      </div>
    </main>
  )
}

export default Main