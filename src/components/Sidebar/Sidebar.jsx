import React from 'react'
import styles from './Sidebar.module.scss'
import { LogoIcon, HouseIcon, BriefcaseIcon, SettingIcon, TeacherIcon, MessageIcon, SMSIcon, LoginIcon } from '../../icons'

function Sidebar({ isNavOpen, setIsNavOpen }) {
  const handleClick = () => {
    setIsNavOpen(prev => !prev)
  }
  return (
    <div className={`${styles.l_navbar} ${isNavOpen ? '' : 'nav-hide'}`} >
      <nav className={styles.nav} >
        <div style={{ marginTop: ' 1.2rem' }} className="text-center" >
          <a href="/" className={styles.logo}>
            <LogoIcon className={styles.icon} />
          </a>

          <button onClick={handleClick} className={styles.close_icon} >
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14">
              <text id="_" data-name="" transform="translate(14 12)" fill="#333" font-size="14" font-family="FontAwesome6Pro-Regular, 'Font Awesome \36  Pro'"> <tspan x="-4.375" y="0"></tspan></text>
            </svg>
          </button>

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
          <span> تسجيل الخروج </span>
        </a>
      </nav>
    </div>

  )
}

export default Sidebar
