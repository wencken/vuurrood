import { decorate, observable, configure, action, runInAction } from "mobx";
import Question from "../models/Question";

configure({ enforceActions: `observed` });

class QuestionStore {
  questions = [];
  currentStep = 1;
  clickJ = false;
  clickN = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this._addStep("wencke", "true", "happy", "panda");
  }

  _addStep = ({name, mood, description, animal, _id}) => {
    const question = new Question(name,  mood, description, animal, _id);
    runInAction(() => this.questions.push(question));
  };

  addCurrentStep = () => {
    this.currentStep++;
  }

  removeCurrentStep = () => {
    this.currentStep--;
  }

  updateName = (question, value) => {
    question.setName(value);
  }

  updateMood = (question, value) => {
    question.setMood(value);
  }

  updateDesc = (question, value ) => {
    question.setDesc(value);
  }

  updateAnimal = (question, value) => {
    question.setAnimal(value);
  }

  clickedJ = () => {
    this.clickJ = true;
    this.clickN = false;
  }

  clickedN = () => {
    this.clickN = true;
    this.clickJ = false;
  }
}

decorate(QuestionStore, {
  questions: observable,
  //
  updateName: action,
  updateMood: action,
  updateDesc: action,
  updateAnimal: action,
  //
  currentStep: observable,
  addCurrentStep: action,
  removeCurrentStep: action,
  //
  clickJ: observable,
  clickN: observable,
  clickedJ: action,
  clickedN: action
});

export default QuestionStore;
