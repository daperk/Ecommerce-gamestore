import React, { useState } from 'react'
import './main.css'
import SideMenu from '../components/SideMenu'
import Header from './Header'


function Main() {
  const [active, setActive] = useState(false)
  
  const handleToggleActive = ()=>{
    setActive(!active);
  }

  return (
    <main>
        <SideMenu active={active} />
        <div className={`banner ${active ? 'active' : undefined}`} >
          <Header handleToggle={handleToggleActive} />
        </div>
    </main>
  )
}

export default Main