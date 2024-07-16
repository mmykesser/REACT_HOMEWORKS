import React from 'react';
import classNames from 'classnames';

class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
    };
  }

  clickBtn = (btnType) => {
    this.setState((startType) => ({
      type: startType.type === btnType ? null : btnType,
    }));
  };

  getBtn(btnSide) {
    return classNames('btn btn-secondary', btnSide, {
      active: this.state.type === btnSide,
    });
  }

  render() {
    return (
      <div className="btn-group" role="group">
        <button
          type="button"
          className={this.getBtn('left')}
          onClick={() => this.clickBtn('left')}
        >
          Left
        </button>
        <button
          type="button"
          className={this.getBtn('right')}
          onClick={() => this.clickBtn('right')}
        >
          Right
        </button>
      </div>
    );
  }
}

export default BtnGroup;
