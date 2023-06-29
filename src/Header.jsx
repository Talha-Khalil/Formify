import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import './Header.css';
import formIcon from './assets/images/form-icon.png';
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {
  return (
    <div className='header_container'>
        <div className="header_info">
            <IconButton>
            <MenuIcon/>
            </IconButton>
            <IconButton>
            <img src={formIcon} alt="logo" />
            </IconButton>
            
        </div>
        <div className="header_search">
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input type="text" name='search' placeholder='search here' />
        </div>
        <div className="header_user"></div>
    </div>
  )
}

export default Header