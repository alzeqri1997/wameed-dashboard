import React, { useState, useEffect } from 'react'
import { ArrowRight } from '../../icons'
import MenuIcons from '../Menu/MenuIcons'
import Profile from '../Profile/Profile'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Header.module.scss'

import useWindowSize from '../../hooks/useWindowSize'
function Header({ setIsNavOpen, isNavOpen }) {

  const { width } = useWindowSize();
  const [isInputOpen, setIsInputOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isWidth1180, setIsWidth1180] = useState(false)

  useEffect(() => {
    if (width >= 1180) {
      setIsWidth1180(true)
    }
    else {
      setIsWidth1180(false)
    }
  }, [width])


  const handleClick = () => {
    setIsNavOpen(prev => !prev)
  }
  const handleMenu = () => {
    setIsMenuOpen(prev => !prev)
    setIsInputOpen(false)
  }

  const handleInput = () => {
    setIsInputOpen(prev => !prev)
    setIsMenuOpen(false)
  }
  return (
    <header className="bg-white">
      <div style={{ transition: '.5s' }} className={`d-flex position-relative justify-content-between align-items-center container-fluid py-3 ${(isNavOpen && isWidth1180) ? 'header-expand' : ' '} `} >
        <button onClick={handleClick} className={styles.arrowRight}>
          <ArrowRight style={isNavOpen ? {} : { transform: 'rotate(-180deg)' }} />
        </button>
        <h2 className={styles.heading} >طلبات توظيف</h2>

        <SearchBar isInputOpen={isInputOpen} setIsInputOpen={setIsInputOpen} setIsMenuOpen={setIsMenuOpen} />
        <MenuIcons isMenuOpen={isMenuOpen} setIsInputOpen={setIsInputOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="d-flex gap-5" >
          <div className="d-flex gap-2" >
            <button onClick={handleInput} className={styles.inputButton} >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                <g id="Group_131812" data-name="Group 131812" transform="translate(-0.281 0.313)">
                  <rect id="Rectangle_15393" data-name="Rectangle 15393" width="48" height="48" rx="7" transform="translate(0.281 -0.313)" fill="#f3f6f9" opacity="0" />
                  <g id="Stockholm-icons-_-Design-_-Zoom-plus" data-name="Stockholm-icons-/-Design-/-Zoom-plus" transform="translate(9.844 9.844)">
                    <rect id="bound" width="28" height="28" transform="translate(0.437 -0.156)" fill="none" />
                    <path id="Path-2" d="M14.339,16.977a1.158,1.158,0,0,1,1.638-1.638l4.633,4.633a1.158,1.158,0,0,1-1.638,1.638Z" transform="translate(2.379 2.537)" fill="#171e48" />
                    <path id="Path" d="M12.107,17.9a5.791,5.791,0,1,0-5.791-5.791A5.791,5.791,0,0,0,12.107,17.9Zm0,2.316a8.107,8.107,0,1,1,8.107-8.107A8.107,8.107,0,0,1,12.107,20.214Z" transform="translate(0.797 0.797)" fill="#171e48" />
                  </g>
                </g>
              </svg>
            </button>
            <button onClick={handleMenu} className={styles.menuButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="4" height="20" viewBox="0 0 4 20">
                <g id="Group_131941" data-name="Group 131941" transform="translate(-4537 -6956)">
                  <circle id="Ellipse_809" data-name="Ellipse 809" cx="2" cy="2" r="2" transform="translate(4537 6956)" fill="#333" />
                  <circle id="Ellipse_810" data-name="Ellipse 810" cx="2" cy="2" r="2" transform="translate(4537 6964)" fill="#333" />
                  <circle id="Ellipse_811" data-name="Ellipse 811" cx="2" cy="2" r="2" transform="translate(4537 6972)" fill="#333" />
                </g>
              </svg>
            </button>
          </div>
          <Profile />
        </div>
      </div>
    </header>
  )
}

export default Header
