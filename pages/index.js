import React from "react"
import Header from "../components/Header"
import Main from "../components/Main/Main"
import Head from '../components/Head'
import "../static/bootstrap.scss"
import "../static/style.scss"
import Footer from './../components/Footer';

const App = () => (
  <>
    <Head />
    <Header />
    <Main />
    <Footer />
  </>
)

export default App;