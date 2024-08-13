import React from 'react'

function NavListSocialItem({ social }) {
    return (
        <li >
            <a className={social.class} href={social.target}>
                <i class={`bi ${social.icon}`}></i>
            </a>
        </li>
    )
}

export default NavListSocialItem;