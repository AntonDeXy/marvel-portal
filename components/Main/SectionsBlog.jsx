import React from 'react'
import SectionsCard from './SectionsCard';
import row from '../../static/imgs/arrow-right-solid.svg'

const SectionsBlog = (props) => {
  const cards = [
    { id: 1, title: 'Title', imgUrl: '', },
    { id: 2, title: 'Title', imgUrl: '', },
    { id: 3, title: 'Title', imgUrl: '', },
    { id: 4, title: 'Title', imgUrl: '', },
    { id: 5, title: 'Title', imgUrl: '', },
  ]
  return (
    <div className="sectionsBlog">
      <h1>{props.title}</h1>
      {cards.map(card =>
        <SectionsCard key={card.id} title={card.title} imgUrl={card.imgUrl} />
      )}
      <div className='row-right'>
        <img src={row} alt="" />
      </div>
    </div>
  )
}

export default SectionsBlog