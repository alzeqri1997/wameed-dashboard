import React from 'react'
import styles from './CheckBox.module.scss'

function CheckBox({ index, isChecked }) {
  return (
    <div>
      <input type="checkbox" id={`checkbox-${index}-1`} className={styles.regular_checkbox} />
      <label for={`checkbox-${index}-1`}></label>
    </div>
  )
}

export default CheckBox
