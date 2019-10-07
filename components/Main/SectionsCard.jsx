import React from 'react'
import img from '../../static/imgs/ironManComics.jpg'

const SectionsCard = (props) => {
  return (
    <div className="SectionsCard">
      <img src={img} alt="" />
      <h2>{props.title}</h2>
    </div>
  )
}

export default SectionsCard