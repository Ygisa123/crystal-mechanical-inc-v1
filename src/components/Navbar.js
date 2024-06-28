import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  useEffect(() => {
    // Ajoute un gestionnaire d'événements pour tous les liens
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        window.scrollTo(0, 0);
      });
    });

    // Nettoie les gestionnaires d'événements lors du démontage du composant
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', () => {
          window.scrollTo(0, 0);
        });
      });
    };
  }, []);

  return (
    <>
      <div class="top-banner">
        <p class="banner-text">Website is under construction!! But you can still book a service call</p>
      </div>

      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/images/logo.png" alt="Logo" className="logo" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/heating' className='nav-links' onClick={closeMobileMenu}>
                <img src="/images/img-19.png" alt="Home Icon" className="icon-img" />
                <p>Heating</p>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/cooling' className='nav-links' onClick={closeMobileMenu}>
              <img src="/images/img-17.png" alt="Home Icon" className="icon-img" />
                <p>Cooling</p>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/water' className='nav-links' onClick={closeMobileMenu}>
              <img src="/images/img_2.png" alt="Home Icon" className="icon-img" />
                <p>Water</p>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/maintenance' className='nav-links' onClick={closeMobileMenu}>
              <img src="/images/img-20.png" alt="Home Icon" className="icon-img" />
                <p>Maintenance</p>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/plumbing' className='nav-links' onClick={closeMobileMenu}>
              <img src="/images/img_3.png" alt="Home Icon" className="icon-img" />
                <p>Plumbing & Electrical</p>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
              <img src="/images/img-21.png" alt="Home Icon" className="icon-img" />
                <p>Contact Us</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;