import React, { useState } from 'react';
import './styles.css';

// const API_KEY = '9cae4d09a666e110149f7047739076f5';
// const temperatureUnit = 'metric';
// const inputVal = 'busan';

// https://api.openweathermap.org/data/2.5/weather?q=busan&appid=c982d29f34b457c7256dfdf78eff3288&units=metric

const App = () => {
  const [data, setData] = useState({
    data: {},
    input: ''
  });

  const handleClick = async () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${data.input}&appid=c982d29f34b457c7256dfdf78eff3288&units=metric`
    )
      .then(response => response.json())
      .then(data => {
        setData({
          data: data
        });
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleInput = e => {
    setData({
      input: e.target.value
    });
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div className='App'>
      <input type='text' onChange={handleInput} onKeyPress={handleKeyPress} />
      <button type='button' onClick={handleClick}>
        Bring data
      </button>
      {data.data ? (
        <div>
          <h1>City => {data.data.name}</h1>
          <p>
            {Object.keys(data.data).length
              ? data.data.weather[0]['description']
              : ''}
          </p>
        </div>
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
};

export default App;
