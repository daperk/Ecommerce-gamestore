import React from 'react'
import './categories.css'

function Categories({ games, reference }) {
  return (
    <section id="categories" className="categories" ref={reference}>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-8"></div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </section>
  )
}

export default Categories