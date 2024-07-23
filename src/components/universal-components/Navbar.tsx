import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import MoreVert from '@mui/icons-material/MoreVert';
import { useDropdownStore, usePageStore } from '../../store/basicStore';
import { useScreenSizeStore } from '../../store/basicStore'; // Import the screen size store
import navStyle from '../../styles/component-styles/universal-components/navbar.module.css';
import logo from '../../assets/logo 2.png';

interface NavbarProps {
  colorState: string;
}

const DropDownMenu: React.FC<{ dropdownRef: React.RefObject<HTMLUListElement> }> = ({ dropdownRef }) => {
  const { screenWidth, setScreenWidth } = useScreenSizeStore(); // Use the screen size store
  
  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth);
  //     console.log('hi');
      
  //   };

  //   window.addEventListener('resize', handleResize);

  //   // Initial setting of the screen width
  //   setScreenWidth(window.innerWidth);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [setScreenWidth]);

  

  return (
    <>
    {  (screenWidth > 570) ?  
      (<ul className={navStyle.dropDownList} ref={dropdownRef}>
        <Link className={navStyle.dropLink} to="/login">
          <li>Login</li>
        </Link>
        <Link className={navStyle.dropLink} to="/sign-up">
          <li>Sign up</li>
        </Link>
      </ul>) :
        (<ul className={navStyle.dropDownList} ref={dropdownRef}>
          <Link className={navStyle.dropLink} to="/">
            <li>Home</li>
          </Link>
          <Link className={navStyle.dropLink} to="/about">
            <li>About</li>
          </Link>
          <Link className={navStyle.dropLink} to="/rooms-and-suites">
            <li>Rooms and Suites</li>
          </Link>
          <Link className={navStyle.dropLink} to="/contact">
            <li>Contact</li>
          </Link>
          <Link className={navStyle.dropLink} to="/login">
            <li>Login</li>
          </Link>
          <Link className={navStyle.dropLink} to="/sign-up">
            <li>Sign up</li>
          </Link>
        </ul>)
      }
      
    </>
  );
}

const Navbar: React.FC<NavbarProps> = ({ colorState }) => {
  const { isOpen, toggleDropdown, closeDropdown } = useDropdownStore();
  const { homeSelected, aboutSelected, roomsSelected, contactSelected, selectHome, selectAbout, selectRooms, selectContact, selectBooking } = usePageStore();
  const { setScreenWidth } = useScreenSizeStore(); // Use the screen size store

  const triggerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      triggerRef.current && !triggerRef.current.contains(event.target as Node) &&
      dropdownRef.current && !dropdownRef.current.contains(event.target as Node)
    ) {
      closeDropdown();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Initial setting of the screen width
    setScreenWidth(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setScreenWidth]);

  return (
    <nav
      className={navStyle.nav}
      style={homeSelected ?
        {
          position: 'absolute',
          boxSizing: 'border-box',
          width: '100%'
        } :
        {
        backgroundColor: colorState === 'colored' ? '#1E1E1E' : 'transparent',
      }}
    >
      <div className={navStyle.navContainer}>
        <section className={navStyle.logoContainer}>
          <img src={logo} alt="New Leaders Hotel logo" />
        </section>
        <ul className={navStyle.navList}>
          <li>
            <Link
              to="/"
              style={homeSelected ? { fontWeight: 'bolder' } : { textDecoration: 'none' }}
              className={navStyle.link}
              onClick={() => {
                selectHome();
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={aboutSelected ? { fontWeight: 'bolder' } : { textDecoration: 'none' }}
              className={navStyle.link}
              onClick={() => {
                selectAbout();
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/rooms-and-suites"
              style={roomsSelected ? { fontWeight: 'bolder' } : { textDecoration: 'none' }}
              className={navStyle.link}
              onClick={() => {
                selectRooms();
              }}
            >
              Rooms and Suites
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={contactSelected ? { fontWeight: 'bolder' } : { textDecoration: 'none' }}
              className={navStyle.link}
              onClick={() => {
                selectContact();
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
        <section className={navStyle.rightContainer}>
          <button className={navStyle.bookButton}>
            <Link className={navStyle.link} to="/booking">
              Book now
            </Link>
            <div className={navStyle.icon}>
              <NorthEastIcon style={{ color: '#F3F5F6', fontSize: 15 }} />
            </div>
          </button>
          <menu className={navStyle.menu} onClick={toggleDropdown} ref={triggerRef}>
            <MoreVert style={{ color: '#F3F5F6', fontSize: 24 }} />
          </menu>
        </section>
        {isOpen && <DropDownMenu dropdownRef={dropdownRef} />}
      </div>
    </nav>
  );
};

export default Navbar;
