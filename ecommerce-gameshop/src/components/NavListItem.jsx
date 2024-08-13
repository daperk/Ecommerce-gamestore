import React from 'react'

function NavListItem({ item }) {
    return (
        <li>
            <a href="#"> 
                <i class={`bi ${item.icon}`}></i>
                <span className="navName">{item.name}</span>
            </a>
        </li>
    )
}

export default NavListItem