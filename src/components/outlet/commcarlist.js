import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        
    },
}));

const CommercialCar = ({data}) => {

    return(
        <React.Fragment>

        </React.Fragment>
    );
}

const CommercialCarList = () => {

    const data = [
        
    ]

    const classes = useStyles();

    return(
        <div className={classes.root}>
            {data.map((car) => {
                return(
                    <CommercialCar 
                        data={car}
                    />
                )
            })}
        </div>
    );
}

export default CommercialCarList