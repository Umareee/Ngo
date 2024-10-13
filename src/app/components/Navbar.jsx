"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to check if the path is active
  const isActive = (href) => pathname === href;

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${isSticky ? 'nav-sticky' : ''}`}>
      <div className="container-fluid">
        <Link href="/" className="navbar-brand"><img src="/images/logo-3.png" alt=""  /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <Link href="/" className={`nav-item nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link href="/about" className={`nav-item nav-link ${isActive('/about') ? 'active' : ''}`}>About Us</Link>
            <Link href="/programs" className={`nav-item nav-link ${isActive('/programs') ? 'active' : ''}`}>Programs</Link>
            <Link href="/events" className={`nav-item nav-link ${isActive('/events') ? 'active' : ''}`}>Events</Link>
            {/* <Link href="/blogs" className={`nav-item nav-link ${isActive('/blogs') ? 'active' : ''}`}>Blogs</Link> */}
            <Link href="/donate" className={`nav-item nav-link ${isActive('/donate') ? 'active' : ''}`}>Donate</Link>
            <Link href="/volunteer" className={`nav-item nav-link ${isActive('/volunteer') ? 'active' : ''}`}>Volunteer</Link>
            <Link href="/contact" className={`nav-item nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact Us</Link> 
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
