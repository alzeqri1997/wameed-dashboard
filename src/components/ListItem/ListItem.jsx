import React from 'react'
import Button from '../Button/Button'
import styles from './ListItem.module.scss'
import avatar2 from '../../images/avatar2.png'
import CheckBox from '../CheckBox/CheckBox'

function ListItem({ index, isChecked }) {
  return (
    <tr>
      <th scope="row">
        <CheckBox isChecked={isChecked} index={index} />
      </th>
      <td>#A-0001</td>
      <td>
        <div className="d-flex align-items-center gap-3">
          <img width="52px" height="52px" src={avatar2} alt="" />
          <span >هيثم محمد</span>
        </div>
      </td>
      <td>UI/UX Designer</td>
      <td>من 0 الي 3 سنوات</td>
      <td>سوهاج ,مصر</td>
      <td >
        <div className="" style={{ whiteSpace: 'nowrap' }} >
          <Button />
          <button className="btn" >
            <svg className={`${styles.button}`} xmlns="http://www.w3.org/2000/svg" width="4" height="20" viewBox="0 0 4 20">
              <g id="Group_131941" data-name="Group 131941" transform="translate(-4537 -6956)">
                <circle id="Ellipse_809" data-name="Ellipse 809" cx="2" cy="2" r="2" transform="translate(4537 6956)" fill="#333" />
                <circle id="Ellipse_810" data-name="Ellipse 810" cx="2" cy="2" r="2" transform="translate(4537 6964)" fill="#333" />
                <circle id="Ellipse_811" data-name="Ellipse 811" cx="2" cy="2" r="2" transform="translate(4537 6972)" fill="#333" />
              </g>
            </svg>
          </button>
        </div>
      </td>

    </tr>
  )
}

export default ListItem
