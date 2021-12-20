import React from 'react'
import { MoonIcon, NotificationIcon, MessagesIcon, SettingIcon } from '../../icons'
import styles from './Menu.module.scss'

function MenuIcons() {
  return (
    <div className={styles.menu} >
      <i className={styles.padding_left} >
        <MoonIcon />
      </i>
      <i className={styles.padding_left} >
        <NotificationIcon />
      </i>
      <i className={styles.padding_left} >
        <MessagesIcon />
      </i>
      <i>
        <SettingIcon />
      </i>
    </div>
  )
}

export default MenuIcons
