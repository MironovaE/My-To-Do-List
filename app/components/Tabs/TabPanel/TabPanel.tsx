import React from "react";
import './tabPanel.styles.css';
import type {TabType} from "~/screens/MainScreen/MainScreen";

type TTabPanel = React.PropsWithChildren & {
    selectedTabIndex: TabType
    index: TabType
};

export const TabPanel = ({ selectedTabIndex, index, children }: TTabPanel) => {
    if (selectedTabIndex !== index) return
    return (
        <div
            role="tabpanel"
            id={'tabpanel'}
            className="tab-panel"
        >
            {children}
        </div>
    );
}