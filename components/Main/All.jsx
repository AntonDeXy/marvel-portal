import React, { useState, useEffect } from 'react'
import SectionsCard from './SectionsCard'
import { useRouter } from 'next/router'
import md5 from 'md5'
import axios from 'axios'
import marvelBg from '../../static/imgs/marvelBGBlured.jpg'

const All = (props) => {
  const router = useRouter()
  const [cards, setCards] = useState(undefined)
  const route = router.asPath
  const baseUrl = `https://gateway.marvel.com:443/v1/public${route}`
  const privateKey = '67d3094b052340b894a685576d342787ba35dde8'
  const publicKey = 'e2ea6d411120ada66be0368c2094101a'
  const ts = Math.floor(Math.random() * 9)
  const hash = md5(ts + privateKey + publicKey)
  let params
  const url = `${baseUrl}?${params ? `${params}&` : ''}ts=${ts}&apikey=${publicKey}&hash=${hash}`

  useEffect(() => {
    (async () => {
      const res = await axios.get(url)
      // console.log(res.data.data.results)
      setCards(res.data.data.results)
      // console.log(cards)
    })()
  }, [cardsForRender])

  let cardsForRender = undefined

  if(cards) {
    cardsForRender = cards
    console.log(cardsForRender)
  }

  return (
    <main>
      <img className='marvelBg' src={marvelBg} alt="" />
      {cardsForRender
      ? <div className="allWrapper">
          {cardsForRender.map(e =>
            <SectionsCard param={route} {...e} />
          )}
        </div>
        : 'loading..'
      }
    </main>
  )
}

export default All