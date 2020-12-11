import PropTypes from 'prop-types';
import './style.css';

const Button = ({
  name, clickHandler, color, width,
}) => (
  <button
    type="button"
    style={{ backgroundColor: color }}
    onClick={() => clickHandler(name)}
    className={width}
  >
    { name }
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
