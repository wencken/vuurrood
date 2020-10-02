import { decorate, observable, configure, action } from "mobx";
import Setting from "../models/Setting";

configure({ enforceActions: `observed` });

class SettingStore {
  settings = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.addSetting(2, 0);
  }

  addSetting = (size, color) => {
    this.settings.push(new Setting(this.rootStore, size, color));
  }

  updateColor = (setting, value) => {
    const color = this.settings.find(check => check.value === setting.color);
    if(!color){
      setting.updateColor(value);
    } 
  }

  updateSize = (setting, value) => {
    setting.updateSize(value);
  }
}

decorate(SettingStore, {
  settings: observable,
  addSetting: action,
  updateColor: action,
  updateSize: action
});

export default SettingStore;
