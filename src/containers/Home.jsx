import React from "react";
import { PropTypes, inject, observer } from "mobx-react";

import styles from "./Home.module.css";
import stylesLayout from "./App.module.css";

import PageHeader from "../components/PageHeader";
import AddSteps from "../components/steps/AddSteps";
import Slider from "../components/settings/Slider";

const Home = ({ settingStore, questionStore }) => {
  const size = settingStore.settings[0].size;
  const color = settingStore.settings[0].color;
  const style = {fontSize: `${size}rem`, backgroundColor: `rgb(${color}, 86, 160)`};
  const currentStep = questionStore.currentStep;

  const previousButton = () => {
    if(currentStep !==1){
      return <button type="button" className={styles.button} onClick={prev}>&#10094;</button>
    } return null;
  }
  
  const nextButton = () => {
    if(currentStep <4){
      return <button type="button" className={styles.button} onClick={next}>&#10095;</button>      
    } return null;
  }

  const next = () => {
    let next = currentStep >= 2? 4: currentStep + 1
    questionStore.addCurrentStep({ currentStep: next })
  }
    
  const prev = () => {
    let prev = currentStep <= 1? 1: currentStep - 1
    questionStore.removeCurrentStep({ currentStep: prev })
  }

  return(
  <>
    <PageHeader/>
    <section className={stylesLayout.home}>
      <h2 className={`visually-hidden`}>Case</h2>
      <article style={style} className={styles.article}>
        <AddSteps />
      </article>
      <article className={styles.sliders}>
        <h3 className={`visually-hidden`}>{questionStore.currentStep}.</h3>
        {settingStore.settings.map(setting => (
          <div key={setting.id} className={styles.wrapperSlider}>
            <Slider 
              name="background:"
              value={setting.color}
              min={23}
              max={255}
              onChange={color => settingStore.updateColor(setting, color)}
            />
            <Slider 
              name="font-size:"
              value={setting.size}
              min={2}
              max={12}
              onChange={size => settingStore.updateSize(setting, size)}
            />
          </div>
        ))}
        <div className={styles.buttonWrapper}>
          {previousButton()}
          {nextButton()}
        </div>
      </article>
    </section>
  </>
  );
};

Home.propTypes = {
  settingStore: PropTypes.observableObject.isRequired,
  questionStore: PropTypes.observableObject.isRequired
};

export default inject(`settingStore`, `questionStore`)(observer(Home));