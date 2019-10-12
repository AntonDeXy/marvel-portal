import React from 'react'
import img from '../../static/imgs/ironManComics.jpg'

const SectionsCard = (props) => {
  let url
  if (props.imgUrl) {
    url = props.imgUrl + '.' + props.imgExt
  } else {
    url = img
  }
  return (
    // <div className="SectionsCard">
    <>
      <img src={url} alt="" />
      <h2>{props.title}</h2>
    </>
  // </div>

)
}

export default SectionsCard