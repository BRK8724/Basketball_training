import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Menu from './MovieMenu';
import VideoService from "../../services/video.service";

function MovieArea() {

  const [allItems, setAllItems] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(8);
  const [items, setItems] = useState([]);
  const filterItem = (categItem) => {
    const updateItems = allItems.filter((curElem) => {

      return curElem.category === categItem;

    })
    setItems(updateItems);
  }
  useEffect(async () => {
    let response = await VideoService.getList({page: 0, size: 100});
    if(response){
      setItems(response.content)
      setAllItems(response.content)
    }
  },[])

  // useEffect(() => {
  //   filterItem(2);
  // }, [allItems])

  return (
    <section className="movie-area movie-bg" style={{ backgroundImage: 'url("../img/bg/movie_bg.jpg")' }}>
      <div className="container">
        <div className="row align-items-end mb-60">
          <div className="col-lg-6">
            <div className="section-title text-center text-lg-left">
              <span className="sub-title">Хичээлүүд</span>
              <h2 className="title">Шууд үзэх</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="movie-page-meta">
              <div className="tr-movie-menu-active text-center">
                {/* <button className="active" data-filter="cat-three" onClick={() => filterItem(2)}>Анхлан суралцагч</button>
                <button data-filter=".cat-one" onClick={() => filterItem(3)}>Тамирчин</button>
                <button data-filter=".cat-two" onClick={() => filterItem(4)}>Мэргэжлийн тамирчин</button>
                <button data-filter=".cat-two" onClick={() => filterItem(5)}>Дасгалжуулагч</button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row tr-movie-active">
          {
            items.map((elem) => {
              const { id, image, title, date, quality, duration, ratings } = elem;

              return (


                <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two" key={id}>
                  <div className="movie-item mb-60">
                    <div className="movie-poster">
                      <a href="/details"><img src={image} alt="" /></a>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title"><a href="/details">{title}</a></h5>
                        <span className="date">{date}</span>
                      </div>
                      <div className="bottom">
                        <ul>
                          <li><span className="quality">{quality}</span></li>
                          <li>
                            <span className="duration"><i className="far fa-clock" />{duration}</span>
                            <span className="rating"><i className="fas fa-thumbs-up" />{ratings}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })

          }

        </div>
        <div className="row">
          <div className="col-12">
            <div className="pagination-wrap mt-30">
              <nav>
                <ul>
                  <li className="active"><a >1</a></li>
                  <li><a >2</a></li>
                  <li><a >3</a></li>
                  <li><a >4</a></li>
                  <li><a >Next</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovieArea