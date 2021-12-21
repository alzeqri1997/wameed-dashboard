import React from 'react'
import avatar2 from '../../images/avatar2.png'
import Button from '../Button/Button'
import styles from './List.module.scss'
import ListItem from '../ListItem/ListItem'

function List() {
  return (

    <table class="table bg-white">
      <thead>
        <tr>
          <th scope="col"><input type="checkbox" name="" id="" /></th>
          <th scope="col">ترقيم</th>
          <th scope="col">الاسم</th>
          <th scope="col">نوع التخصص</th>
          <th scope="col">مستوي الخبرة</th>
          <th scope="col">الدولة</th>
        </tr>
      </thead>
      <tbody>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </tbody>
    </table>

  )
}

export default List
