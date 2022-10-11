import PropTypes from 'prop-types';

import StyledInput from "./StyledInput";

const Input = ({ name, label, type, value, handleChange }) => (
  <StyledInput>
    <label className="label" htmlFor="name-field">{label}</label>
    {
      type === 'textarea'
        ? <textarea className={`input-field textarea ${name}`} id={name} name={name} value={value} onChange={handleChange} />
        : <input className={`input-field ${name}`} id={name} name={name} type={type} value={value} onChange={handleChange} />
    }
  </StyledInput>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
