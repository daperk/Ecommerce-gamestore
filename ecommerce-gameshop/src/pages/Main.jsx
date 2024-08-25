import React, { useEffect, useRef, useState } from 'react'
import './main.css'
import SideMenu from '../components/SideMenu'
import Header from './Header'
import Home from './Home'
import Categories from './Categories'
import Library from './Library'
import MyBag from './MyBag'


function Main() {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const homeRef = useRef();
  const categoriesRef = useRef();
  const libraryRef = useRef();
  const myBagRef = useRef();


  const sections = [
    {
      name: 'home',
      ref: homeRef,
      active: true,
    },
    {
      name: 'categories',
      ref: categoriesRef,
      active: false,
    },
    {
      name: 'library',
      ref: libraryRef,
      active: false,
    },
    {
      name: 'myBag',
      ref: myBagRef,
      active: false,
    },
  ];

  const handleToggleActive = () => {
    setActive(!active);
  };

  const handleSectionActive = target => {
    sections.map(section => {
      section.ref.current.classList.remove('active');
      if (section.ref.current.id === target){
        section.ref.current.classList.add('active');
      }
      return section;
    })
  }

  const gamesData = () => {
    fetch('https://symmetrical-space-cod-x5rppwwxx4j6h65ww-3000.app.github.dev/api/gamesData.json')
      .then(res => res.json())
      .then(data => {
        setGames(data)
        console.log(data)
      })
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    gamesData();
  }, [])

  return (
    <main>
      <SideMenu active={active} sectionActive={handleSectionActive} />
      <div className={`banner ${active ? 'active' : undefined}`} >
        <Header handleToggle={handleToggleActive} />
        <div className="container-fluid">
          <Home games={games} reference={homeRef} />
          <Categories games={games} reference={categoriesRef} />
          <Library games={games} reference={libraryRef} />
          <MyBag games={games} reference={myBagRef} />
        </div>
      </div>
    </main>
  )
};

export default Main