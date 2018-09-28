import { observable, action } from "mobx";

class UiStateStore {
	@observable country = "KSA";
	@observable locale = "ar";

	@action
	setLocale(locale) {
		this.locale = locale;
	}
}

export default new UiStateStore();
