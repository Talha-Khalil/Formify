import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'

const Header = () => {
  return (
    <div className='header_container'>
        <div className="header_info">
            <MenuIcon/>

        </div>
        <div className="header_search"></div>
        <div className="header_user"></div>
    </div>
  )
}

export default Header