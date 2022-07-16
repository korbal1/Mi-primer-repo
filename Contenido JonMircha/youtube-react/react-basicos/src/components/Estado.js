import React, { Component } from "react";

export default class Estado extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contador: 0,
		};
	}

	render() {
		return (
			<div>
				<h2>El State</h2>
				<p>{this.state.contador}</p>
			</div>
		);
	}
}
