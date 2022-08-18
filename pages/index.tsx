import { useState } from "react"
import React from 'react'
import Group from '../components/Group'
import PopupWithExitButton from '../components/PopupWithExitButton'
import GroupAdd from '../components/GroupAdd'
import PredefinedGroupStateAdd from '../components/PredefinedGroupStateAdd'
import Tab from '../components/Tab'
import TaskAdd from '../components/TaskAdd'

//TODO: Fetch groups

export default function Home() {
  const [isOpened, setIsOpened] = useState(false)
  const callback = () => {
    setIsOpened(!isOpened)
  }
  return (
    <div data-theme="corporate">
      <PopupWithExitButton updateIsOpened={callback} buttonName='Add Group' childComp={<Tab isOpened={isOpened} tabs={
        [
          {name: "Group", component: <GroupAdd/>},
          {name: "Predefined Group State", component: <PredefinedGroupStateAdd groupId='1'/>},
          {name: "Tasks", component: <TaskAdd predefinedGroupStateId='1' />}
        ]
      }/>} />
      <Group id="1" name="Group1"/>
    </div>
  )
}