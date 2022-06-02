import React from 'react'

const TvSerise = () => {
  return (
    <section className="tv-series-area tv-series-bg" style={{ backgroundImage: 'url("../../img/bg/tv_series_bg.jpg")' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-50">
              <span className="sub-title">Хичээлүүд</span>
              <h2 className="title">Хамгийн үх үзэлттэй</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="movie-item mb-50">
              <div className="movie-poster">
                <a href="/details"><img src="img/poster/ucm_poster01.jpg" alt="" /></a>
              </div>
              <div className="movie-content">
                <div className="top">
                  <h5 className="title"><a href="/details">Хамгаалалт</a></h5>
                  <span className="date">2022</span>
                </div>
                <div className="bottom">
                  <ul>
                    <li><span className="quality">hd</span></li>
                    <li>
                      <span className="duration"><i className="far fa-clock" /> 128 min</span>
                      <span className="rating"><i className="fas fa-thumbs-up" /> 3.5</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="movie-item mb-50">
              <div className="movie-poster">
                <a href="/details"><img src="img/poster/ucm_poster10.jpg" alt="" /></a>
              </div>
              <div className="movie-content">
                <div className="top">
                  <h5 className="title"><a href="/details">Шидэлт</a></h5>
                  <span className="date">2022</span>
                </div>
                <div className="bottom">
                  <ul>
                    <li><span className="quality">4k</span></li>
                    <li>
                      <span className="duration"><i className="far fa-clock" /> 12 min</span>
                      <span className="rating"><i className="fas fa-thumbs-up" /> 3.5</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="movie-item mb-50">
              <div className="movie-poster">
                <a href="/details"><img src="img/poster/ucm_poster03.jpg" alt="" /></a>
              </div>
              <div className="movie-content">
                <div className="top">
                  <h5 className="title"><a href="/details">The Dog Woof</a></h5>
                  <span className="date">2022</span>
                </div>
                <div className="bottom">
                  <ul>
                    <li><span className="quality">hd</span></li>
                    <li>
                      <span className="duration"><i className="far fa-clock" /> 128 min</span>
                      <span className="rating"><i className="fas fa-thumbs-up" /> 3.5</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="movie-item mb-50">
              <div className="movie-poster">
                <a href="/details"><img src="img/poster/ucm_poster04.jpg" alt="" /></a>
              </div>
              <div className="movie-content">
                <div className="top">
                  <h5 className="title"><a href="/details">The Easy Reach</a></h5>
                  <span className="date">2022</span>
                </div>
                <div className="bottom">
                  <ul>
                    <li><span className="quality">hd</span></li>
                    <li>
                      <span className="duration"><i className="far fa-clock" /> 128 min</span>
                      <span className="rating"><i className="fas fa-thumbs-up" /> 3.5</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TvSerise