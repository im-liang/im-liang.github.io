import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    let cardBackground = {
    	background: 'url(\'' + process.env.PUBLIC_URL + this.props.image + '\') no-repeat center/cover'
    };

    return (
    	<div className="blog-card" style={cardBackground}>
				<div className="card-content">
					<div className="title-content">
						<h3>{this.props.title}</h3>
						<hr />
						<div className="introduction">{this.props.introduction}</div>
					</div>
					<div className="card-info">
            <p>{this.props.info}</p>
						<a className="card-button" href={this.props.link}><span>Detail</span></a>
					</div>
					<div className="utility-info">
						<ul className="utility-list">
							<li className="time">{this.props.time}</li>
							<li className="date">{this.props.date}</li>
						</ul>
					</div>
				</div>
  			<div className="gradient-overlay"></div>
        <div className="color-overlay"></div>
		  </div>
    );
  }
}

export default Card;
