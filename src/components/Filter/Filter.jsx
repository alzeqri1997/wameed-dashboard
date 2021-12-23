import React, { useState } from 'react'
import styles from './Filter.module.scss'
import CheckBox2 from '../CheckBox2/CheckBox2'

function Filter({ setIsFilterOpen }) {
  const [isAccordion1Open, setIsAccordion1Open] = useState(true)
  const [isAccordion2Open, setIsAccordion2Open] = useState(true)

  const handleClick1 = () => {
    setIsAccordion1Open(prev => !prev)
  }
  const handleClick2 = () => {
    setIsAccordion2Open(prev => !prev)
  }
  return (
    <>
      <div onClick={() => { setIsFilterOpen(prev => !prev) }} className={styles.overlay} >
      </div>
      <div className={styles.filter} >
        <div className={`${styles.top} border-bottom`} >
          <h1 className={styles.heading} >
            فلترة الطلبات
          </h1>
          <button onClick={() => { setIsFilterOpen(prev => !prev) }} className={`${styles.close_icon} `}>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14">
              <text id="_" data-name="" transform="translate(14 12)" fill="#333" font-size="14" font-family="FontAwesome6Pro-Regular, 'Font Awesome \36  Pro'"> <tspan x="-4.375" y="0"></tspan></text>
            </svg>
          </button>
        </div>
        <div className={styles.filter_body} >
          <div className={styles.accordion} >
            <div className={styles.head} >
              <h2 className={styles.heading} >نوع التخصص</h2>
              <button style={isAccordion1Open ? { transform: 'rotate(180deg)' } : {}} onClick={handleClick1} className={styles.arrow} >
                <svg xmlns="http://www.w3.org/2000/svg" width="11.996" height="6.734" viewBox="0 0 11.996 6.734">
                  <path id="Vector" d="M9.875,4.923,4.937,0,0,4.923" transform="translate(1.061 0.75)" fill="none" stroke="#7f8384" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
            {isAccordion1Open && <div>
              <div className={styles.item} >
                <div className={styles.right_side} >
                  <CheckBox2 index={1} />
                  <p className={styles.title} >UI/UX Design</p>
                </div>
                <p className={`${styles.number} filter-active`}>10</p>
              </div>
              <div className={styles.item} >
                <div className={styles.right_side} >
                  <CheckBox2 index={2} />
                  <p className={styles.title} >UI/UX Design</p>
                </div>
                <p className={`${styles.number}`}>9</p>
              </div>
              <div className={styles.item} >
                <div className={styles.right_side} >
                  <CheckBox2 index={3} />
                  <p className={styles.title} >UI/UX Design</p>
                </div>
                <p className={`${styles.number}`}>5</p>
              </div>
              <div className={styles.item} >
                <div className={styles.right_side} >
                  <CheckBox2 index={4} />
                  <p className={styles.title} >UI/UX Design</p>
                </div>
                <p className={`${styles.number}`}>6</p>
              </div>
              <div className={styles.item} >
                <div className={styles.right_side} >
                  <CheckBox2 index={5} />
                  <p className={styles.title} >UI/UX Design</p>
                </div>
                <p className={`${styles.number}`}>3</p>
              </div>
              <div className={styles.item} >
                <div className={styles.right_side} >
                  <CheckBox2 index={6} />
                  <p className={styles.title} >UI/UX Design</p>
                </div>
                <p className={`${styles.number}`}>1</p>
              </div>
            </div>}
          </div>
        </div>
        {/*  */}
        <div className={styles.filter_body} >
          <div className={styles.accordion} >
            <div className={styles.head} >
              <h2 className={styles.heading} >مستوي الخبرة</h2>
              <button style={isAccordion2Open ? { transform: 'rotate(180deg)' } : {}} onClick={handleClick2} className={styles.arrow} >
                <svg xmlns="http://www.w3.org/2000/svg" width="11.996" height="6.734" viewBox="0 0 11.996 6.734">
                  <path id="Vector" d="M9.875,4.923,4.937,0,0,4.923" transform="translate(1.061 0.75)" fill="none" stroke="#7f8384" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
            {isAccordion2Open && <div>
              <div className={styles.item} >
                <div className={styles.right_side} >
                  <CheckBox2 index={7} />
                  <p className={styles.title} >من 0 الي 3 سنوات</p>
                </div>
                <p className={`${styles.number} filter-active`}>10</p>
              </div>
              <div className={styles.item} >
                <div className={styles.right_side} >
                  <CheckBox2 index={8} />
                  <p className={styles.title} >من 1 الي 5 سنوات</p>
                </div>
                <p className={`${styles.number}`}>9</p>
              </div>
              <div className={styles.item} >
                <div className={styles.right_side} >
                  <CheckBox2 index={9} />
                  <p className={styles.title} >اكثر من 5 سنوات</p>
                </div>
                <p className={`${styles.number}`}>5</p>
              </div>
            </div>}
          </div>
        </div>

        <div className={styles.filter_body} >
          <a href="/" className={styles.button}>تطبيق</a>
          <a href="/" className={styles.button2}>عرض تفاصيل</a>
        </div>

      </div>


    </>

  )
}

export default Filter
