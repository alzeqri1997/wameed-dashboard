import React from 'react'
import styles from './SearchBar.module.scss'
import { SearchIcon } from '../../icons'

function SearchBar() {
  return (
    <div className={styles.searchBar} >
      <input className={styles.inputTag} placeholder="هل تبحث عن شئ ..." type="search" />
      <i className={styles.searchIcon} >
        <SearchIcon />
      </i>
    </div>
  )
}

export default SearchBar
