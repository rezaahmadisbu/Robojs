import React from 'react';

const Card = ({ name, id }) => {
  return (
    <div className="tc bg-light-green br3 ma2 dib pa2 shadow-5 grow">
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h1>{name}</h1>
    </div>
  );
};

export default Card;