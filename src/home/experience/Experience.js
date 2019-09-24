import React, {Component} from 'react';
import './Experience.css';
import ExperienceMetaData from './assets/Experience.json'

class Experience extends Component {
  render() {

    return (
      <ul className="timeline">
        {ExperienceMetaData.map((item, i) =>
          <li className="timeline-event" key={i}>
            <label className="timeline-event-icon"></label>
            <div className="timeline-event-copy">
              <p className="timeline-event-thumbnail">{item.date}</p>
              <h3><a href={item.link}>{item.company}</a></h3>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </li>
        )}
      </ul>
  );
  }
}

export default Experience;
