import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  const [click, setIClick] = useState(false);
  return (
    <>
    <nav className='navbar'>
        <div lassName='navb'>
            <link to="/" className='navbar-logo'>
              Hello World <i className='fab fa-typo3'/>  
            </link>
        </div>
        <div className='menu-icon'>
          <i CLassName={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
    </nav>
    </>
  )
}

export default Navbar;
