import '../Styles/navbar.css'

import React, { useState } from 'react';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <ul>
      
        <li  className={activeLink === 'Home' ? 'active' : ''}
        ><a href="#Home"  onClick={() => handleClick('Home')}>Home page</a>
        </li>
        <li  className={activeLink === 'showcase' ? 'active' : ''}
        ><a href="#showcase" onClick={() => handleClick('showcase')}>Project Showcase</a>
        </li>
        <li  className={activeLink === 'skills' ? 'active' : ''}
        ><a href="#skills" onClick={() => handleClick('skills')}>Skills and Experience</a>
        </li>
        <li  className={activeLink === 'contactInfo' ? 'active' : ''}
        ><a href="#contact" onClick={() => handleClick('contactInfo')}>Contact Us</a>
        </li>
        <li  className={activeLink === 'blogs' ? 'active' : ''}
        ><a href="#blogs" onClick={() => handleClick('blogs')}>Blogs</a>
        </li>
        <li  className={activeLink === 'feedback' ? 'active' : ''}
        ><a href="#feedback" onClick={() => handleClick('feedback')}>Testimonial</a>
        </li>
        
    </ul>
  );
};
    export default NavBar;