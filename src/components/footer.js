import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'
import {Divider, Grid, Dialog, DialogTitle} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'

import Footer1 from '../assets/images/footer1.png'
import Footer2 from '../assets/images/footer2.png'
import Footer3 from '../assets/images/footer3.png'

import Menu1 from '../assets/images/wa.png'
import Menu2 from '../assets/images/daftarharga.png'
import Menu3 from '../assets/images/pesanservis.png'
import Menu4 from '../assets/images/simulasikredit.png'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        color: '#1F2D3D',
        paddingBottom: '50px',
    },
    botnav: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '15px',
        fontWeight: 500,
        padding: '25px 0 20px 0',
    },
    navitem: {
        margin: theme.spacing(1.5),
        cursor: 'pointer',
        "&:hover": {
            color: '#163C80',
        },
    },
    dividerColor: {
        backgroundColor: '#EEEAEA',
        height: '2px',
        width: '97%',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
    },
    map: {
        marginTop: theme.spacing(2.5),
        position: 'relative',
        left: '50%',
        transform: 'translate(-50%)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '185px',
        padding: '10px 13px',
        color: '#163C80',
        border: '2px solid #163C80',
        borderRadius: '2px',
        cursor: 'pointer',
        "&:hover": {
            color: '#FFFFFF',
            backgroundColor: '#163C80',
        },
    },
    telp: {
        marginTop: theme.spacing(1.5),
        position: 'relative',
        left: '50%',
        transform: 'translate(-50%)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '156px',
        padding: '10px 30px',
        backgroundColor: '#163C80',
        color: '#FFFFFF',
        borderRadius: '2px',
        cursor: 'pointer',
    },
    notelp: {
        fontSize: '16px',
        fontWeight: 'bold',
        padding: '0 0 0 8px',
        margin: 0,
    },
    footer: {
        color: '#FFFFFF',
        fontSize: '15px',
        fontWeight: 400,
        textAlign: 'center',
        padding: '35px 0',
        backgroundColor: '#163C80',
    },
    footerpop: {
        backgroundColor: '#163C80',
        padding: '45px 0',
    },
    grid: {
        backgroundColor: '#FFFFFF',
        padding: '10px 0',
        width: '95%',
        borderRadius: '10px',
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
    },
    griditem: {
        textAlign: 'center',
        cursor: 'pointer',
    },
    gridtext: {
        margin: 0,
        fontSize: '10px',
        letterSpacing: '0.02em',
    },
    booking: {
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: '#163C80',
        borderRadius: '2px',
        border: '2px solid #163C80',
        padding: '10px',
        width: '90%',
        margin: '0 0 0 20px',
        color: '#FFFFFF',
        fontSize: '15px',
        fontWeight: 600,
    },
}));

const FormDialog = (props) => {
    const classes = useStyles();
    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="dialog-title" open={open}>
          <DialogTitle id="dialog-title">Booking Mobil</DialogTitle>
          
        </Dialog>
      );
}

FormDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

const Footer = ({id}) => {

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let data = []
    let menupop = <></>

    if(id === 1){
        data = ['Beranda', 'Tentang Kami', 'Outlet', 'Blog', 'Promo']
    }else if(id === 2){
        data = ['Beranda', 'Mobil', 'Service', 'Sparepart', 'Tentang Kami', 'Hubungi Kami']
        menupop = <div className={classes.footerpop}>
                    <Grid container className={classes.grid}>
                        <Grid item xs={3} className={classes.griditem}>
                            <img src={Menu1}/>
                            <p className={classes.gridtext}>WhatsApp</p>
                        </Grid>
                        <Grid item xs={3} className={classes.griditem}>
                            <img src={Menu2}/>
                            <p className={classes.gridtext}>Daftar Harga</p>
                        </Grid>
                        <Grid item xs={3} className={classes.griditem}>
                            <img src={Menu3}/>
                            <p className={classes.gridtext}>Pesan Servis</p>
                        </Grid>
                        <Grid item xs={3} className={classes.griditem}>
                            <img src={Menu4}/>
                            <p className={classes.gridtext}>Simulasi Kredit</p>
                        </Grid>      
                    </Grid>
                </div>
    }else if(id === 3){
        data = ['Beranda', 'Mobil', 'Service', 'Sparepart', 'Tentang Kami', 'Hubungi Kami']
        menupop = <div className={classes.footerpop}>
                    <Grid container className={classes.grid}>
                        <Grid item xs={6} className={classes.griditem}>
                            <p className={classes.booking} onClick={handleClickOpen}>Booking Mobil</p>
                        </Grid>
                        <Grid item xs={3} className={classes.griditem}>
                            <img src={Menu1}/>
                            <p className={classes.gridtext}>WhatsApp</p>
                        </Grid>
                        <Grid item xs={3} className={classes.griditem}>
                            <img src={Menu4}/>
                            <p className={classes.gridtext}>Simulasi Kredit</p>
                        </Grid>      
                    </Grid>
                </div>
    }

    return(
        <React.Fragment>
        <div className={classes.root}>
            <div className={classes.botnav}>
                {data.map((nav) => {
                    return(
                        <div className={classes.navitem}>
                            {nav}
                        </div>
                    )
                })}
            </div>
            <Divider classes={{root: classes.dividerColor}}/>
            <h3 style={{marginBottom: 0}}>ALAMAT</h3>
            <h4 style={{margin: '6px 0 0 0'}}>SUZUKI Nusantara Jaya Sentosa</h4>
            <p style={{margin: 0, fontSize: '14px'}}>Jl. Soekarno - Hatta no.289, Bojongloa Kidul Bandung 40234</p>
            <div className={classes.map}>
                <LocationOnIcon/>
                <p className={classes.notelp}>CEK GOOGLE MAPS</p>
            </div>
            <div className={classes.telp}>
                <PhoneIcon/>
                <p className={classes.notelp}>(002) 6204645</p>
            </div>
            <Divider classes={{root: classes.dividerColor}} style={{marginTop: '30px'}}/>
            <h3 style={{marginTop: '30px'}}>HOTLINE 24 JAM (Bebas Pulsa)</h3>
            <img src={Footer1}/>
            <h3>DOWNLOAD MY SUZUKI</h3>
            <img src={Footer2}/>
            <br/><br/>
            <img src={Footer3}/>
        </div>
        <div className={classes.footer}>
            @ 2020 Suzuki Indonesia.
            <br/>
            All rights reserved.
        </div>
        {menupop}
        <FormDialog open={open} onClose={handleClose} />
        </React.Fragment>
    );
}

export default Footer