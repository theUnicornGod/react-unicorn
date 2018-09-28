import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import { compose } from "recompose";
import { StyleSheet, css } from "aphrodite";

// const imageUrl = "http://tcig.co/wp-content/uploads/splash-v2.2-768x642.png";

const styleJson = {
	color: "red"
};

const styles = StyleSheet.create({
	bgGreen: {
		backgroundColor: styleJson.color
	}
});

class PageWrapper extends Component {
	static propTypes = {
		children: PropTypes.element.isRequired
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={css(styles.bg)}>
				<div className={css(styles.bg)}>
					<h4>Wrapper</h4>
					<select
						value={this.props.UiStateStore.locale}
						onChange={(event) => {
							this.props.UiStateStore.setLocale(event.target.value);
						}}
					>
						<option value="ar">العربية</option>
						<option value="en">English</option>
					</select>
					{this.props.children}

					{this.props.UiStateStore.locale === "en" ? "English" : ""}
					{this.props.UiStateStore.locale === "ar" ? "العربية" : ""}
				</div>
			</div>
		);
	}
}

PageWrapper.propTypes = {
	uiState: PropTypes.object.isRequired
};

export default compose(
	inject("UiStateStore"),
	observer
)(PageWrapper);
