import React from 'react'

function NavListItem({ item, navOnClick, active }) {
    return (
        <li>
            <a href="#" className={`${item.active ? 'active' : undefined}`} onClick={() => navOnClick(item._id)}> 
                <i class={`bi ${item.icon}`}></i>
                <span className="navName">{item.name}</span>
            </a>
        </li>
    )
}

export default NavListItem