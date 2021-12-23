import React from 'react'
import styles from './CheckBox2.module.scss'

function CheckBox2({ index, isChecked }) {
  return (
    <div>
      <input type="checkbox" id={`checkbox-${index}-2`} className={styles.regular_checkbox} />
      <label for={`checkbox-${index}-2`}></label>
    </div>
  )
}

export default CheckBox2
