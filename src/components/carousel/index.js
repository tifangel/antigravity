import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { IconButton} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
}));

const CarouselCont = ({items}) => {

    // const classes = useStyles();

    return(
        <Carousel 
            navButtonsAlwaysVisible={true}
            animation="slide"
            autoPlay={false}
            cycleNavigation={false}
            navButtonsProps={{
                style: {
                    backgroundColor: '#FFFFFF',
                    color: '#163C80',
                    padding: '0px',
                }
            }}
            indicatorContainerProps={{
                style: {
                    position: 'relative',
                    top: '-50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'rgb(0, 0, 0, 0.5)',
                    borderRadius: '2px',
                    paddingBottom: '7px',
                    width: '20%',
                }
            }}
            indicatorIconButtonProps={{
                style: {
                    background: 'transparant',
                    border: '1px solid #FFFFFF',
                    padding: 0,
                    margin: '2px'
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    backgroundColor: '#FFFFFF',
                }
            }}
            IndicatorIcon={<IconButton style={{padding: '5px'}}></IconButton>}
        >
          {
              items.map( (item, i) => <Item key={i} item={item} /> )
          }
        </Carousel>
    );
}

function Item({item})
{
    const classes = useStyles();

    return (
        <img src={item} className={classes.root}/>
    )
}

export default CarouselCont