import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DealerItem from './dealeritem'

import Dealer1 from '../../assets/images/dealer1.png'
import Dealer2 from '../../assets/images/dealer2.png'
import Dealer3 from '../../assets/images/dealer3.png'
import Dealer4 from '../../assets/images/dealer4.png'
import Dealer5 from '../../assets/images/dealer5.png'
import Dealer6 from '../../assets/images/dealer6.png'
import Dealer7 from '../../assets/images/dealer7.png'
import Dealer8 from '../../assets/images/dealer8.png'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        top: '-100px',
        padding: '0 15px',
    },
}));

const DealerList = () => {

    const data = [
        {pic: Dealer1, service: 'Sales, Service, Sparepart, Body & Paint', nama: 'SUZUKI NJS SOEKARNO - HATTA', telp: '(022) 6204645', alamat: 'JL. Soekarna Hatta No.289 Bandung 40234'},
        {pic: Dealer2, service: 'Sales, Service, Sparepart', nama: 'SUZUKI NJS CIBEUREUM', telp: '(022) 6204645', alamat: 'JL. Raya Cibeureum 48 B Bandung'},
        {pic: Dealer3, service: 'Sales, Service, Sparepart', nama: 'SUZUKI NJS BUAH BATU', telp: '(022) 7300723', alamat: 'JL. Soekarno - Hatta No. 513 Bandung'},
        {pic: Dealer4, service: 'Sales, Service, Sparepart', nama: 'SUZUKI NJS AHMAD YANI', telp: '(022) 7101655', alamat: 'JL. Jenderal Ahmad Yani 259 Bandung'},
        {pic: Dealer5, service: 'Sales', nama: 'SUZUKI NJS KOPO', telp: '(022) 5422259', alamat: 'JL. Kopo (Sayati) 260 C Bandung'},
        {pic: Dealer6, service: 'Sales', nama: 'SUZUKI NJS DAGO', telp: '(022) 6002512', alamat: 'JL. IR.H. Juanda (Dago) No. 75 Bandung'},
        {pic: Dealer7, service: 'Sales, Service, Sparepart', nama: 'SUZUKI NJS SETIABUDHI', telp: '(022) 2030787', alamat: 'JL. DR. Setiabudhi No. 78 Bandung'},
        {pic: Dealer8, service: 'Sales, Service, Sparepart', nama: 'SUZUKI NJS RANCAEKEK', telp: '(022) 87836800', alamat: 'JL. Raya Rancaekek Cipasir KM. 22 Rancaekek'}
    ]

    const classes = useStyles();

    return(
        <div className={classes.root}>
            {data.map((dealer) => {
                return(
                    <DealerItem 
                        data={dealer}
                    />
                )
            })}
        </div>
    );
}

export default DealerList