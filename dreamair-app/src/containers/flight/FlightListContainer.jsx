import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as flight from '../../apis/flight'
import FlightList from '../../components/flight/FlightList'

const FlightListContainer = () => {

  const navigate = useNavigate()

  const { flightNo } = useParams();
  const [ flightList, setFlightList] = useState([])

  // 게시글 목록 데이터
  const getFlightList = async() => {
    const response = await flight.flight_list();
    const data = await response.data;
    console.log(data);
    setFlightList(data);
  };

  const onDelete = async (flightNo) => {
    const response = await flight.flight_delete(flightNo);
    console.log(response.data);
    alert('삭제 완료')

    // ➡ 게시글 목록 이동
    navigate('/flight')
  }

  useEffect( () => {
    getFlightList();

  }, [])

  return <FlightList  flightList={flightList}
                      flightNo={flightNo} 
                      onDelete={onDelete}
                      />
  }

export default FlightListContainer