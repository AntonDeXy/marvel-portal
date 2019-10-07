import React, { useState, useEffect } from 'react'
import SectionsCard from './SectionsCard';
import row from '../../static/imgs/arrow-right-solid.svg'
import axios from 'axios'

const SectionsBlog = (props) => {
  const [comics, setComics] = useState(undefined)
  useEffect(() => {
    (async () => {
      const res = await axios.get('https://gateway.marvel.com/v1/public/comics?ts=7&apikey=da88af68ed28248ff413ff968d6fe6a4&hash=8d289393066c35ef44aa5d141ce57039')
      setComics(res.data.data.results)
    })()
  }, [])

  const cards = [
    { id: 1, title: 'Title', imgUrl: '', },
    { id: 2, title: 'Title', imgUrl: '', },
    { id: 3, title: 'Title', imgUrl: '', },
    { id: 4, title: 'Title', imgUrl: '', },
    { id: 5, title: 'Title', imgUrl: '', },
  ]
  let comicsesForRender = undefined
  if (comics) {
    comicsesForRender = [comics[0], comics[1], comics[2], comics[3]]
    console.log(comicsesForRender)

  }
  return (
    <>
      {comicsesForRender ?
        <div className="sectionsBlog">
          <h1>{props.title}</h1>
          {comicsesForRender
            ? <Card comics={comicsesForRender} />
            : 'loading..'
          }
        </div>
        : 'loading'
      }
    </>

  )
}

const Card = (props) => (
  <>
    {
      props.comics.map(card =>
        <SectionsCard title={card.title} imgUrl={card.imgUrl} />
      )
    }
    <div className='row-right'>
      <img src={row} alt="" />
    </div>
  </>
)

export default SectionsBlog