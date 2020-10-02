import React from 'react';
import PropTypes from "prop-types";
import ChannelValue from "./ChannelValue";
import styles from "../../containers/Home.module.css";

const Slider = ({value, max, min, onChange, name}) => {

  const handleSlideValue = (event) => {
    const { value } = event.currentTarget;
    onChange(parseInt(value, 10));
  }

  return(
    <>
      <label htmlFor="" className={`visually-hidden`}><ChannelValue value={value} max={max} name={name}/></label>
      <input 
        className={styles.inputRange}
        type="range" 
        value={value} 
        max={max} 
        min={min}
        onChange={e => handleSlideValue(e)}
      />
    </>
  )
};

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired
};

export default Slider;