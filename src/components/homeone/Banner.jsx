import React, { useEffect } from 'react'
import "magnific-popup";
import $ from "jquery";

import 'animate.css';


const Banner = () => {
  useEffect(() => {
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });


  }, [])


  return (
    <section className="banner-area banner-bg" style={{ backgroundImage: 'url("../img/banner/banner_bg01.jpeg")' }}>
      <div className="container custom-container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">

            <div className="banner-content ">
              <h6 className="sub-title animate__animated animate__fadeInUp" data-wow-delay=".2s" data-wow-duration="1.8s">Pro Ball Academy</h6>
              <h2 className="title animate__animated animate__fadeInUp" data-wow-delay=".4s" data-wow-duration="1.8s">Сагсан бөмбөгийг <span> хэзээ ч, хаанаас ч</span> сурах боломж</h2>
              <div className="banner-meta animate__animated animate__fadeInUp" data-wow-delay=".6s" data-wow-duration="1.8s">
              </div>
              <a href="https://www.youtube.com/watch?v=XbtmGKif7Ck" className="banner-btn btn popup-video wow fadeInUp" data-wow-delay=".8s" data-wow-duration="1.8s"><i className="fas fa-play" /> Үзэх</a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner