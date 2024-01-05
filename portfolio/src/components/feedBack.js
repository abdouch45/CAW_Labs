// feedback.js

import React from 'react';
import '../Styles/feddback.css';

const Feedback = (props) => {
  const { role, name, text, rating } = props.data;

  // Function to generate star icons based on the rating
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }

    if (halfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    const remainingStars = 5 - stars.length;

    for (let i = 0; i < remainingStars; i++) {
      stars.push(<i key={`empty${i}`} className="far fa-star"></i>);
    }

    return stars;
  };

  return (
    <div className="feedback-card">
      <h3>{role} {name}</h3>
      <p>{text}</p>
      <div className="rating-stars">{renderStars()}</div>
    </div>
  );
};

export default Feedback;
