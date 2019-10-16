import React, { useState, useEffect } from 'react'
import Img from '../../static/imgs/ironManComics.jpg'
import { useRouter } from 'next/router'
import { getArticles, getOtherInf,firstLettetToUpperCase } from '../../static/functions';
import Moment from 'react-moment'
import SectionsCard from './SectionsCard'
import Link from 'next/link'

const Info = () => {
  const [cards, setCards] = useState(undefined)
  const [series, setSeries] = useState({})

  const router = useRouter()
  
  useEffect(() => {
    (async () => {
      const res = await getArticles(router.asPath)
      console.log(res[0])
      setCards(res)
    })()
  }, [])

  let imgUrl

  let title
  if (cards) {
    if(cards[0].title) {
      title = cards[0].title
    } else if (cards[0].name) {
      title = cards[0].name
    }
    if (cards[0].thumbnail) {
      if (cards[0].thumbnail.path){
        imgUrl = cards[0].thumbnail.path + '.' + cards[0].thumbnail.extension
      } 
    } else {
      imgUrl = Img
    }
  }
  

  return (
    <main className="MoviePage">
      {cards ? 
      <div className="wrapper">
        <div className="img">
          <img src={imgUrl} alt="" />
        </div>
        <div className="info">
          <h1>{title}</h1>
          <div className='otherInfo'>
            {cards[0].creators && cards[0].creators.items.map( e => 
                <div>
                <strong>
                  {firstLettetToUpperCase(e.role)}: 
                </strong>
                <div>
                  <span>{e.name}</span>
                </div>
              </div>
              )}
            {cards[0].dates !== undefined &&
            <div>
              <strong>Published: </strong>
              <div>
                <Moment format="LL">{cards[0].dates[0].date}</Moment>
              </div>
            </div>
            }
            {cards[0].prices !== undefined &&
            <div>
              <strong>Price: </strong>
              <div>
                {cards[0].prices[0].price}$
              </div>
            </div>
            }

            <div>
              <strong>UPC: </strong>
              <div>
                {cards[0].upc}
              </div>
            </div>

            <span>
              {cards[0].description}
            </span>
          </div>
          <div className="cards">
            {cards[0].urls &&
              <>
                {cards[0].urls.map( e => 
                  <Link href={e.url}>
                    <a>{e.type == 'comiclink' ? 'More info' : e.type }</a>
                  </Link>
                )}
              </>
            }
            
          </div>
        </div>
      </div>
      : 'Loading'
      }
  </main>
  )
}

export default Info