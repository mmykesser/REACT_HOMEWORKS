import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: true,
    };
  }

  toggleText = () => {
    const { opened } = this.state;
    this.setState({ opened: !opened });
  };

  render() {
    const { text } = this.props;
    return (
      <div>
        <p>
          <a
            className="btn btn-primary"
            data-bs-toggle="collapse"
            onClick={this.toggleText}
            href="#"
            role="button"
            aria-expanded={this.state.opened}
          >
            Link with href
          </a>
        </p>
        <div className={classNames('collapse', { show: this.state.opened })}>
          <div className="card card-body">{text}</div>
        </div>
      </div>
    );
  }
}

Collapse.propTypes = {
  text: PropTypes.string.isRequired,
};

Collapse.defaultProps = {
  text: '',
};
export default Collapse;
