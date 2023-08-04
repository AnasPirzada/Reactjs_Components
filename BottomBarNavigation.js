import React, { useEffect } from 'react';
import { Home, Heart, Search, User } from 'react-feather';
import './BottomBarNavigation.css'; // Import the SCSS file
import feather from 'feather-icons';

import './BottomBarNavigation.css';

const BottomBarNavigation = () => {
  useEffect(() => {
    // Delay Feather Icons replacement to wait for icon rendering
    setTimeout(() => {
      feather.replace();
    }, 100);
  }, []);
  const handleMenuItemClick = (activeClass, event) => {
    const wrapper = document.getElementById('wrapper');
    const menuItemList = document.querySelectorAll('.menu-item');

    wrapper.className = activeClass;

    menuItemList.forEach(item => {
      item.classList.add('inactive');
    });

    // Remove 'inactive' class from the clicked item
    event.currentTarget.classList.remove('inactive');
  };

  return (
    <div id='wrapper' className='purple'>
      <h1>Bottom Bar Navigation Pattern | CSS3 + JS</h1>
      <h3>click on icon to see the magic</h3>
      <div className='menu'>
        <div
          className='menu-item purple active'
          data-color='purple'
          onClick={e => handleMenuItemClick('purple', e)}
        >
          <div className='menu-item__icon'>
            <Home />
          </div>
          <div className='menu-item__text'>Home</div>
        </div>
        <div
          className='menu-item inactive pink'
          data-color='pink'
          onClick={e => handleMenuItemClick('pink', e)}
        >
          <div className='menu-item__icon'>
            <Heart />
          </div>
          <div className='menu-item__text'>Likes</div>
        </div>
        <div
          className='menu-item inactive ocher'
          data-color='ocher'
          onClick={e => handleMenuItemClick('ocher', e)}
        >
          <div className='menu-item__icon'>
            <Search />
          </div>
          <div className='menu-item__text'>Search</div>
        </div>
        <div
          className='menu-item inactive cyan'
          data-color='cyan'
          onClick={e => handleMenuItemClick('cyan', e)}
        >
          <div className='menu-item__icon'>
            <User />
          </div>
          <div className='menu-item__text'>Profile</div>
        </div>
      </div>
    </div>
  );
};

export default BottomBarNavigation;
