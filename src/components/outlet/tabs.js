import React, { useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Tabs, Tab } from '@material-ui/core'
import {TabPanel, TabContext} from '@material-ui/lab'
import PassengerCarList from './passcarlist'
import CommercialCarList from './commcarlist'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        top: '-44px',
    },
    tabs: {
        backgroundColor: '#163C80',
    },
    car: {
        color: '#163C80',
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '17px',
        textAlign: 'center',
        border: '2px solid #163C80',
        borderRadius: '2px',
        width: '40%',
        padding: '13px 0',
        position: 'relative',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: '#163C80',
            color: '#FFFFFF',
        }
    },
    tabpanel: {
        padding: 0,
    },
}));

const tabStyle = {
    default_tab: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '16px',
        fontWeight: 500,
        textTransform: 'capitalize',
    },
    active_tab: {
        color: '#FFFFFF',
        fontSize: '16px',
        fontWeight: 500,
        textTransform: 'capitalize',
    }
}

const TabsCar = () => {

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
                    variant="fullWidth"
                    centered
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: '#FFFFFF',
                        }
                    }}
                >
                    <Tab style={getStyle(value==="1")} label="Passenger Car" value="1"/>
                    <Tab style={getStyle(value==="2")} label="Commercial Car" value="2"/>
                </Tabs>
                <TabPanel className={classes.tabpanel} value="1">
                    <PassengerCarList/>
                </TabPanel>
                <TabPanel className={classes.tabpanel} value="2">
                    <CommercialCarList/>
                </TabPanel>
            </TabContext>
            <div className={classes.car}>
                Lihat Semua Mobil
            </div>
        </div>
    );
}

export default TabsCar