import React, { Component } from 'react';

class TestComponent extends Component {
	render() {
		return (
			<div>
				<p>Test from TestComponent {this.props.name}</p>
			</div>
		);
	}
}

export default TestComponent;
