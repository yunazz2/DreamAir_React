import React from 'react'
import SearchFlight from '../../components/index/SearchFlight'
import QuickMenu from '../../components/index/QuickMenu'
import RecommendedSpots from '../../components/index/RecommendedSpots'
import LatestBoard from '../../components/index/LatestBoard'
import TripSlide from '../../components/index/TripSlide'
import './bookingMain.css';
import '../../styles/style.css';
import '../../styles/reset.css';
import TestDate from '../../components/index/TestDate'


const IndexContainer = () => {
  return (
    <div>
      {/* <TestDate /> */}
      <SearchFlight />
      <QuickMenu />
      <RecommendedSpots />
      <LatestBoard />
      <TripSlide />
    </div>
  )
}

export default IndexContainer