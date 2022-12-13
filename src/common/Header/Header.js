import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from '../HeaderOptions/HeaderOptions';
import { BusinessCenter, Chat, Home, Notifications, SupervisorAccount } from '@mui/icons-material';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
          <img src='https://cdn-icons-png.flaticon.com/512/3536/3536505.png' alt='' />

          <div className='header__search'>
              <SearchIcon />
              <input type='text' />
          </div>
      </div>
      <div className='header__right'>
        <HeaderOptions Icon={Home} title="Home" />
        <HeaderOptions Icon={SupervisorAccount} title="My Network" />
        <HeaderOptions Icon={BusinessCenter} title="Jobs" />
        <HeaderOptions Icon={Chat} title="My Network" />
        <HeaderOptions Icon={Notifications} title="My Network" />
        <HeaderOptions avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
          title="Me"
        />
      </div>
    </div>
  )
}

export default Header