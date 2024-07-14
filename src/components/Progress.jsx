import React from 'react';
import PropTypes from 'prop-types';

class Progress extends React.Component {
  render() {
    const { percentage } = this.props;

    return (
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="progressbar"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  }
}

Progress.defaultProps = {
  percentage: 0,
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default Progress;
