import React from 'react'
import styles from './Sidebar.module.scss'
import { LogoIcon, HouseIcon, BriefcaseIcon, SettingIcon, TeacherIcon, MessageIcon, SMSIcon, LoginIcon } from '../../icons'

function Sidebar({ isNavOpen }) {
  return (
    <div className={`${styles.l_navbar} ${isNavOpen ? '' : 'nav-hide'}`} >
      <nav className={styles.nav} >
        <div style={{ marginTop: ' 1.2rem' }} className="text-center" >
          <a href="/" className={styles.logo}>
            <LogoIcon className={styles.icon} />
          </a>

          {/* <div className={styles.toggle} >
            <BarsIcon />
          </div> */}

          <ul className={`${styles.list} text-end `} >
            <a href="/" className={`${styles.link} active `} >
              <HouseIcon />
              <span className={styles.text} >الرئيسية</span>
            </a>
            <a href="/" className={`${styles.link}  `} >
              <BriefcaseIcon />
              <span className={styles.text} >طلبات التوظيف</span>
            </a>
            <a href="/" className={`${styles.link}  `} >
              <TeacherIcon />
              <span className={styles.text} >طلبات التدريب</span>
            </a>
            <a href="/" className={`${styles.link}  `} >
              <MessageIcon />
              <span className={styles.text} >الدردشة</span>
            </a>
            <a href="/" className={`${styles.link}  `} >
              <SMSIcon />
              <span className={styles.text} >البريد الالكتروني</span>
            </a>
            <a href="/" className={`${styles.link}  `} >
              <SettingIcon />
              <span className={styles.text} >الإعدادات</span>
            </a>
          </ul>
        </div>

        <a href="/" className={styles.link_bottom}>
          <LoginIcon />
          <span className={styles.link}> تسجيل الخروج </span>
        </a>
      </nav>
    </div>

  )
}

export default Sidebar
