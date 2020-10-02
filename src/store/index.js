import SettingStore from "./SettingStore";
import QuestionStore from "./QuestionStore";

class RootStore {
  constructor() {
    this.settingStore = new SettingStore(this);
    this.questionStore = new QuestionStore(this);
  }
}

export default new RootStore();
