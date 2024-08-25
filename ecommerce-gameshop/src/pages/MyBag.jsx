import React from 'react'
import './myBag.css'

function MyBag({games, reference}) {
  return (
    <section id="mybag" className="mybag" ref={reference} >
        <h1>MyBag</h1>
    </section>
  )
}

export default MyBag