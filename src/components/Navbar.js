import './Navbar.css';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';


function Navbar() {
    const [click, setClick]=useState(false);
    const handleClick = () =>setClick(!click);
    const [button, setButton] = useState(true);
    const closeMobileMenu = () =>setClick(false)
    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => {
        showButton();
      }, []);
    


      window.addEventListener('resize', showButton);  
    return(
        <>
        <nav className="navbar">
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    Foregen 3.0 <i className='fab fa-typo3'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='navliks' onClick={closeMobileMenu}>
                          Home  
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Forecast' className='navliks' onClick={closeMobileMenu}>
                          Forecast  
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Info' className='navliks' onClick={closeMobileMenu}>
                          Info  
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Home</Button>}    
            </div>
        </nav>
        </>
    );
}

export default Navbar;