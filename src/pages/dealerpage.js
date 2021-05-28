import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {Container} from '@material-ui/core'

import DealerList from '../components/dealer/'
import InformasiList from '../components/informasi/'
import Footer from '../components/footer'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        backgroundColor: '#F1F5F6',
    },
    titledealer: {
        backgroundColor: '#163C80',
        color: '#FFFFFF',
        fontSize: '20px',
        fontWeight: '600',
        textAlign: 'center',
        padding: '45px 30px',
        height: '150px',
    },
    titleinfo: {
        backgroundColor: '#163C80',
        color: '#FFFFFF',
        textAlign: 'center',
        position: 'relative',
        top: '-60px',
        height: '160px',
        padding: '30px',
    },
    subtitleinfo: {
        fontSize: '14px',
        fontWeight: 400,
        position: 'relative',
        top: '-18px',
    }
}));

const DealerPage = () => {

    const classes = useStyles();

    return(
        <React.Fragment>
            <Container maxWidth="xs" className={classes.root}>
                <div className={classes.titledealer}>
                    Temukan Outlet Suzuki terdekat di daerah sekitar Anda
                </div>
                <DealerList/>
                <div className={classes.titleinfo}>
                    <h3>Informasi Terbaru</h3>
                    <p className={classes.subtitleinfo}>Seputar Promo, Berita, Event dari Suzuki</p>
                </div>
                <InformasiList/>
            </Container>
            <Footer id={1}/>
        </React.Fragment>
    );
}

export default DealerPage