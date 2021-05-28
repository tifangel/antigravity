import React from 'react'
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import Car1 from '../../assets/images/car1.png'
import Car2 from '../../assets/images/car2.png'
import Car3 from '../../assets/images/car3.png'
import Car4 from '../../assets/images/car4.png'
import { Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        padding: '30px 0 30px 15px',
        borderRadius: 0,
        border: "none", 
        boxShadow: "none",
        cursor: 'pointer',
    },
    media: {
        width: '200px',
        height: '120px',
    },
    content: {
        paddingLeft: '15px',
    },
    title: {
        fontSize: '15px',
        fontWeight: 'bold',
        color: '#111010',
    },
    start: {
        fontSize: '12px',
        color: '#828282',
    },
    price: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#163C80',
    },
    detail: {
        color: '#1F75E1',
        fontSize: '11px',
        fontWeight: '500',
        lineHeight: '14px',
        background: 'rgba(31, 117, 225, 0.08)',
        border: '1px solid rgba(31, 117, 225, 0.63)',
        borderRadius: '2px',
        padding: '3.5px',
    },
    dividerColor: {
        backgroundColor: '#EEEAEA',
        height: '1px',
        width: '95%',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
    },
}));

const PassengerCar = ({data}) => {
    
    let history = useHistory();

    const classes = useStyles();

    return(
        <Card className={classes.root} onClick={()=>{history.push('/x7')}}>
            <CardMedia
                className={classes.media}
                image={data.pic}
                title={data.name}
            />
            <CardContent className={classes.content}>
                <Typography className={classes.title} component="h4">
                    {data.name}
                </Typography>
                <Typography className={classes.start} component="p">
                    Mulai Dari
                </Typography>
                <Typography className={classes.price} component="h4">
                    {data.price}
                </Typography>
                <span className={classes.detail}>Lihat Detail</span>
            </CardContent>
            <CardActions>

            </CardActions>
        </Card>
    );
}

const PassengerCarList = () => {

    const data = [
        {pic: Car1, name: 'XL 7', price: 'Rp 232.000.000'},
        {pic: Car2, name: 'All New Ertiga', price: 'Rp 207.000.000'},
        {pic: Car3, name: 'All New Ertiga Suzuki Sport', price: 'Rp 252.000.000'},
        {pic: Car4, name: 'New Ignis', price: 'Rp 171.000.000'}
    ]

    const classes = useStyles();

    return(
        <div>
            {data.map((car) => {
                return(
                    <>
                        <PassengerCar 
                            data={car}
                        />
                        <Divider className={classes.dividerColor}/>
                    </>
                )
            })}
        </div>
    );
}

export default PassengerCarList