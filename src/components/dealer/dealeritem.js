import React from 'react'
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import {Typography, Card, CardMedia, CardContent, CardActions} from '@material-ui/core';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone'

const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: '20px',
        width: '100%',
        cursor: 'pointer',
        margin: '0 0 20px 0',
    },
    media: {
        height: '240px',
    },
    card: {
        marginTop: theme.spacing(1),
    },
    service: {
        color: '#1F75E1',
        fontSize: '11px',
        fontWeight: '500',
        lineHeight: '14px',
        background: 'rgba(31, 117, 225, 0.08)',
        border: '1px solid rgba(31, 117, 225, 0.63)',
        borderRadius: '2px',
        padding: '3.5px',
    },
    title: {
        marginTop: theme.spacing(1),
        color: '#1F2D3D',
        fontSize: '15px',
        fontWeight: 'bold',
        lineHeight: '124.9%',
        letterSpacing: '0.02em',
    },
    icon: {
        color: '#8492A6',
        fontSize: '19px',
    },
    content: {
        color: '#8492A6',
        fontSize: '12px',
        fontWeight: '500',
        lineHeight: '16px',
        paddingLeft: '7px',
    },
    grid: {
        padding: '8px 0 0 0',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    outlet: {
        color: '#163C80',
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '17px',
        textAlign: 'center',
        border: '2px solid #163C80',
        borderRadius: '2px',
        width: '93%',
        padding: '13px 0',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        "&:hover": {
            backgroundColor: '#163C80',
            color: '#FFFFFF',
        }
    },
}));

const DealerItem = ({data}) => {

    let history = useHistory();

    const classes = useStyles();

    return(
        <React.Fragment>
            <Card className={classes.root} onClick={()=>{history.push('/outlet')}}>
                <CardMedia
                    className={classes.media}
                    image={data.pic}
                    title={data.nama}
                />
                <CardContent>
                    <Typography className={classes.card} variant="body2" color="textSecondary" component="p">
                        <span className={classes.service}>{data.service}</span>
                    </Typography>
                    <Typography className={classes.title} component="h2">
                        {data.nama}
                    </Typography>
                    <div className={classes.grid}>
                        <PhoneIcon className={classes.icon}/>
                        <Typography className={classes.content} variant="body2" color="textSecondary" component="p">
                                {data.telp}
                        </Typography>
                    </div>
                    <div className={classes.grid}>
                        <LocationOnIcon className={classes.icon}/>
                        <Typography className={classes.content} variant="body2" color="textSecondary" component="p">
                                {data.alamat}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions>
                    <div className={classes.outlet}>
                        Kunjungi Website Outlet
                    </div>
                </CardActions>
            </Card>
        </React.Fragment>
    );
}

export default DealerItem