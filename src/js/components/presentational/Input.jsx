import React from "react";
import PropTypes from "prop-types";
import "../../../css/index.css"

const Input = ({ error, label, text, type, id, value, handleChange }) => (
    <div className="form-group">
      <label className="mytest" htmlFor={label}>{text}</label>
      <input
        type={type}
        className="form-control is-valid"
        id={id}
        value={value}
        onChange={handleChange}
        required
      />
      <div className="invalid-feedback">Required</div>
    </div>
);
Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export { 
  Input
}