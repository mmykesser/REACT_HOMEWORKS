import React from 'react';
import PropTypes from 'prop-types';

class ListComponent extends React.Component {
  render() {
    const { log, handleRemove } = this.props;
    return (
      <div className="list-group">
        {log.map((value, index) => (
          <button
            key={`${index}_${value}`}
            type="button"
            className="list-group-item list-group-item-action"
            onClick={() => handleRemove(index)}
          >
            {value}
          </button>
        ))}
      </div>
    );
  }
}

ListComponent.propTypes = {
  log: PropTypes.arrayOf(PropTypes.number),
  handleRemove: PropTypes.func,
};

export default ListComponent;
