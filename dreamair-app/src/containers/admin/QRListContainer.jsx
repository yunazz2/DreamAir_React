import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as qr from '../../apis/qr'
import QRList from '../../components/admin/QRList'

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

    return (<QRList qrList = {qrList}
                    qrNo = {qrNo}/>
    )
}

export default QRListContainer