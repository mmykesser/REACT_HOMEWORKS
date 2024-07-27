import { Component } from 'react';
import PropTypes from 'prop-types';

class PostCatalog extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="posts">
        <ul className="postslist">
          {data.map((item, index) => (
            <li
              className="posts_single-post "
              data-post-id={item.id}
              key={item.id + '_' + index}
            >
              <h3 className="postspost-title">{item.title}</h3>
              <p className="postspost-description">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

PostCatalog.propTypes = {
  data: PropTypes.array.isRequired,
  itemTitle: PropTypes.string.isRequired,
  itemBody: PropTypes.string.isRequired,
};

export default PostCatalog;
