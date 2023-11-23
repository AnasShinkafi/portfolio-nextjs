import React from 'react'
import NavLink from './NavLink';

type Props = {
    links: any;
}

const MenuOverlay = ({ links}: Props) => {
  return (
    <ul className=' left-px flex-col py-4 items-center'>
        {links.map((link: any, index: any) => (
           <li className="" key={index}>
             <NavLink href={link.path} title={link.title} />
           </li>
        ))}
    </ul>
  )
}

export default MenuOverlay