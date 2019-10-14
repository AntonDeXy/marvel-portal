import React, {useState, useEffect} from 'react'
import img from '../../static/imgs/ironManComics.jpg'
import Link from 'next/link'
import axios from 'axios'
import md5 from 'md5'

const SectionsCard = (props) => {
  let imgUrl

  if (props.imgUrl) {
    imgUrl = props.imgUrl + '.' + props.imgExt
  } else {
    imgUrl = img
  }
  console.log(props)
  const [comics, setComics] = useState(undefined)
  const route = props.param

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

  let title
  if (props.title) {
    title = props.title
  } else {
    title = props.name
  }
  console.log(props.id)
  return (
    // <div className="SectionsCard">
    <Link href='/info' as={`/${props.param}/${props.cardId}`}>
      <a>
        <img src={imgUrl} alt="" />
        <h2>{title}</h2>
      </a>
    </Link >
  )
}

export default SectionsCard