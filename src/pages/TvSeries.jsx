import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MovieArea from '../components/movie/MovieArea'
import Breadcrumb from '../components/tv/Breadcrumb'

const TvSeries = () => {
  return (
    <div>
      <Header />
      <main>
        <Breadcrumb />
        <MovieArea />
      </main>
      <Footer />
    </div>
  )
}

export default TvSeries