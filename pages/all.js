import React from 'react'
import Head from '../components/Head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import All from '../components/Main/All'
import '../static/style.scss'

const AllCards = () => {
  return (
    <>
      <Head />
      <Header />
      <All />
      <Footer />
    </>
  )
}

export default AllCards