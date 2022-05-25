import React, { useEffect } from 'react'
import $ from "jquery";
import "magnific-popup"


const MovieDetail = () => {
  useEffect(() => {

    $('.popup-video').magnificPopup({
      type: 'iframe'
    });
  }, [])
  return (
    <section className="movie-details-area" style={{ backgroundImage: 'url("../img/bg/movie_details_bg.jpeg")' }}>
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="col-xl-3 col-lg-4">
            <div className="movie-details-img">
              <img src="img/poster/movie_details_img.jpg" alt="" />
              <a href="https://www.youtube.com/watch?v=t7ciq_x4138" target="_blank" className="popup-video"><img src="img/images/play_icon.png" alt="" /></a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-8">
            <div className="movie-details-content">
              <h5>Анхан шат</h5>
              <h2>Шидэлтийн <span>Хичээл</span></h2>
              <div className="banner-meta">
                <ul>
                  <li className="quality">
                    <span>hd</span>
                  </li>
                  <li className="category">
                  </li>
                  <li className="release-time">
                    <span><i className="far fa-calendar-alt" /> 2022</span>
                    <span><i className="far fa-clock" /> 12 min</span>
                  </li>
                </ul>
              </div>
              <p>  Jr. NBA Анхан шатны суралцагчдад зориулсан шидэлтийн хичээл #1</p>
              <div className="movie-details-prime">
                <ul>
                  <li className="share"><a href="/#"><i className="fas fa-share-alt" /> Хуваалцах</a></li>
                  <li className="streaming">
                    <h6>Үнэгүй</h6>
                    <span>Төлөв</span>
                  </li>
                  <li className="watch"><a href="https://www.youtube.com/watch?v=t7ciq_x4138" className="btn popup-video"><i className="fas fa-play" /> Үзэх</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="movie-details-btn">
            <a href="/img/poster/movie_details_img.png" className="download-btn" download>Download <img src="fonts/download.svg" alt="" /></a>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default MovieDetail