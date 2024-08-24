import React from 'react'

function GameSlider({game, active, handleChangeIcons}) {
  return (
    <div className="gameSlider">
            <div className={`video ${active ? 'active' : undefined}`}>
              <iframe
                width="560"
                height="315"
                src={game.trailer}
                title={game.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <img src={game.img} alt="" />
            <div className="content">
              <h2>{game.title}</h2>
              <p>{game.description}</p>
              <div className="buttons">
                <a href="" className="orderBtn">
                  Order Now
                </a>
                <a
                  className={`playBtn ${active ? "active" : undefined}`}
                  onClick={handleChangeIcons}
                >
                  <span className="pause">
                    <i class="bi bi-pause-fill"></i>
                  </span>
                  <span className="play">
                    <i class="bi bi-play-fill"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
  )
}

export default GameSlider