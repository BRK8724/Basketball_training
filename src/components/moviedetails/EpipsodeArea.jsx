import React, { useEffect } from 'react'
import "magnific-popup";
import $ from "jquery";

const EpipsodeArea = () => {
  useEffect(() => {
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });


  }, [])
  return (
    <section className="episode-area episode-bg" style={{ backgroundImage: 'url("../img/bg/episode_bg.jpg")' }}>
      <div className="container">
        {/* <div className="row">
          <div className="col-lg-8">
            <div className="movie-episode-wrap">
              <div className="episode-top-wrap">
                <div className="section-title">
                  <span className="sub-title">ONLINE STREAMING</span>
                  <h2 className="title">Watch Full Episode</h2>
                </div>
                <div className="total-views-count">
                  <p>2.7 million <i className="far fa-eye" /></p>
                </div>
              </div>
              <div className="episode-watch-wrap">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <button className="btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <span className="season">Season 2</span>
                        <span className="video-count">5 Full Episodes</span>
                      </button>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div className="card-body">
                        <ul>
                          <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video"><i className="fas fa-play" /> Episode 1 - The World Is Purple</a> <span className="duration"><i className="far fa-clock" /> 28 Min</span></li>
                          <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video"><i className="fas fa-play" /> Episode 2 - Meaner Than Evil</a> <span className="duration"><i className="far fa-clock" /> 28 Min</span></li>
                          <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video"><i className="fas fa-play" /> Episode 3 - I Killed a Man Today</a> <span className="duration"><i className="far fa-clock" /> 28 Min</span></li>
                          <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video"><i className="fas fa-play" /> Episode 4 - Cowboys and Dreamers</a> <span className="duration"><i className="far fa-clock" /> 28 Min</span></li>
                          <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video"><i className="fas fa-play" /> Episode 5 - Freight Trains and Monsters</a> <span className="duration"><i className="far fa-clock" /> 28 Min</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <button className="btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <span className="season">Season 1</span>
                        <span className="video-count">5 Full Episodes</span>
                      </button>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div className="card-body">
                        <ul>
                          <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video"><i className="fas fa-play" /> Episode 1 - The World Is Purple</a> <span className="duration"><i className="far fa-clock" /> 28 Min</span>
                          </li>
                          <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video"><i className="fas fa-play" /> Episode 2 - Meaner Than Evil</a> <span className="duration"><i className="far fa-clock" /> 28 Min</span></li>
                          <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video"><i className="fas fa-play" /> Episode 3 - I Killed a Man Today</a> <span className="duration"><i className="far fa-clock" /> 28 Min</span>
                          </li>
                          <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video"><i className="fas fa-play" /> Episode 4 - Cowboys and Dreamers</a> <span className="duration"><i className="far fa-clock" /> 28 Min</span>
                          </li>
                          <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video"><i className="fas fa-play" /> Episode 5 - Freight Trains and Monsters</a> <span className="duration"><i className="far fa-clock" /> 28 Min</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="episode-img">
              <img src="img/images/episode_img.jpg" alt="" />
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-12">
            <div className="movie-history-wrap">
              <h3 className="title">Сонирхолтой <span>Түүхүүд</span></h3>
              <p>1940-өөд оны эцсээр Монгол улсад уригдан ирж ажиллаж байсан Зөвлөлт, Хятадын мэргэжилтнүүд, ажилчид чөлөөт цагаараа сагсан бөмбөг тоглож тэднээс офицерийн сургуулийн сонсогчид, зарим залуучууд суралцаж байснаар анхны эх үүсвэр нь тавигдсан гэх боловч хэрэглэл материал муутай, зориулалтын заал, талбай цөөн байжээ. 1946 онд явагдсан улсын анхдугаар спартикадад спортын сайн дурын “Соёл”, “Хөдөлмөр” зэрэг нийгэмлэгүүдээс тэр үеийн волейболын тэмцээнд оролцож байсан тамирчдаас бүрдсэн багууд сагсан бөмбөг тоглож байжээ. 1954 онд улсын аварга шалгаруулах албан ёсны анхны тэмцээн явагдаж үүнд нийгэмлэгүүдийн эрэгтэй, эмэгтэй багууд оролцон “Соёл” нийгэмлэгийн эрэгтэй баг аварга болжээ. 1959 онд зохиогдсон Монголын Залуучууд Оюутны анхдугаар их наадмын тэмцээнд “МУИС”, “Барилгачин”, “Залуучууд” багууд тэргүүн байрт шалгарч байжээ. 1961 оны МБАТ-ний анхдугаар спартикадаар хот хөдөөгийн 24 нийгэмлэг, 6 их дээд сургуулийн эрэгтэй эмэгтэй 60 гаруй багийн нийт 400-аад тамирчид оролцож хотоос, МУИС-ын багийн ахлагч С.Чоён анхны спортын мастер цол хүртсэн. 1962 онд БНМАУ-ын Сагсан бөмбөг сонирхогчдын холбоог байгуулсан. 1950-иад оноос ардын армийн шугамаар Монголын сагсан бөмбөгчид Хятад, ЗХУ, Европын социалист орнуудад очиж нөхөрсөг уулзалт тэмцээнд оролцож өөрийн оронд ах дүү армиудын болон бусад баг тамирчдыг урьж уулзалт тэмцээн зохиодог болсон нь тамирчдын ур чадварыг дээшлүүлэх, залуучууд өсвөр үеийнхнийг сагсан бөмбөгийн спортоор шимтэн хичээллэхэд ихээхэн түлхэц болсон юм. Монгол улсын сагсан бөмбөгийн хөгжилд Алдар нийгэмлэгийн оруулсан хувь нэмэр их билээ. 1970-аад оны сүүлч, 1980-аад оны эхэн үеэс арван жилийн хүүхдүүдийн хамгийн их сонирхон тоголдог спорт болсон.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EpipsodeArea