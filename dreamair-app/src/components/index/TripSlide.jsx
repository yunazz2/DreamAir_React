// Import Swiper React components
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const TripSlide = () => {

  return (
    <section id="slide">
      <div className='swiper-container'>
      <Container>
        {/* <h1 className="mt-5 ms-5">여행지 둘러보기</h1> */}

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          className="mySwiper"
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
           <SwiperSlide>
            <div className="slider-image">
              <img src="/img/slideimg.jpg" alt="slide 1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-image">
              <img src="/img/slideimg02.jpg" alt="slide 2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-image">
              <img src="/img/slide01.jpg" alt="slide 3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-image">
              <img src="/img/slide02.jpg" alt="slide 4" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-image">
              <img src="/img/slide03.jpg" alt="slide 5" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-image">
              <img src="/img/slide04.jpg" alt="slide 6" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-image">
              <img src="/img/slide05.jpg" alt="slide 7" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-image">
              <img src="/img/slide06.jpg" alt="slide 8" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-image">
              <img src="/img/slide07.jpg" alt="slide 9" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div style={ { height: '400px'} }></div>
      </Container>
      </div>
    </section>
    
  );
}

export default TripSlide;
