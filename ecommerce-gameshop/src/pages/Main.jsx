import React, { useEffect, useState } from 'react'
import './main.css'
import SideMenu from '../components/SideMenu'
import Header from './Header'
import Home from './Home'


function Main() {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const handleToggleActive = () => {
    setActive(!active);
  };

  const gamesData = () => {
    fetch('https://symmetrical-space-cod-x5rppwwxx4j6h65ww-3000.app.github.dev/api/gamesData.json')
      .then(res => res.json())
      .then(data => {
        setGames(data)
        console.log(data)
      })
      .catch(e => console.log(e.message));
};

useEffect(()=>{
  gamesData();
},[])

return (
  <main>
    <SideMenu active={active} />
    <div className={`banner ${active ? 'active' : undefined}`} >
      <Header handleToggle={handleToggleActive} />
      <div className="container-fluid">
        <Home games={games} />
      </div>
    </div>
  </main>
)
};

export default Main