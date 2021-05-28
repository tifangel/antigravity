import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Blog1 from '../../assets/images/blog1.png'
import Blog2 from '../../assets/images/blog2.png'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '325px',
        marginBottom: '1px',
        cursor: 'pointer',
    },
    layer: {
        backgroundColor: '#163C80',
        opacity: '0.75',
        mixBlendMode: 'multiply',
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    content: {
        position: 'relative',
        top: '-280px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '75%',
        textAlign: 'center',
        color: 'white',
        letterSpacing: '1px',
    },
    boxlink: {
        fontSize: '16px',
        fontWeight: 'bold',
        border: '2px solid #FFFFFF',
        borderRadius: '2px',
        padding: '13px 20px',
        position: 'relative',
        top: '30px',
    },
}));

const Blog = ({data}) => {

    const classes = useStyles();

    return(
        <div className={classes.root} 
            style={{
                backgroundImage: `url(${data.bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className={classes.layer}>
            </div>
            <div className={classes.content}>
                <h2>{data.title}</h2>
                <p style={{fontSize: '17px'}}>{data.sub}</p>
                <span className={classes.boxlink}>{data.textlink}</span>
            </div>
        </div>
    );
}

const BlogList = () => {

    const data = [
        {bg: Blog1, title: 'PEMESANAN SERVIS', sub: 'Tetap nyaman dan aman berkendara dengan servis rutin kendaraan Suzuki', textlink: 'PESAN SERVIS'},
        {bg: Blog2, title: 'SUKU CADANG & AKSESORIS', sub: 'Temukan berbagai suku cadang dan aksesoris kendaraan Suzuki Anda', textlink: 'SELENGKAPNYA'}
    ]

    return(
        <>
            {data.map((blog) => {
                return(
                    <Blog 
                        data={blog}
                    />
                )
            })}
        </>
    );
}

export default BlogList