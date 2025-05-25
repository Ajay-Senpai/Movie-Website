import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import CineCouch from '../../assets/CineCouch.png'
import search from '../../assets/search.png'
import bell_icon from '../../assets/bell_icon.png'
import profile from '../../assets/profile.png'
import caret_icon from '../../assets/caret_icon.png'
import { logout } from '../../firebase'

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        navRef.current?.classList.add('nav-dark')
      } else {
        navRef.current?.classList.remove('nav-dark')
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={CineCouch} alt="CineCouch Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My Lists</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="Search" className='search' />
        <p>Children</p>
        <img src={bell_icon} alt="Notifications" className='icons' />
        <div className="navbar-profile">
          <img src={profile} alt="Profile" className='profile' />
          <img src={caret_icon} alt="Menu"  className='icons'/>
          <div className="dropdown">
            <p onClick={() => {logout()}}>Sign Out Of CineCouch</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
