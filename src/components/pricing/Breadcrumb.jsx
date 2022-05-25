import React from 'react'

export const Breadcrumb = () => {
  return (
    <section className="breadcrumb-area breadcrumb-bg" style={{ backgroundImage: 'url("../img/bg/breadcrumb_bg.jpeg")' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content">
              <h2 className="title">Үнийн <span>Мэдээлэл</span></h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/tv-show">Бүх сургалт</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Үнийн мэдээлэл</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
