import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import * as index from '../apis/index';
import Footer from '../components/fragment/Footer';
import Header from '../components/fragment/Header';
import LatestBoard from '../components/index/LatestBoard';
import RecommendedSpots from '../components/index/RecommendedSpots';
import SearchFlight from '../components/index/SearchFlight';
import TripSlide from '../components/index/TripSlide';
import '../styles/bookingMain.css';
import '../styles/reset.css';
import '../styles/style.css';

const IndexContainer = () => {

  const [mainList, setMainList] = useState([]);

  const getMainList = async () => {
      const response = await index.mainList();
      const data = await response.data;
      console.log(data);
      setMainList(data);
  }

  useEffect(() => {
      getMainList();
  }, [])

  return (
    <>
      <Header />
      <div id='main_index_back'>
        <TripSlide />
        <SearchFlight />
      </div>
        {/* <QuickMenu /> */}
        <br/><br/><br/><br/><br/>
        <RecommendedSpots />
        <LatestBoard mainList={mainList}/>
        <br/><br/><br/><br/><br/>
        <Footer/>
    </>
  )
}

export default IndexContainer