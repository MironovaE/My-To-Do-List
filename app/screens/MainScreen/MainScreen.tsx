import React from "react";
import {Tab} from "~/components/Tabs/Tab/Tab";
import {TabPanel} from "~/components/Tabs/TabPanel/TabPanel";
import {ReactHookScreen} from "~/screens/ReactHookScreen/ReactHookScreen";
import {RTKQScreen} from "~/screens/RTKQScreen/RTKQScreen";

import './mainScreen.styles.css';

const TAB_LIST = ['React Hooks', 'RTK Query']

export type TabType = typeof TAB_LIST[keyof typeof TAB_LIST];

export const MainScreen: React.FC = () => {
    const [selectedTabIndex, setSelectedTabIndex] = React.useState<TabType>(TAB_LIST[1]);

    const handleClick = (newTab: TabType) => {
        setSelectedTabIndex(newTab);
    };

    return (
        <div className="container">
            <div className="header">
                My To Do List
            </div>
            {TAB_LIST .map((item, index)=> (
                <Tab key={index} label={item} selectedTabIndex={selectedTabIndex} index={item} onClick={() => handleClick(item)} />
            ))}

            <TabPanel selectedTabIndex={selectedTabIndex} index={TAB_LIST[0]}>
                <ReactHookScreen/>
            </TabPanel>
            <TabPanel selectedTabIndex={selectedTabIndex} index={TAB_LIST[1]} >
                <RTKQScreen/>
            </TabPanel>
        </div>
    )
}