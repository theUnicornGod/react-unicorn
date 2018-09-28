// Dependency Imports
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { observer, inject } from "mobx-react";
import { compose } from "recompose";
import PageWrapper from "./layouts/PageWrapper";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<PageWrapper>
				<div>Travesys</div>
			</PageWrapper>
		);
	}
}

export default compose(
	inject("UiStateStore"),
	observer
)(hot(module)(App));
