import React from 'react';

const Card = props => {
  return (
    <>
      <div>
        <h1>name: {props.name}</h1>
        <h2>code response: {props.cod}</h2>
        <p>
          {Object.keys(props).length ? (
            <div>
              <p>description: {props.weather[0]['description']}</p>
              <p>icon: {props.weather[0]['icon']}</p>
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
