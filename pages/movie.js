import React from "react"
import Header from "../components/Header"
import Head from '../components/Head'
import "../static/bootstrap.scss"
import "../static/style.scss"
import Footer from './../components/Footer';
import MoviePage from '../components/Main/MoviePage';

const App = () => (
  <>
    <Head />
    <Header />
    <MoviePage />
    <Footer />
  </>
)

export default App;