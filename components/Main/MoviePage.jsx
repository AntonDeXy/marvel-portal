import React from 'react'
import Img from '../../static/imgs/ironManComics.jpg'
import { useRouter } from 'next/router'


const MoviePage = () => {
  const router = useRouter()
  // console.log(router)
  let path = router.asPath

  return (
    <main className="MoviePage">
      <div className="wrapper">
        <div className="img">
          <img src={Img} alt="" />
        </div>
        <div className="info">
          <h1>Title</h1>
          <div className='otherInfo'>
            <div>
              <span>some inf:</span>
              <span>inf</span>
            </div>
            <div>
              <span>Modefided:</span>
              <span>inf</span>
            </div>
            <div>
              <span>isbn:</span>
              <span>inf</span>
            </div>
            <div>
              <span>page count:</span>
              <span>inf</span>
            </div>
            <span>
              desc
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MoviePage