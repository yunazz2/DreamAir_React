import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as qr from '../../apis/qr'
import QRList from '../../components/admin/QRList'
import Header from '../../components/fragment/Header'
import Adminfooter from '../../components/fragment/Adminfooter'
import Adminsidebar from '../../components/fragment/Adminsidebar'

const QRListContainer = () => {

    const { qrNo } = useParams();

    const [qrList, setQRList] = useState([]);

    const getQRList = async () => {
        const response = await qr.list();
        const data = await response.data;
        console.log(data);
        setQRList(data);
    }
    
    useEffect(() => {
        getQRList();
    }, [])

    return (
        <>
        <Header/>
        <div className='d-flex'>
            <Adminsidebar/>
            <QRList qrList = {qrList} qrNo = {qrNo}/>
        </div> 
        <Adminfooter/> 
        </>
    )
}

export default QRListContainer