import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      imgLength: props.img.length,
    };
  }

  handleNext = () => {
    this.setState((prevState) => ({
      index: (prevState.index + 1) % this.state.imgLength,
    }));
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      index:
        (prevState.index - 1 + this.props.img.length) % this.state.imgLength,
    }));
  };

  render() {
    const { index } = this.state;
    const { img } = this.props;

    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {img.map((img, i) => (
            <div
              key={i}
              className={classNames('carousel-item', { active: i === index })}
            >
              <img alt="" className="d-block w-100" src={img} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={this.handlePrev}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={this.handleNext}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

Carousel.propTypes = {
  img: PropTypes.arrayOf(PropTypes.string),
};

Carousel.defaultProps = {
  img: [],
};

export default Carousel;
