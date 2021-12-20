import React from 'react'
import avatar from '../../images/avatar.png'
import styles from './Profile.module.scss'
import { ArrowDown, OnlineIcon } from '../../icons'

function Profile() {
  return (
    <div className={`${styles.avatar} d-flex justify-content-center align-items-center`} >
      <div className={styles.ImgContainer} >
        <img className={styles.img} src={avatar} alt="avatar" />
        <i>
          <OnlineIcon />
        </i>
      </div>
      <div className={styles.text} >
        <p className={`${styles.name} fw-md`} >هيثم محمد</p>
        <p className={`${styles.title} shamel-light fw-sm`}  >مسؤول</p>
      </div>
      <ArrowDown />
    </div>
  )
}

export default Profile
