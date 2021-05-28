import React, { useState} from 'react'
import {useHistory} from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from "@material-ui/core/AppBar"
import Hidden from '@material-ui/core/Hidden'
import Drawer from "@material-ui/core/Drawer"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

import Logo from '../assets/images/logo.png'
import Sidebar from './sidebar'

const drawerWidth = 303;

const useStyles = makeStyles((theme) => ({
    root: {
      
    },
    btitle: {
        flexGrow: 1,
    },
    title: {
        fontSize: '11px',
        fontWeight: '700',
        padding: 0,
        margin: '0px 8px',
        position: 'relative',
        top: '5px',
    },
    subtitle: {
        fontSize: '10px',
        fontWeight: '400',
        padding: 0,
        margin: '0px 8px',
    },
    style: {
        backgroundColor: '#FFFFFF',
        color: '#111010',
    },
    menuButton: {
        padding: '5px',
        backgroundColor: '#163C80',
    },
    closeButton: {
        padding:''
    },
    icon: {
        fontSize: '30px',
        color: '#FFFFFF',
    },
    offset: theme.mixins.toolbar,
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#FFFFFF',
        color: '#111010',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 3),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));

const Header = (props) => {

    const { window } = props;
    const theme = useTheme();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(0);

    const container = window !== undefined ? () => window().document.body : undefined;

    const handleListMenuClick = (event, id) => {
        setSelectedMenu(id);
        handleDrawerToggle();
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    let history = useHistory();

    const classes = useStyles();

    return(
        <React.Fragment>
        <AppBar position="fixed">
            <Toolbar  className={classes.style}>
                <img src={Logo}/>
                <Typography variant="h6" className={classes.btitle} onClick={() => {history.push("/")}}>
                    <p className={classes.title}>PT. Nusantara Jaya Sentosa</p>
                    <p className={classes.subtitle}>Main Dealer Suzuki Jawa Barat</p>
                </Typography>
                
                <IconButton
                    // color="inherit"
                    // aria-label="open drawer"
                    // edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon className={classes.icon}/>
                </IconButton>
            
            </Toolbar>
        </AppBar>
        <div className={classes.offset} />
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'left' : 'right'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    <div className={classes.drawerHeader}>
                    <IconButton
                        // color="inherit"
                        // aria-label="open drawer"
                        // edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <CloseIcon className={classes.icon}/>
                    </IconButton>
                    </div>
                    
                    <Sidebar 
                        id={selectedMenu}
                        onMenuClick={handleListMenuClick}
                    />
                </Drawer>
            </Hidden>
        </nav>
        </React.Fragment>
    );
}

export default Header