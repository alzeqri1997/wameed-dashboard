import React from 'react'
import { MoonIcon, NotificationIcon, MessagesIcon, SettingIcon } from '../../icons'
import styles from './Menu.module.scss'

function MenuIcons({ isMenuOpen, setIsMenuOpen, setIsInputOpen }) {


  return (
    <>
      <div className={`${styles.menu} ${isMenuOpen ? 'open' : ''} `} >
        <button className={styles.padding_left} >
          <MoonIcon />
        </button>
        <button className={styles.padding_left} >
          <NotificationIcon />
          <svg style={{ position: 'absolute', top: "-2px", right: "5px" }} xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9">
            <ellipse id="Ellipse_808" data-name="Ellipse 808" cx="4" cy="4.5" rx="4" ry="4.5" fill="#0079f2" />
          </svg>
        </button>
        <button className={styles.padding_left} >
          <MessagesIcon />
          <svg style={{ position: 'absolute', top: "-5px", right: "0" }} xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9">
            <ellipse id="Ellipse_808" data-name="Ellipse 808" cx="4" cy="4.5" rx="4" ry="4.5" fill="#0079f2" />
          </svg>
        </button>
        <button className={styles.padding_left}>
          <SettingIcon />
        </button>
      </div>



    </>
  )
}

export default MenuIcons
