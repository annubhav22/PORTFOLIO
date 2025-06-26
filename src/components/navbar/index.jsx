import '../../App.scss';
import React, { useState } from "react";
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';

const data = [
    { label: 'HOME', to: '/' },
    { label: 'ABOUT ME', to: '/about' },
    { label: 'SKILLS', to: '/skills' },
    { label: 'RESUME', to: '/resume' },
    { label: 'PORTFOLIO', to: '/portfolio' },
    { label: 'CONTACT', to: '/contact' },
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    return (
        <nav className="navbar">
            <div className="navbar__container">
                {/* Logo */}
                <Link to={"/"} className="navbar__container__logo"  onClick={() => setToggleIcon(false)} >
                    <FaReact size={30} color="#61DBFB" />
                </Link>

                {/* Menu */}
                <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ""}`}>
  {data.map((item, key) => (
    <li key={key} className="navbar__container__menu__item">
      <Link
        className="navbar__container__menu__item__links"
        to={item.to}
        onClick={() => setToggleIcon(false)} // ✅ This closes the menu
      >
        {item.label}
      </Link>
    </li>
  ))}
</ul>

                {/* Toggle Icon */}
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {toggleIcon ? <HiX size={40} /> : <FaBars size={30} />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
