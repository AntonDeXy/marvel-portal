import React, {useState, useEffect} from 'react'
import img from '../../static/imgs/ironManComics.jpg'
import Link from 'next/link'
import { getArticles } from '../../static/functions'

const SectionsCard = (props) => {
  const [cards, setCards] = useState(undefined)

  useEffect(() => {
    (async () => {
      const res = await getArticles(props.param)
      setCards(res)
      // console.log(res)
    })()
  }, [])

  let imgU
  let imgE
  let imgUrl


  // console.log(props.images)
  // if(props.imgUrl) {
  //   imgU = props.imgUrl
  //   imgE = props.imgExt
  //   imgUrl = imgU + '.' + imgE    
  // } else if (props.images[0]) {
  //   imgU = props.images[0].path
  //   imgE = props.images[0].extension
  //   imgUrl = imgU + '.' + imgE     
  // } else {
  //   imgUrl = img
  // }


  // for general page
  if (props.imgUrl) {
    imgUrl = props.imgUrl + '.' + props.imgExt
  } else {
    imgUrl = img
  }

  // if (props.images[0]) {
  //   imgUrl = props.images[0].path + '.' + props.images[0].extension
  // } else {
  //   imgUrl = img
  // }


  

  let title
  if (props.title) {
    title = props.title
  } else {
    title = props.name
  }
  console.log(props)
  return (
    // <div className="SectionsCard">
    <Link href={`/info?type=${props.param}/${props.cardId}`} as={`/info?type=${props.param}/${props.cardId}`}>
      <a>
        <img src={imgUrl} alt="" />
        <h2>{title}</h2>
      </a>
    </Link >
  )
}

export default SectionsCard