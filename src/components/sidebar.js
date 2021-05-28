import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import PhoneIcon from '@material-ui/icons/Phone'
import List from '@material-ui/core/List'
import MuiListItem from "@material-ui/core/ListItem"
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import ImgOne from '../assets/images/logo1.png'
import ImgTwo from '../assets/images/logo2.png'

const useStyles = makeStyles((theme) => ({
    root: {
      
    },
    menuButton: {
        padding: '5px',
        backgroundColor: '#163C80',
    },
    icon: {
        fontSize: '30px',
        color: '#FFFFFF',
    },
    listItemText: {
        fontSize: '18px',
        fontWeight: '600',
    },
    dividerColor: {
        backgroundColor: '#EEEAEA',
        height: '2px',
        width: '85%',
        position: 'relative',
        left: '20px',
        top: '10px',
    },
    grid: {
        padding: '20px 0 0 22px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    telp: {
        position: 'relative',
        left: '20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '48%',
        padding: '0 60px',
        backgroundColor: '#163C80',
        color: '#FFFFFF',
        borderRadius: '2px',
    },
    notelp: {
        fontSize: '16px',
        fontWeight: 'bold',
        padding: '5px',
    },
    footer: {
        position: 'absolute',
        bottom: '29px',
        left: '20px',
        fontSize: '12px',
        lineHeight: '132.5%',
        letterSpacing: '0.02em',
        color: '#111010',
    },
}));

const ListItem = withStyles({
    root: {
        backgroundColor: '#FFFFFF',
        color: '#111010',
        paddingTop: 0,
        paddingLeft: '20px',
        "&$selected": {
            backgroundColor: "#FFFFFF",
        },
        "&$selected:hover": {
            backgroundColor: "#FFFFFF",
        },
        "&:hover": {
            backgroundColor: "#FFFFFF",
        },
    },
    selected: {}
  })(MuiListItem);

const Sidebar = ({id, onMenuClick}) => {

    const classes = useStyles();

    return(
        <React.Fragment>
            <List>
                <ListItem 
                    selected={id === 0}
                    onClick={event => onMenuClick(event, 0)}
                >
                    <ListItemText classes={{primary:classes.listItemText}} primary="Beranda"/>
                </ListItem>
                <ListItem
                    selected={id === 0}
                    onClick={event => onMenuClick(event, 0)}
                >
                    <ListItemText classes={{primary:classes.listItemText}} primary="Tentang Kami"/>
                </ListItem>
                <ListItem
                    selected={id === 0}
                    onClick={event => onMenuClick(event, 0)}
                >
                    <ListItemText classes={{primary:classes.listItemText}} primary="Mobil"/>
                </ListItem>
                <ListItem
                    selected={id === 0}
                    onClick={event => onMenuClick(event, 0)}
                >
                    <ListItemText classes={{primary:classes.listItemText}} primary="Service"/>
                </ListItem>
                <ListItem
                    selected={id === 0}
                    onClick={event => onMenuClick(event, 0)}
                >
                    <ListItemText classes={{primary:classes.listItemText}} primary="Sparepart"/>
                </ListItem>
                <ListItem
                    selected={id === 0}
                    onClick={event => onMenuClick(event, 0)}
                >
                    <ListItemText classes={{primary:classes.listItemText}} primary="Hubungi Kami"/>
                </ListItem>
            </List>
            <Divider classes={{root: classes.dividerColor}}/>
            <div className={classes.telp}>
                <PhoneIcon/>
                <p className={classes.notelp}>(002) 6204645</p>
            </div>
            <div className={classes.grid}>
                <img src={ImgOne}/>
                <img src={ImgTwo}/>
            </div>
            <div className={classes.footer}>
                @ 2020 Suzuki Indonesia
                <br/>
                All rights reserved
            </div>
        </React.Fragment>
    );
}

export default Sidebar