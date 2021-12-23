import React, { useState, useEffect } from 'react'
import styles from './Main.module.scss'
import { ArrowDown2Icon, Element3Icon, Setting2Icon, TaskIcon } from '../../icons'
import Card from '../Card/Card'
import List from '../List/List'
import Pagination from '../Pagination/Pagination'
import useWindowSize from '../../hooks/useWindowSize'

function Main({ setIsFilterOpen, isFilterOpen, isNavOpen }) {
  const [isList, setIsList] = useState(true)
  const [isWidth1180, setIsWidth1180] = useState(false)
  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= 1180) {
      setIsWidth1180(true)
    }
    else {
      setIsWidth1180(false)
    }
  }, [width])
  return (
    <main className={`${styles.main} ${(isNavOpen && isWidth1180) ? 'main-expand' : ''} `} >
      <section className={styles.headline} >
        <div>
          <h2 className={styles.heading} >عرض 12 من طلبات التوظيف</h2>
          <p className={styles.text} >الاحدث طلبا حتي الان</p>
        </div>
        <div style={{ height: 'fit-content' }} className="d-flex gap-3" >
          <button onClick={() => { setIsFilterOpen(prev => !prev) }} className={`${styles.button} ${isFilterOpen ? 'button-active' : ''}`} >
            <Setting2Icon color={isFilterOpen ? '#0079f2' : '#292D32'} />
            <p className={`${styles.sub_text}  `} >فلترة الطلبات</p>
          </button>
          <button className={`${styles.button}`} >
            <p className={`${styles.sub_text}  `} >ترتيب حسب الاحدث</p>
            <ArrowDown2Icon />
          </button>
          <button onClick={() => { setIsList(false) }} className={`${styles.button} ${isList ? '' : 'icon-active'}`} >
            <Element3Icon color={isList ? '#292D32' : '#fff'} />
          </button>
          <button onClick={() => { setIsList(true) }} className={`${styles.button} ${isList ? 'icon-active' : ''}`} >
            <TaskIcon color={isList ? '#fff' : '#292D32'} />
          </button>
        </div>
      </section>
      {
        !isList && (<section className={styles.cards} >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>)
      }

      {
        isList && <section className={styles.lists} >
          <List />
        </section>
      }
      <Pagination />
    </main >
  )
}

export default Main
