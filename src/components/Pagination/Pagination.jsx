import React from 'react'
import styles from './Pagination.module.scss'

function Pagination() {
  return (
    <div className={styles.pagination}>
      <a href="/">
        <div className={styles.left}>
          <svg
            id="arrow-right"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 30 30"
          >
            <path
              id="Vector"
              d="M0,0,7.085,8.078,0,16.156"
              transform="translate(18.829 6.922)"
              fill="none"
              stroke="#171e48"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
            />
            <path
              id="Vector-2"
              data-name="Vector"
              d="M0,0H21.631"
              transform="translate(4.085 15)"
              fill="none"
              stroke="#171e48"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
            />
            <path
              id="Vector-3"
              data-name="Vector"
              d="M0,0H30V30H0Z"
              transform="translate(30 30) rotate(180)"
              fill="none"
              opacity="0"
            />
          </svg>
          <span className={styles.text} >التالي</span>

        </div>
      </a>
      <div className={styles.items} >
        <a className={styles.item} href="/">5</a>
        <a className={`${styles.item} pagination-active `} href="/">4</a>
        <a className={styles.item} href="/">3</a>
        <a className={styles.item} href="/">2</a>
        <a className={styles.item} href="/">1</a>
      </div>
      <a href="/">
        <div className={styles.right} >
          <span className={styles.text} >السابق</span>
          <svg
            style={{ transform: 'scaleX(-1)' }}
            id="arrow-right"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 30 30"
          >
            <path
              id="Vector"
              d="M0,0,7.085,8.078,0,16.156"
              transform="translate(18.829 6.922)"
              fill="none"
              stroke="#171e48"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
            />
            <path
              id="Vector-2"
              data-name="Vector"
              d="M0,0H21.631"
              transform="translate(4.085 15)"
              fill="none"
              stroke="#171e48"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
            />
            <path
              id="Vector-3"
              data-name="Vector"
              d="M0,0H30V30H0Z"
              transform="translate(30 30) rotate(180)"
              fill="none"
              opacity="0"
            />
          </svg>

        </div>
      </a>
    </div>
  )
}

export default Pagination
