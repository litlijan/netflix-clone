import React, { useState,useRef, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { logout } from '../../firebase';

const Navbar = () => {

  const navRef = useRef()

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if (window.scrollY >=80) {
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div  ref={navRef} className='navbar'>
      <div className="navbar_left">
        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar_right">
        <img src={search_icon} alt="Search" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="Notifications" className='icons' />
        <div className="navbar_profile" onClick={toggleDropdown}>
          <img src={profile_img} alt="Profile" className='profile' />
          <img src={caret_icon} alt="Caret" />
          {dropdownVisible && (
            <div className="dropdown">
              <p onClick={()=>{logout()}}>sign out of netflix</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
