import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import InformasiItem from './informasiitem'

import Info1 from '../../assets/images/info1.png'
import Info2 from '../../assets/images/info2.png'
import Info3 from '../../assets/images/info3.png'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        top: '-140px',
        padding: '0 15px',
        // height: 'calc(100%-100px)',
        height: '1050px',
    },
    info: {
        color: '#163C80',
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '17px',
        textAlign: 'center',
        border: '2px solid #163C80',
        borderRadius: '2px',
        width: '50%',
        padding: '13px 0',
        position: 'relative',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        "&:hover": {
            backgroundColor: '#163C80',
            color: '#FFFFFF',
        }
    },
}));

const InformasiList = () => {

    const data = [
        {pic: Info1, date: 'Rabu, 19 Agustus 2020', name: 'Promo Pembelian Berhadiah Periode Bulan September 2020'},
        {pic: Info2, date: 'Selasa, 17 Agustus 2020', name: 'Suzuki Insurance - Ganti Mobil Anda Dengan Nilai yang Sama'},
        {pic: Info3, date: 'Rabu, 19 Agustus 2020', name: 'Suzuki Peduli Gempa Maluku 2019, Bentuk Kepedulian Untuk Korban'}
    ]

    const classes = useStyles();

    return(
        <div className={classes.root}>
            {data.map((info) => {
                return(
                    <InformasiItem 
                        data={info}
                    />
                )
            })}
            <div className={classes.info}>
                Lihat Semua Informasi
            </div>
        </div>
    );
}

export default InformasiList