import React, { useState, useEffect } from 'react'
// import SectionsCard from './SectionsCard'
import Img from '../../static/imgs/ironManComics.jpg'
import { useRouter } from 'next/router'
import md5 from 'md5'
import axios from 'axios'
import marvelBg from '../../static/imgs/marvelBGBlured.jpg'
import { getArticles } from '../../static/functions';
import Link from 'next/link'

const All = (props) => {
  const router = useRouter()
  const [cards, setCards] = useState(undefined)
  const route = router.asPath

  useEffect(() => {
    (async () => {
      const res = await getArticles(route)
      setCards(res)
    })()
  }, [cardsForRender])

  let cardsForRender = undefined

  if(cards) {
    cardsForRender = cards
    // console.log(cardsForRender)
  }

  return (
    <main>
      <img className='marvelBg' src={marvelBg} alt="" />
      {cardsForRender
      ? <div className="allWrapper">
          {cardsForRender.map(e =>
            <GeneralPageCard param={route} {...e} />
          )}
        </div>
        : 'loading..'
      }
    </main>
  )
}

const GeneralPageCard = (props) => {
  let imgUrl
  console.log(props.param + '/' +props.id)
  if(props.images[0]) {
    imgUrl = props.images[0].path + '.' + props.images[0].extension
  } else {
    imgUrl = Img
  }

  let title
  if (props.title) {
    title = props.title
  } else {
    title = props.name
  }
  return (
    <Link href='/info' as={`${props.param}/${props.id}`}>
      <a>
        <img src={imgUrl} alt="" />
        <h2>{title}</h2>
      </a>
    </Link >
  )
}

export default All