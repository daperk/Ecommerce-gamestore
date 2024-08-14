import GameSwiper from '../components/GameSwiper'
import './home.css'
import React from 'react'

function Home({games}) {
  return (
    <section id='home' className='home'>
        <div className="container-fluid">
            <div className="row">
                <GameSwiper games={games} />
            </div>
        </div>
    </section>
  )
}

export default Home