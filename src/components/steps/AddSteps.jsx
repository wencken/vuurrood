import React from "react";
import { PropTypes, inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

import styles from "./AddSteps.module.css";
import stylesButton from "../../containers/Home.module.css";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3a from "./Step3a";
import Step3b from "./Step3b";
import Step4a from "./Step4a";
import Step4b from "./Step4b";
import Step4c from "./Step4c";
import Step4d from "./Step4d";

const AddSteps = ({ questionStore, history}) => {
  const currentStep = questionStore.currentStep;
  const nameRef = questionStore.questions[0].name;
  const moodRef = questionStore.questions[0].mood;
  const descRef = questionStore.questions[0].description;
  const animalRef = questionStore.questions[0].animal;

  const handleSubmitForm = event => {
    event.preventDefault();
    if(descRef === "true" && moodRef === "true" && animalRef =="true"){
      history.push(`/spreeuw`);
    }
    if(descRef === "true" && moodRef === "true" && animalRef =="false"){
      history.push(`/panda`);
    }
    if(descRef === "true" && moodRef === "false" && animalRef =="true"){
      history.push(`/agame`);
    }
    if(descRef === "true" && moodRef === "false" && animalRef =="false"){
      history.push(`/spreeuw`);
    }
    if(descRef === "false" && moodRef === "true" && animalRef =="true"){
      history.push(`/baviaan`);
    }
    if(descRef === "false" && moodRef === "true" && animalRef =="false"){
      history.push(`/spreeuw`);
    }
    if(descRef === "false" && moodRef === "false" && animalRef =="true"){
      history.push(`/baviaan`);
    }
    if(descRef === "false" && moodRef === "false" && animalRef =="false"){
      history.push(`/oeps`);
    }
  }

  const submitButton = () => {
    if(currentStep >=4){
      return <button className={stylesButton.buttonHupla}>Hopla!</button>      
    } return null;
  }

  return (
    <>
    <h3 className={`visually-hidden`}>Step {currentStep}</h3>
      <form onSubmit={handleSubmitForm} className={styles.form}>
        <Step1 
          currentStep={currentStep}
          nameRef={nameRef}
        />
        <Step2 
          currentStep={currentStep} 
          nameRef={nameRef}
          moodRef={moodRef}
        />
        <Step3a 
          currentStep={currentStep} 
          moodRef={moodRef}
          descRef={descRef}
        />
        <Step3b 
          currentStep={currentStep} Ò
          moodRef={moodRef} 
          descRef={descRef}
        />
        {descRef === "true" ? (
          moodRef === "true" ? (
          <Step4a
            currentStep={currentStep} 
            animalRef={animalRef}
            moodRef={moodRef} 
            descRef={descRef}
          /> 
        ) : (
          <Step4d
            currentStep={currentStep} 
            animalRef={animalRef}
            moodRef={moodRef} 
            descRef={descRef}
          /> 
        )
        ) : (
          moodRef === "true" ? (
            <Step4b
              currentStep={currentStep} 
              animalRef={animalRef}
              moodRef={moodRef} 
              descRef={descRef}
            /> 
          ):(
            <Step4c
              currentStep={currentStep} 
              animalRef={animalRef}
              moodRef={moodRef} 
              descRef={descRef}
            /> 
          ))}
        <div className={styles.buttonWrapper}>
          {submitButton()}
        </div> 
      </form>
    </>
  );
};

AddSteps.propTypes = {
  questionStore: PropTypes.observableObject.isRequired
};

export default inject(`questionStore`) (withRouter(observer(AddSteps)));