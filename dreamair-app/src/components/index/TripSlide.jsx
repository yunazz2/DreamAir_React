import React from 'react';
import { Container } from 'react-bootstrap';
// import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/navigation/navigation.scss';

// Install Swiper modules
// SwiperCore.use([Pagination, Navigation]);

const TripSlide = () => {
  return (
    <section id="slide">
      <Container>
        <h1 className="mt-5 ms-5">여행지 둘러보기</h1>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slider-image">
              <img src="../../static/img/slide01.jpg" alt="slide 1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-image">
              <img src="../../static/img/slide02.jpg" alt="slide 2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-image">
              <img src="../../static/img/slide03.jpg" alt="slide 3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-image">
              <img src="../../static/img/slide04.jpg" alt="slide 4" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-image">
              <img src="../../static/img/slide05.jpg" alt="slide 5" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-image">
              <img src="../../static/img/slide06.jpg" alt="slide 6" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-image">
              <img src="../../static/img/slide07.jpg" alt="slide 7" />
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default TripSlide;
