import React from "react";
import PropTypes from "prop-types";

const ChannelValue = ({value, max, name}) => {
  return(
    <>
      {name} {Math.round((value / max) * 100)}%
    </>
  )
}

ChannelValue.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default ChannelValue;