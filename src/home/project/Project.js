import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './Project.css';
import ProjectMetaData from './assets/Project.json'


class Project extends Component {

  render() {
    const params = {
      touchEventsTarget: 'wrapper',
      spaceBetween: 30,
      effect: 'fade',
      loop: false,
      mousewheel: {
        invert: false,
      },
      containerClass: 'project-container',
      pagination: {
        el: '.project__pagination',
        clickable: true,
      }
    };

    return(
      <Swiper {...params}>
        {ProjectMetaData.map((item, i) =>
          <div key={i}>
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
          </div>
        )}
      </Swiper>
    )
  }
}

export default Project;
