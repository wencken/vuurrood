import uniqid from "uniqid";
import { decorate, observable, action } from "mobx";

class Setting {
  constructor(store, size, color) {
    this.id = uniqid();
    this.store = store;
    this.size = size;
    this.color = color;
  }

  updateSize = value => (this.size = value);
  updateColor = value => (this.color = value);
}

decorate(Setting, {
  size: observable,
  color: observable,
  //
  updateSize: action,
  updateColor: action
});

export default Setting;
