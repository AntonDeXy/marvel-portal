import React, { useState, useEffect } from 'react'
import Img from '../../static/imgs/ironManComics.jpg'
import { useRouter } from 'next/router'
import { getArticles, firstLettetToUpperCase } from '../../static/functions';
import Moment from 'react-moment'

const Info = () => {
  const [cards, setCards] = useState(undefined)

  const router = useRouter()
  
  useEffect(() => {
    (async () => {
      const res = await getArticles(router.asPath)
      // console.log(res)
      setCards(res)
    })()
  }, [])

  console.log(cards)

  let imgUrl
  if (cards && cards[0].images[0]) {
    imgUrl = cards[0].images[0].path + '.' + cards[0].images[0].extension
  } else {
    imgUrl = Img
  }
 


  return (
    <main className="MoviePage">
      {cards ? 
      <div className="wrapper">
        <div className="img">
          <img src={imgUrl} alt="" />
        </div>
        <div className="info">
          <h1>{cards[0].title}</h1>
          <div className='otherInfo'>
            {cards[0].creators.items.map( e => 
                <div>
                <strong>
                  
                  { firstLettetToUpperCase( e.role)}: 
                </strong>
                <div>
                  <span>{e.name}</span>
                </div>
              </div>
              )}
            

            <div>
              <strong>Published: </strong>
              <div>
                <Moment format="LL">{cards[0].dates[0].date}</Moment>
              </div>
            </div>

            <div>
              <strong>Price: </strong>
              <div>
                {cards[0].prices[0].price}$
              </div>
            </div>

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
        </div>
      </div>
      : 'Loading'
      }
  </main>
  )
}

export default Info