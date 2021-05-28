import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Tabs, Tab } from '@material-ui/core'
import Footer from '../components/footer'
import CarouselCont from '../components/carousel'

import X7 from '../assets/images/x7.png'
import TabsX7 from '../components/x7/tabs'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        backgroundColor: '#163C80',
    },
    root2: {
        padding: 0,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: '13px',
        fontWeight: 'bold',
        letterSpacing: '0.02em',
        color: '#111010',
        margin: 0,
        padding: '10px 20px',
        borderBottom: '1px dashed #EEEAEA',
        backgroundColor: '#F8F7F7',
    },
    tabs: {
        backgroundColor: '#F8F7F7',
    },
    desc: {
        position: 'relative',
        top: '-43px',
        backgroundColor: '#163C80',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: '15px 25px',
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

const X7Page = () => {

    const data = [
        X7,
        X7,
        X7,
        X7
    ]

    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const getStyle = (isActive) => {
        return isActive? tabStyle.active_tab : tabStyle.default_tab
    };

    const classes = useStyles();

    return(
        <React.Fragment>
            <p className={classes.title}>XL 7</p>
            <Tabs
                    className={classes.tabs}
                    value={value}
                    onChange={handleChange}
                    // variant="fullWidth"
                    // centered
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: '#163C80',
                        }
                    }}
                >
                <Tab style={getStyle(value==="1")} label="Overview" value="1"/>
                <Tab style={getStyle(value==="2")} label="Tipe Warna" value="2"/>
                <Tab style={getStyle(value==="3")} label="Eksterior" value="3"/>
                <Tab style={getStyle(value==="4")} label="Interior" value="4"/>
                <Tab style={getStyle(value==="5")} label="Spesifikasi" value="5"/>
                <Tab style={getStyle(value==="6")} label="Harga" value="6"/>
            </Tabs>
            <Container maxWidth="xs" className={classes.root}>
                <CarouselCont items={data}/>
                
                <div className={classes.desc}>
                    <h1>GEAR TO ACTION</h1>
                    <p style={{fontSize: '14px', lineHeight: '20px'}}>Suzuki XL7 hadir dengan tampilan maskulin, tangguh dan berkarakter. Desain modern SUV 7-Seater memberikan kebanggaan dan kepercayaan bagi penggunanya. Dilengkapi dengan fitur canggih semakin membuat XL7 menjadi SUV yang luar biasa di kelasnya</p>
                    
                </div>

            </Container >

            <Container maxWidth="xs" className={classes.root2}>
                <TabsX7/>
            </Container>

            <Footer id={3}/>
        </React.Fragment>
    );
}

export default X7Page