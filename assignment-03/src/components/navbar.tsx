import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    
      <nav className='navbar'>
        <ul>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/about-me">About me</Link></li>
         <li><Link href="/contact-me">Contact me</Link></li>

        </ul>
      </nav>
    
  )
}

export default Navbar
