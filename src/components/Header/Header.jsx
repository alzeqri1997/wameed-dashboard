import { ArrowRight } from '../../icons'
import MenuIcons from '../Menu/MenuIcons'
import Profile from '../Profile/Profile'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Header.module.scss'
function Header({ setIsNavOpen, isNavOpen }) {


  const handleClick = () => {
    setIsNavOpen(prev => !prev)
  }
  return (
    <header className="bg-white"  >
      <div style={{ transition: '.5s' }} className={`d-flex align-items-center container-fluid py-3 ${isNavOpen ? 'header-expand' : ' '} `} >
        <button onClick={handleClick} className={styles.arrowRight}>
          <ArrowRight />
        </button>
        <h2 className={styles.heading} >طلبات توظيف</h2>
        <SearchBar />
        <MenuIcons />
        <Profile />
      </div>
    </header>
  )
}

export default Header
