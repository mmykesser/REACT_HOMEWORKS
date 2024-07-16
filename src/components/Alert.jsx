import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Alert extends React.Component {
  render() {
    const { text, type } = this.props;

    const alrtClass = classNames('alert', {
      [`alert-${type}`]: type,
    });

    return (
      <div className={alrtClass} role="alert">
        {text}
      </div>
    );
  }
}

Alert.defaultProps = {
  type: 'primary',
  text: 'Hi',
};

Alert.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};
export default Alert;
