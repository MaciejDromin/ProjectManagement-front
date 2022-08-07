import { useState, useEffect } from "react"

type Tabs = {
    name: string,
    component: React.ReactNode
}

interface ParentCompProps {
    isOpened:boolean,
    tabs?: Tabs[]
}

const Tab: React.FC<ParentCompProps> = (props) => {
    const { isOpened, tabs } = props;
    const [selectedTab, setSelectedTab] = useState({id: 0, name: tabs[0].name})
    const changeTab = () => {
        setSelectedTab({id: selectedTab.id+1, name: tabs[selectedTab.id+1].name})
    }
    useEffect(() => {
        if (isOpened) setSelectedTab({id: 0, name: tabs[0].name})
    }, [isOpened])
    return (
        <div className="tabs">
            {tabs.map((tab) => {
                return (
                    <a key={tab.name} className={'tab tab-bordered ' + (selectedTab.name === tab.name ? 'tab-active' : '')}>{tab.name}</a>
                )
            })}
            {tabs.map((tab) => {
                return (
                    <div className={(selectedTab.name === tab.name ? "basis-full my-3" : "hidden")}>
                        {selectedTab.name === tab.name ? 
                            (tab.component) : ''
                        }
                    </div>
                )
            })}
            {selectedTab.id === tabs.length-1 ? (
                (<button className="mt-8 basis-full" onClick={changeTab}>Save</button>)
            ) : (
                (<button className="mt-8 basis-full" onClick={changeTab}>Next</button>)
            )
            }
        </div>
    )
}

export default Tab