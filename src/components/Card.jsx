import React from 'react';

class Card extends React.Component {
  render() {
    const { text } = this.props;
    const { title } = this.props;

    return <div className="card">
      <div className="card-body">
        {title ? <h4 className="card-title">{title}</h4> : null}

        <p className="card-text">{text}</p>
      </div>
    </div>
  }
}


export default Card;