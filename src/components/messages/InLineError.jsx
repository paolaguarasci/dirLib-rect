import React from "react";
import PropTypes from "prop-types";

const InLineError = ({ text }) => (
  <span style={{ color: "#912c2b" }}>{text}</span>
);
InLineError.propType = {
  text: PropTypes.string.isRequired
};
export default InLineError;
