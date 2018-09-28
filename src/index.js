import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import App from "./App.js";

// mobx stores
import UiStateStore from "./store/uiStateStore";

window.appState = UiStateStore;

ReactDOM.hydrate(
	<Provider UiStateStore={UiStateStore}>
		<App />
	</Provider>,
	document.getElementById("app")
);
