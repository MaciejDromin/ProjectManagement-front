import { useState, useEffect } from "react"
import React from "react"

type Tabs = {
    name: string,
    component: React.ReactNode
}

interface ParentCompProps {
    isOpened: boolean,
    updateIsOpened: () => void
    tabs?: Tabs[]
}

const Tab: React.FC<ParentCompProps> = (props) => {
    const { isOpened, updateIsOpened, tabs } = props;
    const [selectedTab, setSelectedTab] = useState({id: 0, name: tabs[0].name})
    const [requestsToSend, setRequestToSend] = useState({endpoint: [], body: []})
    const changeTab = () => {
        setSelectedTab({id: selectedTab.id+1, name: tabs[selectedTab.id+1].name})
    }
    const setRequest = (endpoint: string, body: any) => {
        requestsToSend.endpoint[selectedTab.id] = endpoint
        requestsToSend.body[selectedTab.id] = body
    }
    const sendRequests = async () => {
        let response
        let createdId: number
        let endpoint: string
        for (let i = 0;i<=selectedTab.id;i++) {
            if (i>0) {
                endpoint = requestsToSend.endpoint[i] + createdId
            } else {
                endpoint = requestsToSend.endpoint[i]
            }
            response = await fetch("/api" + endpoint, {
                method: 'POST',
                body: JSON.stringify(requestsToSend.body[i]),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const t = await response.json()
            createdId = t.id
        }
        updateIsOpened()
    }
    useEffect(() => {
        if (isOpened) setSelectedTab({id: 0, name: tabs[0].name})
    }, [isOpened])
    return (
        <div className="tabs justify-center">
            <div className="basis-full">
                {tabs.map((tab) => {
                    return (
                        <a key={tab.name} className={'tab tab-bordered ' + (selectedTab.name === tab.name ? 'tab-active' : '')}>{tab.name}</a>
                    )
                })}
            </div>
            {tabs.map((tab) => {
                return (
                    <div className={(selectedTab.name === tab.name ? "basis-full my-3" : "hidden")}>
                        {selectedTab.name === tab.name ? 
                            (React.cloneElement(tab.component, {updateRequests: setRequest})) : ''
                        }
                    </div>
                )
            })}
            {selectedTab.id === tabs.length-1 ? (
                (<label className="mt-8 cursor-pointer" htmlFor="my-modal-3" onClick={sendRequests}>Save</label>)
            ) : (
                (<button className="mt-8" onClick={changeTab}>Next</button>)
            )
            }
        </div>
    )
}

export default Tab