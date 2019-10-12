import React, { useState, useEffect } from 'react'
import SectionsCard from './SectionsCard';
import row from '../../static/imgs/arrow-right-solid.svg'
import axios from 'axios'
import md5 from 'md5'

const SectionsBlog = (props) => {
  const [comics, setComics] = useState(undefined)

  let route = props.param

  const baseUrl = `https://gateway.marvel.com:443/v1/public/${route}`
  const privateKey = '67d3094b052340b894a685576d342787ba35dde8'
  const publicKey = 'e2ea6d411120ada66be0368c2094101a'
  const ts = Math.floor(Math.random() * 9)
  const hash = md5(ts + privateKey + publicKey)
  let params
  const url = `${baseUrl}?${params ? `${params}&` : ''}ts=${ts}&apikey=${publicKey}&hash=${hash}`


  useEffect(() => {
    (async () => {
      const res = await axios.get(url)
      setComics(res.data.data.results)
    })()
  }, [])

  let comicsesForRender = undefined


  if (comics) {
    comicsesForRender = comics.slice([0], [4])
    // console.log(comicsesForRender)
  }
  return (
    <>
      {comicsesForRender ?
        <div className="sectionsBlog">
          <>
          <h1>{props.title}</h1>
          {comicsesForRender
            ? <Card comics={comicsesForRender} />
            : 'loading..'
          }
          </>
        </div>
        : 'loading'
      }
    </>

  )
}

const Card = (props) => {
  return (
    <>
      {
        props.comics.map(card =>
          <SectionsCard title={card.title} imgExt={card.thumbnail && card.thumbnail.extension} imgUrl={card.thumbnail ? card.thumbnail.path : null} />
        )
      }
      <div className='row-right'>
        <img src={row} alt="" />
      </div>
    </>
  )

}

export default SectionsBlog