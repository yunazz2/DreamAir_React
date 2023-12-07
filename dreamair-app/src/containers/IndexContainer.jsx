import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchFlight from '../components/index/SearchFlight'
import QuickMenu from '../components/index/QuickMenu'
import RecommendedSpots from '../components/index/RecommendedSpots'
import LatestBoard from '../components/index/LatestBoard'
import TripSlide from '../components/index/TripSlide'
import * as index from '../apis/index'
import '../styles/bookingMain.css';
import '../styles/style.css';
import '../styles/reset.css';

const IndexContainer = () => {

  const[mainList, setMainList] = useState([]);

  const getMainList = async () => {
      const response = await index.mainList();
      const data = await response.data;
      console.log("mainList" + data);
      setMainList(data);
  }

  useEffect(() => {
      getMainList();
      console.log("useEffect");
  }, [])

  return (
    <div>
      <SearchFlight />
      <QuickMenu />
      <RecommendedSpots />
      <LatestBoard mainList={mainList}/>
      <TripSlide />
    </div>
  )
}

export default IndexContainer