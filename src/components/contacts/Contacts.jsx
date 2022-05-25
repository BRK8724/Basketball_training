import React from 'react'

const Contacts = () => {
  return (

    <section className="contact-area contact-bg" style={{ backgroundImage: 'url("img/bg/contact_bg.jpg")' }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="contact-form-wrap">
              <div className="widget-title mb-50">
                <h5 className="title">И-Мэйл илгээх</h5>
              </div>
              <div className="contact-form">
                <form action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="Нэр *" />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="И-Мэйл хаяг *" />
                    </div>
                  </div>
                  <input type="text" placeholder="Гарчиг *" />
                  <textarea name="message" placeholder="Санал хүсэлт..." defaultValue={""} />
                  <button className="btn">Илгээх</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="widget-title mb-50">
              <h5 className="title">Мэдээлэл</h5>
            </div>
            <div className="contact-info-wrap">
              <p><span>Хэрвээ та бидэнтэй холбогдохыг хүсвэл <br /> </span> дараах хаягаар болон утас, и-мэйлээр холбогдох боломжтой .</p>
              <div className="contact-info-list">
                <ul>
                  <li>
                    <div className="icon"><i className="fas fa-map-marker-alt" /></div>
                    <p><span>Хаяг :</span>Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, 9-р хороо, Хоймор оффис, 707 тоот</p>
                  </li>
                  <li>
                    <div className="icon"><i className="fas fa-phone-alt" /></div>
                    <p><span>Утас :</span> (+976) 8898 8585</p>
                  </li>
                  <li>
                    <div className="icon"><i className="fas fa-envelope" /></div>
                    <p><span>И-Мэйл хаяг :</span> bilguun.8724@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Contacts