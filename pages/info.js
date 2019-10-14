import React from "react"
import Header from "../components/Header"
import Head from '../components/Head'
import "../static/bootstrap.scss"
import "../static/style.scss"
import Footer from '../components/Footer'
import Info from '../components/Main/Info'

const App = () => (
  <>
    <Head />
    <Header />
    <Info />
    <Footer />
  </>
)

export default App;