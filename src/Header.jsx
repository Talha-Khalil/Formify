import React from 'react';
import { IconButton } from '@mui/material';
import './Header.css';
import formIcon from './assets/images/form-icon.png';
import SearchIcon from '@mui/icons-material/Search';
import FormButton from './FormButton';



const Header = () => {
   
  return (
    <div className='root_container'>
    <div className='header_container'>
        <div className="header_info">
            {/* <IconButton>
            <MenuIcon/>
            </IconButton> */}
            <img src={formIcon} alt="logo" />
            <h3 className='header_title'>Formify</h3> 
        </div>
        <div className="header_search">
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input type="text" name='search' placeholder='search here' />
        </div>
        <div className="header_user"></div>
    </div>

   <FormButton/>
    </div>
  )
}

export default Header;