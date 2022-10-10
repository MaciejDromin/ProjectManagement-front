import { useState, useEffect } from "react"
import React from 'react'
import Group from '../components/Group'
import PopupWithExitButton from '../components/PopupWithExitButton'
import GroupAdd from '../components/GroupAdd'
import PredefinedGroupStateAdd from '../components/PredefinedGroupStateAdd'
import Tab from '../components/Tab'
import TaskAdd from '../components/TaskAdd'
import { useSession } from "next-auth/react"
import Link from "next/link"

interface Project {
  id: string,
  name: string,
  description: string,
  status: string
}

interface Group {
  id: number,
  name: string,
  projects: Project[],
  owned: boolean
}

export default function Home() {
  const [isOpened, setIsOpened] = useState(false)
  const callback = () => {
    setIsOpened(!isOpened)
  }
  const { data: session, status } = useSession()

  const [groups, setGroups] = useState<Group[]>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    if (status !== "authenticated") {
      return
    }
    setLoading(true)
    fetch('/api/groups/share', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }).then((res) => res.json())
      .then((data) => {
        console.log(data)
        setGroups(data)
        setLoading(false)
      })
  }, [status])

  return (
    <div>
      {
        status === "authenticated" ? (
          (
            <>
              <PopupWithExitButton updateIsOpened={callback} buttonName='Add Group' childComp={<Tab isOpened={isOpened} updateIsOpened={callback} tabs={
                [
                  { name: "Group", component: <GroupAdd /> },
                  { name: "Predefined Group State", component: <PredefinedGroupStateAdd /> },
                  { name: "Tasks", component: <TaskAdd /> }
                ]
              } />} />
              <div className="mt-8">
                {!isLoading && groups !== null && <div>{groups.map(group => {
                  return (
                    <Group key={group.id} id={group.id} name={group.name} projects={group.projects} owned={group.owned} />
                  )
                })}</div>}
              </div>
            </>
          )
        ) : ((
          <>To view content of this page, first you have to <Link href="/login">login!</Link></>
        ))
      }

    </div>
  )
}