import { action, decorate, observable, computed} from "mobx";
import uniqid from "uniqid";

class Question {
  constructor(name, mood, description, animal) {
    this.id = uniqid();
    this.name = name;
    this.mood = mood;
    this.description = description;
    this.animal = animal;
  }

  setId = value => (this.id = value)
  setName = value => {this.name = value}
  setMood = value => {this.mood = value}
  setDesc = value => {this.description = value}
  setAnimal= value => {this.animal = value}

  get values() {
    return { 
      name: this.name,
      mood: this.mood,
      description: this.description,
      animal: this.animal
    };
  }

  updateFromServer = values => {
    this.setId(values._id);
    this.setName(values.name);
    this.setMood(values.mood);
    this.setDesc(values.description);
    this.setAnimal(values.animal);
  };
}

decorate(Question, {
  id: observable,
  name: observable,
  mood: observable,
  description: observable,
  animal: observable,
  //
  setName: action,
  setMood: action,
  setDesc: action,
  setAnimal: action,
  //
  values: computed
});

export default Question;
