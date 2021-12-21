import React from 'react'
import pic from '../../images/avatar2.png'
import styles from './Card.module.scss'
import Button from '../Button/Button'

function Card() {
  return (
    <div className="card">
      <div className="card-body">
        <div className={styles.main_card} >
          <div>
            <h5 className="card-title">هيثم محمد</h5>
            <p className="card-profession">Backend Development ( PHP )</p>
          </div>
          <img style={{ width: '61px', height: '61px' }} src={pic} alt="" />
        </div>
        <p className="card-experience_duration">من 0 - 3 سنوات خبره</p>
        <p className="card-text">هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
        <div className="d-flex justify-content-between align-items-center" >
          <Button />
          <p className={styles.location} >سوهاج, مصر</p>
        </div>
      </div>
    </div>
  )
}

export default Card
