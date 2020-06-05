/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import Card from '../components/Card';
import '../components/static/styles/styles.css';

// const API_KEY = '9cae4d09a666e110149f7047739076f5';
// const temperatureUnit = 'metric';
// const inputVal = 'busan';

// https://api.openweathermap.org/data/2.5/weather?q=busan&appid=c982d29f34b457c7256dfdf78eff3288&units=metric

const App = () => {
  const [data, setData] = useState({
    info: [],
    returnCodeOK: 0,
    emptyInput: false,
    input: ''
  });
  console.log(data.info);
  console.log('#: ', data.returnCodeOK);

  const connectionAPI = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${data.input}&appid=c982d29f34b457c7256dfdf78eff3288&units=metric`
    )
      .then(response => response.json())
      .then(response => {
        setData({
          ...data,
          info: response,
          returnCodeOK: response.cod
        });
      })
      .catch(() => console.log('Something failed'));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (data.input === '') {
      data.emptyInput = true;
    }
    connectionAPI();
  };

  // const handleKeyPress = e => {
  //   if (e.key === 'Enter') {
  //     handleClick();
  //   }
  // };

  const handleInput = e => {
    setData({
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          // onKeyPress={handleKeyPress}
          id='input'
          name='input'
          onChange={handleInput}
        />
        <button type='submit'>Weather</button>
      </form>
      <div>
        {data.returnCodeOK === 200 && <Card {...data.info} />}
        {data.returnCodeOK >= 400 && <p>City not found ⛅, try Medellin</p>}
        {data.emptyInput && <p>Type some city</p>}
      </div>
    </div>
  );
};

export default App;
