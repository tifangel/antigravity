import React, { useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Tabs, Tab } from '@material-ui/core'
import {TabPanel, TabContext} from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
    root: {
        
    },
    tabs: {
        backgroundColor: '#FFFFFF',
    },
    tabpanel: {
        padding: 0,
    },
}));

const tabStyle = {
    default_tab: {
        color: 'rgba(22, 60, 128, 0.35)',
        fontSize: '12px',
        fontWeight: 600,
        textTransform: 'capitalize',
    },
    active_tab: {
        color: '#163C80',
        fontSize: '12px',
        fontWeight: 600,
        textTransform: 'capitalize',
    }
}

const TabsX7 = () => {

    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const getStyle = (isActive) => {
        return isActive? tabStyle.active_tab : tabStyle.default_tab
    };

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <TabContext value={value}>
                <Tabs
                    className={classes.tabs}
                    value={value}
                    onChange={handleChange}
                    // variant="fullWidth"
                    centered
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: '#163C80',
                        }
                    }}
                >
                    <Tab style={getStyle(value==="1")} label="XL7 Alpha" value="1"/>
                    <Tab style={getStyle(value==="2")} label="XL7 Beta" value="2"/>
                    <Tab style={getStyle(value==="3")} label="XL7 Zeta" value="3"/>
                </Tabs>
                <TabPanel className={classes.tabpanel} value="1">
                    
                </TabPanel>
                <TabPanel className={classes.tabpanel} value="2">
                    
                </TabPanel>
                <TabPanel className={classes.tabpanel} value="3">
                    
                </TabPanel>
            </TabContext>
        </div>
    );
}

export default TabsX7