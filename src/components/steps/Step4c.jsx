import React from "react";
import { PropTypes, inject, observer } from "mobx-react";
import styles from "./AddSteps.module.css";

const Step4c = ({ questionStore }) => {
  const currentStep = questionStore.currentStep;
  const animalRef = questionStore.questions[0].animal;
  const descRef = questionStore.questions[0].description;
  const moodRef = questionStore.questions[0].mood;
  //
  const clickedJ = questionStore.clickedJ;
  const clickedN = questionStore.clickedN;
  const clickJ = questionStore.clickJ;
  const clickN = questionStore.clickN;

  if(currentStep !== 4){ return null } 
  if(descRef !== "false"){ return null } 
  if(moodRef !== "false"){ return null } 

  const handleSubmit = (e, question) => {
    e.preventDefault();
    const value = e.currentTarget.value
    questionStore.updateAnimal(question, value);
  }

  return (
    <div className={styles.wrapper}>
      <h4 className={`visually-hidden`}>Step {currentStep}</h4>
      <p>Ben je een groepsdier?</p>
      {questionStore.questions.map(question =>(
        <div key={question.id} className={styles.wrapperContainer}>
          <div className={styles.inputRadioContainer}>
            <label htmlFor="Ja" className={
              clickJ === true ? styles.labelRadioActive :  
              clickJ === false ? styles.labelRadio : styles.labelRadio}
              onClick={clickedJ}
            >Ja</label>
            <input
              className={styles.inputRadio}
              id="Ja"
              name="Ja"
              type="radio"
              placeholder="Ja"
              value="true"
              ref={animalRef}
              onChange={e => handleSubmit(e, question)}
            />
          </div>
          <div className={styles.inputRadioContainer}>
            <label htmlFor="Nee" className={
              clickN === true ? styles.labelRadioActive :
              clickN === false ? styles.labelRadio : styles.labelRadio }
              onClick={clickedN}
            >Nee</label>
            <input
              className={styles.inputRadio}
              id="Nee"
              name="Nee"
              type="radio"
              placeholder="Nee"
              value="false"
              ref={animalRef}
              onChange={e => handleSubmit(e, question)}
            /> 
          </div>
        </div>
        ))}
    </div>
    )
}

Step4c.propTypes = {
  questionStore: PropTypes.observableObject.isRequired
};

export default inject(`questionStore`) (observer(Step4c));