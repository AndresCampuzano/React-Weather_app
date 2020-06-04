import React from 'react';

const Card = props => {
  return (
    <>
      <div>
        <h1>{props.name}</h1>
        <h2>{props.cod}</h2>
        <p>
          {Object.keys(props).length ? (
            <div>
              <p>{props.weather[0]['description']}</p>
              <p>{props.weather[0]['icon']}</p>
            </div>
          ) : (
            ''
          )}
        </p>
      </div>
    </>
  );
};

export default Card;
