import React, { useState, useEffect } from 'react'
import SectionsCard from './SectionsCard';
import row from '../../static/imgs/arrow-right-solid.svg'
import axios from 'axios'
import md5 from 'md5'
import Link from 'next/link'
import { getArticles } from '../../static/functions';

const SectionsBlog = (props) => {
  const [cards, setCards] = useState(undefined)
  
  useEffect(() => {
    (async () => {
      const res = await getArticles(props.param)
        // console.log(res)
        setCards(res)
    })()
  }, [])

  let cardsForRender = undefined


  if (cards) {
    cardsForRender = cards.slice([0], [4])
  }
  return (
    <>
      {cardsForRender ?
        <div className="sectionsBlog">
          <>
            <h1>{props.title}</h1>
            {cardsForRender
              ? <Cards param={props.param} cards={cardsForRender} />
              : 'loading..'
            }
            <Link href='/all' as={`/${props.param}`}>
              <a className='row'>
                <div className='row-right'>
                  <img src={row} alt="" />
                </div>
              </a>
            </Link>
          </>
        </div>
        : 'loading'
      }
    </>

  )
}

export const Cards = (props) => {
  return (
    <>
      {
        props.cards.map(card =>
          <SectionsCard title={card.title ? card.title : card.name}
          imgExt={card.thumbnail && card.thumbnail.extension}
          imgUrl={card.thumbnail ? card.thumbnail.path : null} 
          param={props.param}
          cardId={card.id}/>
        )
      }
    </>
  )

}

export default SectionsBlog