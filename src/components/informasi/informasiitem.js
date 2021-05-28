import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {Typography, Card, CardMedia, CardContent} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        cursor: 'pointer',
        margin: '0 0 20px 0',
    },
    media: {
        height: '240px',
    },
    date: {
        color: '#8492A6',
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: '16px',
    },
    title: {
        marginTop: theme.spacing(1),
        color: '#1F2D3D',
        fontSize: '15px',
        fontWeight: 'bold',
        lineHeight: '124.9%',
    },
}));

const InformasiItem = ({data}) => {

    const classes = useStyles();

    return(
        <Card className={classes.root} onClick={()=>{window.location.reload(true)}}>
            <CardMedia
                className={classes.media}
                image={data.pic}
                title={data.name}
            />
            <CardContent>
                <Typography className={classes.date} variant="body2" color="textSecondary" component="p">
                    {data.date}
                </Typography>
                <Typography className={classes.title} component="h2">
                    {data.name}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default InformasiItem