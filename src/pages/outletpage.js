import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Footer from '../components/footer';
import { Container } from '@material-ui/core';
import CarouselCont from '../components/carousel';

import Poster from '../assets/images/poster.png'
import TabsCar from '../components/outlet/tabs';
import BlogList from '../components/outlet/bloglist';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        backgroundColor: '#FFFFFF',
    },
    titleoutlet: {
        backgroundColor: '#163C80',
        color: '#FFFFFF',
        fontSize: '20px',
        fontWeight: '600',
        textAlign: 'center',
        padding: '40px 0 30px 0',
        position: 'relative',
        top: '-44px',
    },
}));

const OutletPage = () => {

    const data = [
        Poster,
        Poster,
        Poster,
        Poster
    ]

    const classes = useStyles();

    return(
        <React.Fragment>
            <Container maxWidth="xs" className={classes.root}>
                <CarouselCont items={data}/>
                <div className={classes.titleoutlet}>
                    Temukan Mobil Suzuki yang tepat untuk Anda
                </div>
                <TabsCar/>
                <BlogList/>
            </Container>
            <Footer id={2}/>
        </React.Fragment>
    );
}

export default OutletPage