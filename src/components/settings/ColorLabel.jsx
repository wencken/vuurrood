import React from 'react';
import PropTypes from "prop-types";

const ColorLabel = ({size, color}) => {
 return(
    <h3>Settings({size}, {color})</h3>
 )
}

ColorLabel.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.number.isRequired,
};

export default ColorLabel;
