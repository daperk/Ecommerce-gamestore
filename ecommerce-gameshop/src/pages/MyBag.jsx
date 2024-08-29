import React from 'react';
import './myBag.css';
import ShopBagItem from '../components/ShopBagItem';

function MyBag({ games, reference }) {
  return (
    <section id="myBag" className="myBag" ref={reference} >
      <div className="container-fluid">
        <div className="row mb-3">
          <h1>My Bag</h1>
        </div>
      {games.length === 0 ? (
        <div className="emptyBagMessage">
          <h2>Your bag is empty!</h2>
        </div>
      ) : (
        <div className="row">
          <div className="table-responsive">
            <table className="shopBagTable table table-borderless align-middle">
              <thead>
                <tr>
                  <th scope='col'>No.</th>
                  <th scope='col'>Preview</th>
                  <th scope='col'>Game</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Discount</th>
                  <th scope='col'>Payment</th>
                  <th scope='col'>Remove</th>
                </tr>
              </thead>
              <tbody>
                {games.map((game, index) => (
                  <ShopBagItem index={index} key={game._id} game={game} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      </div>
    </section>
  );
}

export default MyBag;
