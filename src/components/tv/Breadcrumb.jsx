import React from 'react'

const Breadcrumb = () => {
  return (
    <section className="breadcrumb-area breadcrumb-bg" style={{ backgroundImage: 'url("../img/bg/breadcrumb_bg.jpeg")' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content">
              <h2 className="title">Бүх <span>Сургалт</span></h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="http://localhost:3000/">Нүүр</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Бүх сургалт</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumb