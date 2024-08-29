import React, { useContext } from 'react'
import profileImg from '../images/01my.png'
import '../pages/header.css'
import { AppContext } from '../App';

function Header({handleToggle}) {
    const { library, myBag} = useContext(AppContext);

  return (
    <header>
        <a href="#" className="menu" onClick={handleToggle}>
        <i class="bi bi-sliders"></i>
        </a>
        <div className="userItems">
            <a href="#" className="icon">
            <i class="bi bi-suit-heart-fill"></i>
            <span className="like">{library.length}</span>
            </a>
            <a href="#" className="icon">
            <i class="bi bi-bag-fill"></i>
            <span className="bag">{myBag.length}</span>
            </a>
            <div className="avatar">
                <a href="">
                    <img src={profileImg} alt="user image" />
                </a>
                <div className="user">
                    <span>User Name</span>
                    <a href="">View Profile</a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header