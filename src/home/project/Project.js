import React from 'react';
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Project.css';
import ProjectMetaData from './assets/Project.json';

export default function Project() {
  return (
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        direction={'vertical'}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="project-container"
      >
        {ProjectMetaData.map((item, i) =>
          <SwiperSlide key={i}>
              <div className="project__img">
                <img
                  src={item.img}
                  alt="" />
              </div>
              <div className="project__content">
                <span className="project__code">{item.date}</span>
                <div className="project__title">{item.title}</div>
                <div className="project__text">{item.description}</div>
                <a href={item.link} className="project__button">READ MORE</a>
              </div>
          </SwiperSlide>
        )}
      </Swiper>
  );
}