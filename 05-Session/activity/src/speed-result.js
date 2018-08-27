import React from 'react';

const SeepdResult = props => {
  if (props.speed >= props.limit) {
    return <p>The actual speed exceeds {props.limit} km/h limit.</p>;
  }
  return <p>The actual speed does not exceed {props.limit} km/h limit.</p>;
};

export default SeepdResult;
