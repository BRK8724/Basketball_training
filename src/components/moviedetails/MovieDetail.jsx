import React, { useEffect, useState } from 'react'
import $ from "jquery";
import "magnific-popup"
import { useLocation } from 'react-router-dom';


const MovieDetail = () => {
  let location = useLocation();
  const [data, setData] = useState();
  const [category, setCategory] = useState();
  
  useEffect(() => {
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });
    setData(location.state.elem);
    if(location.state.elem.category === 2)
      setCategory("Анхан шат");
    else if(location.state.elem.category === 3)
      setCategory("Тамирчин");
    else if(location.state.elem.category === 4)
      setCategory("Мэргэжлийн тамирчин");
    else if(location.state.elem.category === 5)
      setCategory("Дасгалжуулагч");
  }, [])
  return (
    <section className="details-area" style={{ backgroundImage: 'url("../img/bg/movie_details_bg.jpeg")', paddingTop: 200 }}>
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="col-xl-3 col-lg-4">
            <div className="details-img">
              <img src={data && data.image} alt="" style={{paddingBottom: 50}}/>
            </div>
          </div>
          <div className="col-xl-6 col-lg-8">
            <div className="details-content">
              <h5>{category}</h5>
              <h2>{data && data.title}</h2>
              <div className="banner-meta">
                <ul>
                  <li className="quality">
                    <span>{data && data.quality}</span>
                  </li>
                  <li className="category">
                  </li>
                  <li className="release-time">
                    <span><i className="far fa-calendar-alt" /> {data && data.createdDate && data.createdDate.split('T')[0]}</span>
                    <span><i className="far fa-clock" />{data && data.duration}</span>
                  </li>
                </ul>
              </div>
              <p>  {data && data.quality}</p>
              <div className="details-prime">
                <ul>
                  {/* <li className="share"><a href="/#"><i className="fas fa-share-alt" /> Хуваалцах</a></li>
                  <li className="streaming">
                    <h6>Үнэгүй</h6>
                    <span>Төлөв</span>
                  </li> */}
                  <li className="watch"><a href={data && data.link} className="btn popup-video"><i className="fas fa-play" /> Үзэх</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="details-btn">
            <a href="/img/poster/movie_details_img.png" className="download-btn" download>Download <img src="fonts/download.svg" alt="" /></a>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default MovieDetail