import React from 'react'

const PricingArea = () => {
  return (
    <section className="pricing-area pricing-bg" style={{ backgroundImage: 'url("img/bg/pricing_bg.jpg")' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title title-style-three text-center mb-70">
              <span className="sub-title">Taнд дараах эрхүүдийг санал болгож байна</span>
              <h2 className="title">Багцууд</h2>
            </div>
          </div>
        </div>
        <div className="pricing-box-wrap">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="pricing-box-item mb-30">
                <div className="pricing-top">
                  <h6>Тамирчин</h6>
                  <div className="price">
                    <h3>7999₮</h3>
                    <span>1 Сар</span>
                  </div>
                </div>
                <div className="pricing-list">
                  <ul>
                    <li className="quality"><i className="fas fa-check" /> Дүрсний чанар <span>Сайн</span></li>
                    <li><i className="fas fa-check" /> Нягтаршил <span>480p</span></li>
                    <li><i className="fas fa-check" /> Хүссэн үедээ цуцлах боломж</li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <a href="/#" className="btn">Авах</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="pricing-box-item active mb-30">
                <div className="pricing-top">
                  <h6>Энгийн</h6>
                  <div className="price">
                    <h3>4999₮</h3>
                    <span>1 Сар</span>
                  </div>
                </div>
                <div className="pricing-list">
                  <ul>
                    <li className="quality"><i className="fas fa-check" /> Дүрсний чанар <span>Дундаж</span></li>
                    <li><i className="fas fa-check" /> Нягтаршил <span>1080p</span></li>
                    <li><i className="fas fa-check" /> Хүссэн үедээ цуцлах боломж</li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <a href="/#" className="btn">Авах</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="pricing-box-item mb-30">
                <div className="pricing-top">
                  <h6>Мэргэжлийн тамирчин</h6>
                  <div className="price">
                    <h3>9999₮</h3>
                    <span>1 Сар</span>
                  </div>
                </div>
                <div className="pricing-list">
                  <ul>
                    <li className="quality"><i className="fas fa-check" /> Дүрсний чанар <span>Маш сайн</span></li>
                    <li><i className="fas fa-check" /> Нягтаршил <span>4K+HDR</span></li>
                    <li><i className="fas fa-check" /> Хүссэн үедээ цуцлах боломж</li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <a href="/#" className="btn">Авах</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingArea