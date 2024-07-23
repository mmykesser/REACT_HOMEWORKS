import React from 'react';
import ListComponent from './ListComponent.jsx';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: [],
    };
  }

  handlePlus = () => {
    this.setState((prevState) => {
      const newValue = prevState.log.length > 0 ? prevState.log[0] + 1 : 1;
      return { log: [newValue, ...prevState.log] };
    });
  };

  handleMinus = () => {
    this.setState((prevState) => {
      const newValue = prevState.log.length > 0 ? prevState.log[0] - 1 : -1;
      return { log: [newValue, ...prevState.log] };
    });
  };

  handleRemove = (index) => {
    this.setState((prevState) => ({
      log: prevState.log.filter((_, i) => i !== index),
    }));
  };

  render() {
    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={this.handlePlus}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={this.handleMinus}
          >
            -
          </button>
        </div>
        <ListComponent log={this.state.log} handleRemove={this.handleRemove} />
      </div>
    );
  }
}

export default Component;
