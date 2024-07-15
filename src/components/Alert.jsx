import React from 'react';
import PropTypes from 'prop-types';

class Alert extends React.Component {
  render() {
    const { text, type } = this.props;
    return (
      <div className={type} role="alert">
        {text}
      </div>
    );
  }
}

Alert.defaultProps = {
  type: 'alert alert-primary',
  text: 'Hi',
};

Alert.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};
export default Alert;
