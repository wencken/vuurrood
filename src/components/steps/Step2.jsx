import React from "react";
import { PropTypes, inject, observer } from "mobx-react";
import styles from "./AddSteps.module.css";

const Step2 = ({ questionStore }) => {
  const currentStep = questionStore.currentStep;
  const nameRef = questionStore.questions[0].name;
  const moodRef = questionStore.questions[0].mood;
  //
  const clickedJ = questionStore.clickedJ;
  const clickedN = questionStore.clickedN;
  const clickJ = questionStore.clickJ;
  const clickN = questionStore.clickN;

  if (currentStep !== 2) {
    return null
  } 

  const handleSubmit = (e, question) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    questionStore.updateMood(question, value);
  }

  return (
    <div className={styles.wrapper}>
    <h4 className={`visually-hidden`}>Step {currentStep}</h4>
    <p>{nameRef}, ben jij aanhankelijk?</p>
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
            ref={moodRef}
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
            ref={moodRef}
            onChange={e => handleSubmit(e, question)}
          />  
        </div>
      </div>
      ))}
  </div> 
  )
}

Step2.propTypes = {
  questionStore: PropTypes.observableObject.isRequired
};

export default inject(`questionStore`) (observer(Step2));