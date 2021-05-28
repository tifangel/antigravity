import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import Footer from '../components/footer'
import CarouselCont from '../components/carousel'

import X7 from '../assets/images/x7.png'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        backgroundColor: '#FFFFFF',
    },
}));

const X7Page = () => {

    const data = [
        X7,
        X7,
        X7,
        X7
    ]

    const classes = useStyles();

    return(
        <React.Fragment>
            <Container maxWidth="xs" className={classes.root}>
                <CarouselCont items={data}/>
            </Container>
            <Footer id={3}/>
        </React.Fragment>
    );
}

export default X7Page