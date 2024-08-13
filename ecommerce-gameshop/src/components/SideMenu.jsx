import './sideMenu.css'
import React, { useState } from 'react'
import navListData from '../data/navListData'
import NavListItem from './NavListItem'
import NavListSocialItem from './NavListSocialItem';
import navSocialData from '../data/navSocialData'

function SideMenu({active}) {
    const [navData, setNavdata] = useState(navListData);
    const [ SocialData, setSocialData] = useState(navSocialData)

    return ( 
        <div className={`sideMenu ${active ? 'active' : undefined} `} >
            <a href="#" className='logo'>
                <i class="bi bi-controller"></i>
                <span className='brand'>Play</span>
            </a>
            <ul className="nav">
                {navData.map(item=>(
                    <NavListItem key={item._id} item={item} />
                ))}
            </ul>
            <ul className="social">
                {SocialData.map(social => (
                    <NavListSocialItem key={social._id} social={social}/>
                ))}
            </ul>
        </div>
    )
}

export default SideMenu