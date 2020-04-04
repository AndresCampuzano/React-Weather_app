import React, { Component } from 'react';
import './App.css';
import Tests01 from './Tests01';
// import TestComponent from './TestComponent';

// const API_KEY = '9cae4d09a666e110149f7047739076f5';
// const temperatureUnit = 'metric';
// const inputVal = 'busan';

// #V882JV0U

class App extends Component {
	state = {
		data: [],
	};

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async () => {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=busan&appid=c982d29f34b457c7256dfdf78eff3288&units=metric`
		);
		const data = await response.json();
		this.setState({
			data: data,
		});
		console.log(data);
		console.log(data.weather[0]['id']);
		console.log(data.weather[0]['description']);
		console.log(this.state.data.weather[0]['description']);
		console.log(this.state.data.main.temp);
	};

	render() {
		return (
			<div className='App'>
				<h1>Test from app {this.state.data.name}</h1>
				{/* {this.state.data.weather[0]['description'].map((item, num) => (
					<div key={num}>
						<p>{item.description}</p>
					</div>
				))} */}
				{/* <Tests01 propTest={this.state.data.main} /> */}
			</div>
		);
	}
}

export default App;
