import GameCard from "../components/GameCard";
import GameSwiper from "../components/GameSwiper";
import "./home.css";
import React from "react";

function Home({ games, reference }) {
  return (
    <section id="home" className="home active" ref={reference}>
      <div className="container-fluid">
        <div className="row mb-2">
          <GameSwiper games={games}/>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h2 className="sectionTitle">Games on promotion</h2>
          </div>
          <div className="col-lg-6 d-flex justify-content-end align-items-center">
            <a href="" className="viewMore">
              View More games <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="row">
          {
            games.slice(0, 4).map(game => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={game._id}>
                <div className="games">
                <GameCard game={game} />
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </section>
  );
}

export default Home;
