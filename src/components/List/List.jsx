import React, { useState } from 'react'
import styles from './List.module.scss'
import buttonStyle from '../CheckBox/CheckBox.module.scss'
import ListItem from '../ListItem/ListItem'
import CheckBox from '../CheckBox/CheckBox'

function List() {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = (e) => {
    setIsChecked(e.target.check)
  }

  return (
    <div className="table-responsive" >
      <table className="table bg-white">
        <thead>
          <tr>
            <th scope="col">
              <div>
                <input checked={isChecked} onChange={(e) => { handleChange(e) }} type="checkbox" id={`checkbox-1-1`} className={buttonStyle.regular_checkbox} />
                <label for={`checkbox-1-1`}></label>
              </div>
            </th>
            <th scope="col">ترقيم</th>
            <th scope="col">الاسم</th>
            <th scope="col">نوع التخصص</th>
            <th scope="col">مستوي الخبرة</th>
            <th scope="col">الدولة</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <ListItem isChecked={isChecked} index={2} />
          <ListItem isChecked={isChecked} index={3} />
          <ListItem isChecked={isChecked} index={4} />
          <ListItem isChecked={isChecked} index={5} />
          <ListItem isChecked={isChecked} index={6} />
          <ListItem isChecked={isChecked} index={7} />
        </tbody>
      </table>
    </div>

  )
}

export default List
