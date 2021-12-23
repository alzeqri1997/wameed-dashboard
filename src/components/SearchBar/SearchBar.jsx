import React from 'react'
import styles from './SearchBar.module.scss'
import { SearchIcon } from '../../icons'

function SearchBar({ setIsInputOpen, isInputOpen, setIsMenuOpen }) {



  return (
    <>
      <div style={{ transform: 'translateY( -100px);' }} className={`${styles.searchBar} ${isInputOpen ? 'open' : ''} `}>
        <input className={styles.inputTag} placeholder="هل تبحث عن شئ ..." type="search" />
        <i className={styles.searchIcon} >
          <SearchIcon />
        </i>
      </div>



    </>
  )
}

export default SearchBar
