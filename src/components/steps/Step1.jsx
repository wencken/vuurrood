import React from "react";
import { PropTypes, inject, observer } from "mobx-react";
import styles from "./AddSteps.module.css";

const Step1 = ({ questionStore }) => {
  const currentStep = questionStore.currentStep;
  const nameRef = questionStore.questions[0].name;

  if (currentStep !== 1) {
    return null
  } 

  const handleSubmit = (e, question) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    questionStore.updateName(question, value);
  }

  return (
    <div className={styles.wrapper}>
      <h4 className={`visually-hidden`}>Step {currentStep}</h4>
      {questionStore.questions.map(question =>(
        <label key={question.id} htmlFor="name" className={styles.label}>Hello, 
          <input
            className={styles.inputFancy}
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            defaultValue=""
            ref={nameRef}
            onChange={e => handleSubmit(e, question)}
          /> 
        </label>
      ))}
    </div>
    )
}

Step1.propTypes = {
  questionStore: PropTypes.observableObject.isRequired
};

export default inject(`questionStore`) (observer(Step1));